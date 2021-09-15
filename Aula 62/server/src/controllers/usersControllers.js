const { User } = require("../db/models");

async function createUser(req, res, next) {
    try {
        
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {
    createUser
}