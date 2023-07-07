import { IRepository } from "../shared/api/IRepository";
import { IEntity } from "../shared/types/IEntity";
export declare abstract class Controller<T extends IEntity> {
    private readonly path;
    private readonly repository;
    readonly router: import("express-serve-static-core").Router;
    constructor(path: string, repository: IRepository<T>);
    private add;
    private deleteById;
    private findAll;
    private findById;
    private updateById;
    private request;
}
