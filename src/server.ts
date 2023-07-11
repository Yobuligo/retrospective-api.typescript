import bodyParser from "body-parser";
import express from "express";
import { BoardController } from "./model/boards/BoardController";
import { NoteController } from "./model/notes/NoteController";

const server = express();
server.use(bodyParser.json());
server.use(new BoardController().router);
server.use(new NoteController().router);
server.listen(5000);
