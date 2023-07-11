"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardController = void 0;
const Controller_1 = require("../../core/Controller");
const SequelizeRepository_1 = require("../../lib/SequelizeRepository");
const Board_1 = require("./Board");
class BoardController extends Controller_1.Controller {
    constructor() {
        super("/boards", new SequelizeRepository_1.SequelizeRepository(Board_1.Board));
    }
}
exports.BoardController = BoardController;
//# sourceMappingURL=BoardController.js.map