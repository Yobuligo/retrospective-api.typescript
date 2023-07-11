import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../../db/db";
import { IBoard } from "../../shared/models/IBoard";
import { IEntity } from "../../shared/types/IEntity";

export const Board: ModelStatic<Model<IBoard, IEntity>> = db.define("boards", {
  title: DataTypes.STRING,
});
