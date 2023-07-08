import { IEntity } from "../types/IEntity";
import { IEntityDetails } from "../types/IEntityDetails";
import { Identifier } from "../types/Identifier";

export interface IRepository<T extends IEntity> {
  add(dataObject: IEntityDetails<T>): Promise<T>;
  delete(dataObject: T): Promise<boolean>;
  deleteById(id: Identifier): Promise<boolean>;
  findAll(): Promise<T[]>;
  findById(id: Identifier): Promise<T | undefined>;
  updateById(id: Identifier, dataObject: IEntityDetails<T>): Promise<T | undefined>;
}
