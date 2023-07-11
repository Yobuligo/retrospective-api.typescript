"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const BoardController_1 = require("./model/boards/BoardController");
const NoteController_1 = require("./model/notes/NoteController");
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(new BoardController_1.BoardController().router);
server.use(new NoteController_1.NoteController().router);
server.listen(5000);
//# sourceMappingURL=server.js.map