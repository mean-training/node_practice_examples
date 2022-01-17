const express            = require('express');
const todoController     = require('../controllers/todo');
const todoItemController = require('../controllers/todoItem');
const todoRouter = express.Router();
const { validationRule, validate } = require('../middlewares/validate')

todoRouter.get('/',todoController.list);
todoRouter.post('/',
validationRule(),
validate,
todoController.create);


todoRouter.route('/:todoId')
.get(todoController.retrieve)
.put(todoController.update)
.delete(todoController.destroy);

todoRouter.post('/api/todo/:todoId/item',todoItemController.create);

module.exports = todoRouter;