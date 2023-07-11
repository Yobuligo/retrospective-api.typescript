"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const sequelize_1 = require("sequelize");
const error_1 = require("../shared/utils/error");
(0, dotenv_1.configDotenv)();
exports.db = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : (0, error_1.error)()),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
//# sourceMappingURL=db.js.map