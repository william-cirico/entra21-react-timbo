const createHttpError = require("http-errors");
const { Todo } = require("../db/models");

async function createTodo(req, res, next) {
    const { task, expirationDate, userId } = req.body;
    try {
        const todo = Todo.create({ task, expirationDate, user_id: userId });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function editTodo(req, res, next) {
    const todoId = req.params.id;    
    const { task, completed, expirationDate } = req.body;
    try {
        const todo = Todo.findOne({ where: { id: todoId }});

        if (!todo) {
            throw new createHttpError(404, "Todo not found");
        }

        Object.assign()
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function removeTodo(req, res, next) {
    try {
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createTodo,    
    editTodo,
    removeTodo     
};