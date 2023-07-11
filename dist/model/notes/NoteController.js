"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
const Controller_1 = require("../../core/Controller");
const SequelizeRepository_1 = require("../../lib/SequelizeRepository");
const Note_1 = require("./Note");
class NoteController extends Controller_1.Controller {
    constructor() {
        super("/notes", new SequelizeRepository_1.SequelizeRepository(Note_1.Note));
    }
}
exports.NoteController = NoteController;
//# sourceMappingURL=NoteController.js.map