"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbConnection_1 = require("../db/dbConnection");
const NoteRouter = (0, express_1.Router)();
NoteRouter.get("/notes", (req, res) => {
    try {
        dbConnection_1.dbPool.query("SELECT * FROM notes", (error, result) => {
            if (error) {
                res.status(400).send();
            }
            res.status(200).send(result.rows);
        });
    }
    catch (error) {
        console.log(error);
    }
    res.status(200).send("Hello World");
});
exports.default = NoteRouter;
//# sourceMappingURL=NotesController.js.map