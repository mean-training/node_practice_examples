import { Request, Response } from "express";

var process = require('process');
let _path = process.cwd()
const TodoItem = require(_path + '/server/models').TodoItem;

export = {
    async create(req:Request,res:Response){
        return await TodoItem.create({
            content:req.body.content,
            completed:req.body.completed,
            todoId: req.params.todoId
        })
        .then(todoitem => res.status(201).send(todoitem))
        .catch(error => res.status(401).send(error))
    }
}