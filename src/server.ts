import bodyParser from "body-parser";
import express from "express";

const server = express();
server.use(bodyParser.json());
server.listen(5000);
