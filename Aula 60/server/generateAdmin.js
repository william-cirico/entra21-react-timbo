const { User } = require("./src/db/models");

(async () => {
    let { name, email, password } = require('minimist')(process.argv.slice(2));
    
    password = password.toString();

    try {
        await User.create({ name, email, password, role: "admin" });

        console.log(`Admin com o email: ${email} e senha: ${password} foi criado`);
    } catch (error) {
        console.log("Unable to create admin user");
        console.log(error);
    }
})();