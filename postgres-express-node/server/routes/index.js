const todoController = require('../controllers').todo;
const todoItemController = require('../controllers').todoItem;

module.exports = (app) => {
    app.get('/api',(req,res) => {
        res.status(201).send({
            message:"Welcome to the todo's app!"
        });
    });

    app.post('/api/todos', todoController.create);
    app.get('/api/todos',todoController.list);
    app.post('/api/todo/:todoId/item',todoItemController.create);
    app.get('/api/todo/:todoId',todoController.retrieve)

}