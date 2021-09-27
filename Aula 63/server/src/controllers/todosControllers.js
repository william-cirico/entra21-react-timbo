const createHttpError = require("http-errors");
const { Todo } = require("../db/models");
const { Op } = require("sequelize");

async function getTodos(req, res, next) {
    const { userId } = res.locals;
    try {
        const todos = await Todo.findAll({ where: { user_id: userId } });
        
        res.json(todos);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function createTodo(req, res, next) {
    const { task, expirationDate } = req.body;
    const { userId } = res.locals;
    try {
        const todo = await Todo.create({ task, expirationDate, user_id: userId });

        res.status(201).json(todo);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function editTodo(req, res, next) {
    const todoId = req.params.id;    
    const { task, expirationDate } = req.body;
    try {
        const todo = await Todo.findOne({ where: { id: todoId }});

        if (!todo) {
            throw new createHttpError(404, "Todo não encontrado");
        }

        // Atualizando o Todo
        Object.assign(todo, { task, expirationDate });

        await todo.save();

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function toggleTodo(req, res, next) {
    const todoId = req.params.id;
    const { userId } = res.locals;
    try {
        const todo = await Todo.findOne({ 
            where: {
                [Op.and]: [{ id: todoId }, { user_id: userId }]
            }
        });

        if (!todo) {
            throw new createHttpError(404, "Todo não encontrado");
        }

        todo.completedAt = todo.completedAt ? null : new Date();

        await todo.save();

        res.status(204).end();
    }  catch (error) {
        console.log(error);
        next(error);
    }
}

async function removeTodo(req, res, next) {
    const todoId = req.params.id;
    try {
        const todo = await Todo.findOne({ where: {id: todoId }});

        if (!todo) {
            throw new createHttpError(404, "Todo not found");
        }

        await todo.destroy();

        res.status(204).end();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    getTodos,
    createTodo,    
    editTodo,
    toggleTodo,
    removeTodo     
};