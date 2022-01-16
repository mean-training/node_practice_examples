const TodoItem = require('../models').TodoItem;

module.exports = {
    create(req,res){
        console.log(req.params.todoId);
        return TodoItem.create({
            content:req.body.content,
            completed:req.body.completed,
            todoId: req.params.todoId
        })
        .then(todoitem => res.status(201).send(todoitem))
        .catch(error => res.status(401).send(error))
    }
}