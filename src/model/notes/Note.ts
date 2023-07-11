import { DataTypes, Model, ModelStatic } from "sequelize";
import { db } from "../../db/db";
import { INote } from "../../shared/models/INote";
import { IEntity } from "../../shared/types/IEntity";
import { NoteType } from "../../shared/types/NoteType";
import { Enum } from "../../utils/Enum";

export const Note: ModelStatic<Model<INote, IEntity>> = db.define("notes", {
  boardId: DataTypes.STRING,
  noteType: DataTypes.ENUM(...Enum.findKeys(NoteType)),
  text: DataTypes.STRING,
});
