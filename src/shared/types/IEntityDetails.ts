import { IEntity } from "./IEntity";

export type IEntityDetails<T extends IEntity> = Exclude<T, IEntity>
//  Omit<
//   T,
//   "id" | "createdAt" | "changedAt"
// >;
