"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbPool = void 0;
const node_postgres_1 = require("node-postgres");
exports.dbPool = new node_postgres_1.Pool({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "master",
});
//# sourceMappingURL=dbConnection.js.map