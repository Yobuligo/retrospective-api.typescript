import { Router } from "express";
import { dbPool } from "../db/dbConnection";

const NoteRouter = Router();

NoteRouter.get("/notes", (req, res) => {
  dbPool.query("SELECT * FROM notes", (error, result) => {
    if (error) {
      res.status(400).send();
    }
    res.status(200).send(result.rows);
  });
});

export default NoteRouter;
