"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("../controllers/todo"));
const todoItem_1 = __importDefault(require("../controllers/todoItem"));
const validate_js_1 = require("../middlewares/validate.js");
// const {validationRule, validate} = require('../middlewares/validate');
let todoRouter = express_1.default.Router();
todoRouter.get('/', todo_1.default.list);
todoRouter.post('/', (0, validate_js_1.validationRule)(), validate_js_1.validate, todo_1.default.create);
todoRouter.route('/:todoId')
    .get(todo_1.default.retrieve)
    .put(todo_1.default.update)
    .delete(todo_1.default.destroy);
todoRouter.post('/api/todo/:todoId/item', todoItem_1.default.create);
module.exports = todoRouter;
//# sourceMappingURL=todoRoutes.js.map