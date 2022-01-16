const Todo = require('../models').Todo;
const TodoItem = require('../models').TodoItem;

module.exports = {
    create(req,res){
        return Todo.create({
            title:req.body.title
        }).then(todo => res.status(201).send(todo))
          .catch(error => res.status(401).send(error));
    },
    list(req,res){
        return Todo.findAll({
            include: [{
              model: TodoItem,
              as   : 'todoItems',
            }],
          })
        .then((list) => res.status(200).send(list))
        .catch((error) => res.status(400).send(error));
    },
    retrieve(req,res){
        return Todo.findAll({
            where:{
                id: req.params.todoId
            },
            include :[{
                model: TodoItem,
                as   : 'todoItems'
            }],
        }).then(item => {
            if(!item){
                return res.status(400).send({message: 'Todo not found'});
            }
            return res.status(200).send(item)
        }).catch(error => res.status(400).send(error))
    }
}