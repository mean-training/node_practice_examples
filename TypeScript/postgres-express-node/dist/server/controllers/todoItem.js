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
const TodoItem = require(_path + '/server/models').TodoItem;
module.exports = {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield TodoItem.create({
                content: req.body.content,
                completed: req.body.completed,
                todoId: req.params.todoId
            })
                .then(todoitem => res.status(201).send(todoitem))
                .catch(error => res.status(401).send(error));
        });
    }
};
//# sourceMappingURL=todoItem.js.map