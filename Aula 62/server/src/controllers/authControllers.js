const { User } = require("../db/models");

function createAccessToken(sub) {
    const token = jwt.sign(
        { sub }, 
        process.env.ACCESS_TOKEN_SECRET, 
        { expiresIn: process.env.ACCESS_TOKEN_EXPIRATION }
    );

    return token;
}

async function login(req, res, next) {
    try {
        const { email, password } = req.body;

        const registeredUser = await User.findOne({ where: { email } });    

        // Checando se o usuário existe
        if (!registeredUser) {
            throw new createHttpError(401, "E-mail or password invalid");
        }

        // Checando se a senha é válida
        const isPasswordValid = registeredUser.isPasswordValid(password);

        if (!isPasswordValid) {
            throw new createHttpError(401, "E-mail or password invalid");
        }

        // Criando o access-token
        const accessToken = createAccessToken(registeredUser.id, registeredUser.role);        
        
        res.json({ accessToken });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login
}