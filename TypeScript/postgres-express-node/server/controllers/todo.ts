import { Request, Response } from "express";

var process    = require('process');
let _path      = process.cwd()
const Todo     = require(_path + '/server/models').Todo;
const TodoItem = require(_path + '/server/models').TodoItem;

export = {

    async create(req:Request, res:Response){
        return await Todo.create({
            title:req.body.title
        }).then(todo => res.status(201).send(todo))
          .catch(error => res.status(401).send(error));
    },

    async list(req:Request,res:Response){
        try{
            let todoList =  await Todo.findAll({
                include: [{
                  model: TodoItem,
                  as   : 'todoItems',
                }],
            });
            return res.status(200).send(todoList);
        }catch(error){
            return res.status(401).send(error);
        }
    },

    async retrieve(req:Request,res:Response){
        return await Todo.findOne({
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
    },

    async update(req:Request,res:Response){
        try{
            await Todo.update({title:req.body.title},{
                where : {id: req.params.todoId}
            });
            return res.status(200).send({error:false});
        }catch{
            return res.status(400).send({error:true});
        }
    },

    async destroy(req:Request,res:Response){
        try{
            await Todo.destroy({
                where: {id: req.params.todoId}
            });
            return res.status(200).send({error:false, message: "Deleted successfully"});
        }catch(error){
            return res.status(500).send({error:true, message:"Something went wrong"});
        }
    }
}