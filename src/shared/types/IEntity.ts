import { IHaveChangedAt } from "./IHaveChangedAt";
import { IHaveCreatedAt } from "./IHaveCreatedAt";

export interface IEntity extends IHaveCreatedAt, IHaveChangedAt {
  id: string;
}
