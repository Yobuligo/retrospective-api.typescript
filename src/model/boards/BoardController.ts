import { Controller } from "../../core/Controller";
import { SequelizeRepository } from "../../lib/SequelizeRepository";
import { IBoard } from "../../shared/models/IBoard";
import { Board } from "./Board";

export class BoardController extends Controller<IBoard> {
  constructor() {
    super("/boards", new SequelizeRepository(Board));
  }
}
