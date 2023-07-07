import { IEntity } from "../types/IEntity";
import { NoteType } from "../types/NoteType";

export interface INote extends IEntity {
  boardId: string;
  noteType: NoteType;
  text: string;
}
