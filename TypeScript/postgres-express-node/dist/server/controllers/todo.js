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
var process = require('process');
let _path = process.cwd();
const Todo = require(_path + '/server/models').Todo;
const TodoItem = require(_path + '/server/models').TodoItem;
module.exports = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Todo.create({
                title: req.body.title
            }).then(todo => res.status(201).send(todo))
                .catch(error => res.status(401).send(error));
        });
    },
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let todoList = yield Todo.findAll({
                    include: [{
                            model: TodoItem,
                            as: 'todoItems',
                        }],
                });
                return res.status(200).send(todoList);
            }
            catch (error) {
                return res.status(401).send(error);
            }
        });
    },
    retrieve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Todo.findOne({
                where: {
                    id: req.params.todoId
                },
                include: [{
                        model: TodoItem,
                        as: 'todoItems'
                    }],
            }).then(item => {
                if (!item) {
                    return res.status(400).send({ message: 'Todo not found' });
                }
                return res.status(200).send(item);
            }).catch(error => res.status(400).send(error));
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Todo.update({ title: req.body.title }, {
                    where: { id: req.params.todoId }
                });
                return res.status(200).send({ error: false });
            }
            catch (_a) {
                return res.status(400).send({ error: true });
            }
        });
    },
    destroy(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Todo.destroy({
                    where: { id: req.params.todoId }
                });
                return res.status(200).send({ error: false, message: "Deleted successfully" });
            }
            catch (error) {
                return res.status(500).send({ error: true, message: "Something went wrong" });
            }
        });
    }
};
//# sourceMappingURL=todo.js.map