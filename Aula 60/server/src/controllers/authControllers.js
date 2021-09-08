const { User, RefreshToken } = require("../db/models");
const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");
const ms = require("ms");

async function createRefreshToken(sub, role) {
    // Definindo o tempo de expiração
    const refreshTokenExpiration = Date.now() + ms(process.env.REFRESH_TOKEN_EXPIRATION);    

    // Criando o token
    const newRefreshToken = jwt.sign(
        { sub, role }, 
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: refreshTokenExpiration }
    );

    // Armazenando o token no banco de dados
    try {
        const [refreshToken, created] = await RefreshToken.findOrCreate({
            where: { user_id: sub },
            defaults: {
                token: newRefreshToken,
                expiresIn: refreshTokenExpiration
            }
        });
    
        if (!created) {
            refreshToken.token = newRefreshToken;
            refreshToken.expiresIn = refreshTokenExpiration;
            await refreshToken.save();
        }
        
        return newRefreshToken;
    } catch (error) {
        console.log(error);
        throw new createHttpError(500, "Refresh token creation error");
    }        
}

function createAccessToken(sub, role) {
    const token = jwt.sign(
        { sub, role }, 
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

        const accessToken = createAccessToken(registeredUser.id, registeredUser.role);
        const refreshToken = await createRefreshToken(registeredUser.id, registeredUser.role);
        
        res.json({ accessToken, refreshToken });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

async function refresh(req, res, next) {
    const { refreshToken } = req.body;

    try {
        const validRefreshToken = await RefreshToken.findOne({
            where: {
                token: refreshToken
            },
            include: "user"
        });
    
        if (!validRefreshToken) {
            throw new createHttpError(401, "Invalid refresh-token");
        }

        if (validRefreshToken.expiresIn < Date.now()) {
            throw new createHttpError(401, "Expirated refresh-token")
        }
    
        const accessToken = createAccessToken(validRefreshToken.user.id);
        const newRefreshToken = await createRefreshToken(validRefreshToken.user.id);
        
        res.json({ accessToken, refreshToken: newRefreshToken });
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    login,
    refresh
};