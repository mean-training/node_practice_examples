import express from 'express';
import todoController from '../controllers/todo';
import todoItemController from '../controllers/todoItem';
import {validationRule, validate} from '../middlewares/validate.js';

// const {validationRule, validate} = require('../middlewares/validate');

let todoRouter  = express.Router();

todoRouter.get('/',todoController.list);
todoRouter.post('/',validationRule(),validate,todoController.create);

todoRouter.route('/:todoId')
    .get(todoController.retrieve)
    .put(todoController.update)
    .delete(todoController.destroy);

todoRouter.post('/api/todo/:todoId/item',todoItemController.create);

export = todoRouter;