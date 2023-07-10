import { Model, ModelStatic } from "sequelize";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export class SequelizeRepository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly model: ModelStatic<Model<T, IEntity>>) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }

  delete(dataObject: T): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<T[]> {
    return new Promise(async (resolve) => {
      const data = await this.model.findAll();
      const items = data.map((item) => item.dataValues);
      resolve(items);
    });
  }

  findById(id: number): Promise<T | undefined> {
    return new Promise(async (resolve) => {
      const data = await this.model.findByPk(id);
      resolve(data?.dataValues ?? undefined);
    });
  }

  updateById(
    id: number,
    dataObject: IEntityDetails<T>
  ): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }
}
