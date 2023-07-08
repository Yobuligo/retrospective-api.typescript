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
exports.Controller = void 0;
const express_1 = require("express");
class Controller {
    constructor(path, repository) {
        this.path = path;
        this.repository = repository;
        this.router = (0, express_1.Router)();
        this.add();
        this.deleteById();
        this.findAll();
        this.findById();
        this.updateById();
    }
    add() {
        this.router.post(`${this.path}`, (req, res) => {
            this.request(res, () => __awaiter(this, void 0, void 0, function* () {
                const body = Object.assign({}, req.body);
                const item = yield this.repository.add(body);
                res.status(201).send(item);
            }));
        });
    }
    deleteById() {
        this.router.delete(`${this.path}/:id`, (req, res) => {
            this.request(res, () => __awaiter(this, void 0, void 0, function* () {
                const success = yield this.repository.deleteById(parseInt(req.params.id));
                res.status(200).send(success);
            }));
        });
    }
    findAll() {
        this.router.get(this.path, (req, res) => {
            this.request(res, () => __awaiter(this, void 0, void 0, function* () {
                const items = yield this.repository.findAll();
                res.status(200).send(items);
            }));
        });
    }
    findById() {
        this.router.get(`${this.path}/:id`, (req, res) => {
            this.request(res, () => __awaiter(this, void 0, void 0, function* () {
                const item = yield this.repository.findById(parseInt(req.params.id));
                if (item) {
                    res.status(200).send(item);
                }
                else {
                    res.status(404).send();
                }
            }));
        });
    }
    updateById() {
        this.router.put(`${this.path}/:id`, (req, res) => {
            this.request(res, () => __awaiter(this, void 0, void 0, function* () {
                const body = Object.assign({}, req.body);
                const item = yield this.repository.updateById(parseInt(req.params.id), body);
                res.status(200).send(item);
            }));
        });
    }
    request(res, block) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield block();
            }
            catch (error) {
                res.status(400).send(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map