const express = require('express');
const todoController = require('../controllers').todo;
const todoItemController = require('../controllers').todoItem;
const logger = require('../middlewares/test');
const router = express.Router();

module.exports = (app) => {
    app.use(logger.myLogger());
    app.use('/api/v1/todo', router);

    app.get('/api',(req,res) => {
        res.status(201).send({
            message:"Welcome to the todo's app!"
        });
    });

    router.route('/')
    .get(todoController.list)
    .post(todoController.create);

    router.route('/:todoId')
    .get(todoController.retrieve)
    .put(todoController.update)
    .delete(todoController.destroy);

    router.post('/api/todo/:todoId/item',todoItemController.create);

}