const { Class, User } = require("../db/models");
const { Op } = require("sequelize");
const createHttpError = require("http-errors");

async function createClass(req, res, next) {    
    const { name, teacherId } = req.body;
    try {
        const teacher = await User.findOne({ 
            where: { 
                [Op.and]: [{ id: teacherId }, { role: "teacher" }]                
            }
        });

        if (!teacher) {
            throw new createHttpError(404, "Teacher not found");
        }

        const newClass = await Class.create({ name, teacher_id: teacherId });

        res.status(201).json(newClass);
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

async function removeClass(req, res, next) {
    try {
        
    } catch (error) {
        console.log(error);
        next(error);
    }    
}

module.exports = {
    createClass,
    removeClass
};