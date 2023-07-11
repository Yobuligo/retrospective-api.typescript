"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db/db");
const NoteType_1 = require("../../shared/types/NoteType");
const Enum_1 = require("../../utils/Enum");
exports.Note = db_1.db.define("notes", {
    boardId: sequelize_1.DataTypes.STRING,
    noteType: sequelize_1.DataTypes.ENUM(...Enum_1.Enum.findKeys(NoteType_1.NoteType)),
    text: sequelize_1.DataTypes.STRING,
});
//# sourceMappingURL=Note.js.map