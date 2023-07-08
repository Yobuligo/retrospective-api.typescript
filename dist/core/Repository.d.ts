import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
import { IEntityDetails } from "../shared/types/IEntityDetails";
export declare abstract class Repository<T extends IEntity> implements IRepository<T> {
    private readonly table;
    constructor(table: string);
    add(dataObject: IEntityDetails<T>): Promise<T>;
    delete(dataObject: T): Promise<boolean>;
    deleteById(id: number): Promise<boolean>;
    findAll(): Promise<T[]>;
    findById(id: number): Promise<T | undefined>;
    updateById(id: number, dataObject: IEntityDetails<T>): Promise<T | undefined>;
    private createPromise;
    private buildUpdatePlaceholders;
    private buildUpdateValues;
    private buildColumnNames;
    private buildColumnPlaceholders;
    private buildColumnValues;
}
