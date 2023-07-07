"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const NotesController_1 = __importDefault(require("./controller/NotesController"));
const server = (0, express_1.default)();
server.use(body_parser_1.default.json());
server.use(body_parser_1.default.urlencoded());
server.use(NotesController_1.default);
server.listen(5000);
//# sourceMappingURL=server.js.map