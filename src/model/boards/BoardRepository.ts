import { Repository } from "../../core/Repository";
import { IBoard } from "../../shared/models/IBoard";

export class BoardRepository extends Repository<IBoard> {
  constructor() {
    super("boards");
  }
}
