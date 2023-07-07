import { db } from "../db/db";
import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";

export abstract class Repository<T extends IEntity> implements IRepository<T> {
  constructor(private readonly table: string) {}

  add(dataObject: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }

  delete(dataObject: IEntityDetails<T>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  deleteById(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<T[]> {
    return new Promise(async (resolve, reject) => {
      const items = await db.query(`SELECT * FROM ${this.table}`);
      resolve(items.rows);
    });
  }

  findById(id: number): Promise<T | undefined> {
    throw new Error("Method not implemented.");
  }

  updateById(id: number, dataObject: IEntityDetails<T>): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
