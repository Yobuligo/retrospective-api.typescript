"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../../db/db");
exports.Board = db_1.db.define("boards", {
    title: sequelize_1.DataTypes.STRING,
});
//# sourceMappingURL=Board.js.map