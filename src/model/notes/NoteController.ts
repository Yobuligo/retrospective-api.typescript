import { Controller } from "../../core/Controller";
import { SequelizeRepository } from "../../lib/SequelizeRepository";
import { INote } from "../../shared/models/INote";
import { Note } from "./Note";

export class NoteController extends Controller<INote> {
  constructor() {
    super("/notes", new SequelizeRepository(Note));
  }
}
