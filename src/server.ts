import bodyParser from "body-parser";
import express from "express";
import { BoardController } from "./model/boards/BoardController";

const server = express();
server.use(bodyParser.json());
server.use(new BoardController().router);
server.listen(5000);
