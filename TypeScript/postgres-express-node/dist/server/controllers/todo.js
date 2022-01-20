"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// const Todo = require('../models').;
const todo_1 = __importDefault(require("../models/todo"));
const todoitem_1 = __importDefault(require("../models/todoitem"));
module.exports = {
    create(req, res) {
        return todo_1.default.create({
            title: req.body.title
        }).then(todo => res.status(201).send(todo))
            .catch(error => res.status(401).send(error));
    },
    list(req, res) {
        return todo_1.default.findAll({
            include: [{
                    model: todoitem_1.default,
                    as: 'todoItems',
                }],
        })
            .then((list) => res.status(200).send(list))
            .catch((error) => res.status(400).send(error));
    },
    retrieve(req, res) {
        return todo_1.default.findOne({
            where: {
                id: req.params.todoId
            },
            include: [{
                    model: todoitem_1.default,
                    as: 'todoItems'
                }],
        }).then(item => {
            if (!item) {
                return res.status(400).send({ message: 'Todo not found' });
            }
            return res.status(200).send(item);
        }).catch(error => res.status(400).send(error));
    },
    update(req, res) {
        return todo_1.default.findOne({
            where: {
                id: req.params.todoId
            },
            include: [{
                    model: todoitem_1.default,
                    as: 'todoItems'
                }]
        }).then(item => {
            if (!item) {
                res.status(400).send({ message: 'todo not found' });
            }
            return item.update({
                title: req.body.title || item.title
            }).then(() => res.status(200).send(item))
                .catch(error => res.status(401).send(error));
        }).catch(error => res.status(400).send(error));
    },
    destroy(req, res) {
        return todo_1.default.findOne({
            where: { id: req.params.todoId }
        })
            .then(todo => {
            if (!todo) {
                return res.status(400).send({ message: 'todo not found' });
            }
            return todo.destroy().then(() => res.status(204).send())
                .catch((error) => res.status(400).send(error));
        });
    }
};
//# sourceMappingURL=todo.js.map