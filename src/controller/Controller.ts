import { IEntity } from "../shared/types/IEntity";

export abstract class Controller<T extends IEntity>{
    constructor(private readonly path: string){}
}