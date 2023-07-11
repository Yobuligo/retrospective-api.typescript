import { Model, ModelStatic, WhereOptions } from "sequelize";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class SequelizeRepository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly model: ModelStatic<Model<T, IEntity>>) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.create(dataObject);
      resolve(data.dataValues);
    });
  }

  delete(dataObject: T): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      resolve(this.deleteById(dataObject.id));
    });
  }

  deleteById(id: number): Promise<boolean> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.destroy({
        where: { id: id } as WhereOptions,
      });
      resolve(data === 1);
    });
  }

  findAll(): Promise<T[]> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.findAll();
      const items = data.map((item) => item.dataValues);
      resolve(items);
    });
  }

  findById(id: number): Promise<T | undefined> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.findByPk(id);
      resolve(data?.dataValues ?? undefined);
    });
  }

  updateById(
    id: number,
    dataObject: IEntityDetails<T>
  ): Promise<T | undefined> {
    return this.createPromise(async (resolve) => {
      const data = await this.model.update(dataObject, {
        where: { id: id } as WhereOptions,
        returning: true,
      });
      if (data[0] === 1) {
        resolve(data[1][0].dataValues);
      } else {
        resolve(undefined);
      }
    });
  }

  private createPromise<T>(
    block: (resolve: (value: T | PromiseLike<T>) => void) => void
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        await block(resolve);
      } catch (error) {
        reject(error);
      }
    });
  }
}
