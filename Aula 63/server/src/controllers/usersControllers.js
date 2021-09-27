const { User } = require("../db/models");
const createHttpError = require("http-errors");
const fs = require("fs");
const path = require("path");

async function createUser(req, res, next) {
    const { name, email, password } = req.body;
    const file = req.file;

    let avatar;
    if (file) {
        avatar = file.location ? file.location : `${process.env.APP_URL}/api/images/${file.filename}`;
    }
    
    try {
        const [user, created] = await User.findOrCreate({
            where: { email: email?.toLowerCase() },
            defaults: { name, password, avatar }
        });

        if (!created) {
            // Remover a imagem caso o usuário já exista
            if (file?.filename) {
                fs.unlinkSync(path.resolve(__dirname, "..", "..", "uploads", file.filename));
            }            

            throw new createHttpError(409, "E-mail já cadastrado");
        }

        return res.status(201).json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function getUser(req, res, next) {
    const userId = res.locals.userId;

    try {
        const user = await User.findOne({ where: { id: userId }});

        if (!user) {
            throw new createHttpError(404, "Usuário não encontrado");
        }

        return res .json(user);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createUser,
    getUser
}