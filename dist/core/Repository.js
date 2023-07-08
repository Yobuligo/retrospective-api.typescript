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
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const columns = this.buildColumnNames(dataObject);
            const placeholder = this.buildColumnPlaceholders(dataObject);
            const values = this.buildColumnValues(dataObject);
            const query = `INSERT INTO ${this.table}(${columns}) VALUES (${placeholder}) RETURNING *`;
            const item = yield db_1.db.query(query, values);
            resolve(item.rows[0]);
        }));
    }
    delete(dataObject) {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            resolve(this.deleteById(dataObject.id));
        }));
    }
    deleteById(id) {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield db_1.db.query(`DELETE FROM ${this.table} WHERE id = $1`, [
                id,
            ]);
            resolve(data.rowCount === 1);
        }));
    }
    findAll() {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield db_1.db.query(`SELECT * FROM ${this.table}`);
            resolve(data.rows);
        }));
    }
    findById(id) {
        return this.createPromise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const data = yield db_1.db.query(`SELECT * FROM ${this.table} WHERE id = $1`, [
                id,
            ]);
            resolve(data.rows[0]);
        }));
    }
    updateById(id, dataObject) {
        return this.createPromise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE ${this.table} SET ${this.buildUpdatePlaceholders(dataObject)} WHERE id = $1 RETURNING *`;
            const data = yield db_1.db.query(query, [
                id,
                ...this.buildUpdateValues(dataObject),
            ]);
            resolve(data.rows[0]);
        }));
    }
    createPromise(block) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield block(resolve, reject);
            }
            catch (error) {
                reject(error);
            }
        }));
    }
    buildUpdatePlaceholders(dataObject) {
        let code = "";
        let count = 1;
        for (const propName in dataObject) {
            count++;
            if (code.length === 0) {
                code = `${propName}=$${count}`;
            }
            else {
                code += `,${propName}=$${count}`;
            }
        }
        count++;
        code += `,createdAt=$${count}`;
        return code;
    }
    buildUpdateValues(dataObject) {
        const result = [];
        for (const propName in dataObject) {
            result.push(dataObject[propName]);
        }
        result.push(new Date().toUTCString());
        return result;
    }
    buildColumnNames(dataObject) {
        let code = "";
        for (const propName in dataObject) {
            if (code.length === 0) {
                code = propName;
            }
            else {
                code += `,${propName}`;
            }
        }
        return code;
    }
    buildColumnPlaceholders(dataObject) {
        let count = 0;
        let code = "";
        for (const propName in dataObject) {
            count++;
            if (code.length === 0) {
                code = `$${count}`;
            }
            else {
                code = `,$${count}`;
            }
        }
        return code;
    }
    buildColumnValues(dataObject) {
        const result = [];
        for (const propName in dataObject) {
            result.push(dataObject[propName]);
        }
        return result;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=Repository.js.map