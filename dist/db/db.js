"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const dotenv_1 = require("dotenv");
const pg_1 = require("pg");
const error_1 = require("../shared/utils/error");
(0, dotenv_1.configDotenv)();
exports.db = new pg_1.Pool({
    host: process.env.DB_HOST,
    port: parseInt((_a = process.env.DB_PORT) !== null && _a !== void 0 ? _a : (0, error_1.error)("Error when getting port for db. Port is not defined in .env.")),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
//# sourceMappingURL=db.js.map