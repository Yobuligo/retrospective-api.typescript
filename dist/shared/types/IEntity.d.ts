import { IHaveChangedAt } from "./IHaveChangedAt";
import { IHaveCreatedAt } from "./IHaveCreatedAt";
import { Identifier } from "./Identifier";
export interface IEntity extends IHaveCreatedAt, IHaveChangedAt {
    id: Identifier;
}
