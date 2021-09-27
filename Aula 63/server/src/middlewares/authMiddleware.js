const createHttpError = require("http-errors");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {        
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        next(createHttpError(401, "Token is missing"));
    }
    
    try {
        const payload = jwt.verify(token, process.env.TOKEN_SECRET);                        
                        
        res.locals.userId = payload.sub;

        next();
    } catch (error) {
        console.log(error);
        next(createHttpError(401, "Invalid Token"));
    }       
}