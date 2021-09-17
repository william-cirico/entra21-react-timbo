const createHttpError = require("http-errors");
const { User } = require("../db/models");
const jwt = require("jsonwebtoken");

function createAccessToken(sub) {
    const token = jwt.sign(
        { sub }, 
        process.env.TOKEN_SECRET, 
        { expiresIn: process.env.TOKEN_EXPIRATION }
    );

    return token;
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const registeredUser = await User.findOne({ where: { email } });    

        // Checando se o usuário existe
        if (!registeredUser) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        // Checando se a senha é válida
        const isPasswordValid = registeredUser.isPasswordValid(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "E-mail ou senha inválidos");
        }

        // Criando o access-token
        const accessToken = createAccessToken(registeredUser.id);        
        
        res.json(accessToken);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login
}