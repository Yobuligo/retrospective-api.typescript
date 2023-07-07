"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const db_1 = require("../db/db");
class Repository {
    constructor(table) {
        this.table = table;
    }
    add(dataObject) {
        throw new Error("Method not implemented.");
    }
    delete(dataObject) {
        throw new Error("Method not implemented.");
    }
    deleteById(id) {
        throw new Error("Method not implemented.");
    }
    findAll() {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const items = yield db_1.db.query(`SELECT * FROM ${this.table}`);
            resolve(items.rows);
        }));
    }
    findById(id) {
        throw new Error("Method not implemented.");
    }
    updateById(id, dataObject) {
        throw new Error("Method not implemented.");
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map