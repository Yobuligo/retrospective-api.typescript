import bodyParser from "body-parser";
import express from "express";

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.listen(5000);
