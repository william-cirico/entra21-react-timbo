/*
3. Crie um script que leia o arquivo cpfs.txt e utilizando a biblioteca validator.js (https://github.com/validatorjs/validator.js/)
salve os cpfs válidos em um arquivo cpfsvalidos.txt e os cpfs inválidos em um arquivo cpfsinvalidos.txt.
*/
const path = require("path");
const fsp = require("fs/promises");
const { EOL } = require("os");
const { isValid } = require("cpf");


(async () => {
    try {
        const cpfs = (await fsp.readFile(path.resolve("cpfs.txt"))).toString("utf-8").split(EOL);

        const cpfsValidos = [],
            cpfsInvalidos = [];
        
        for (let cpf of cpfs) {
            isValid(cpf) ? cpfsValidos.push(cpf) : cpfsInvalidos.push(cpf);
        }

        await fsp.writeFile(path.resolve("cpsValidos.txt"), cpfsValidos.join(EOL));
        console.log("Os cpfs válidos foram salvos no arquivo");
        await fsp.writeFile(path.resolve("cpsInvalidos.txt"), cpfsInvalidos.join(EOL));
        console.log("Os cpfs inválidos foram salvos no arquivo");
    } catch (err) {
        console.log(err.message);
    }
})();

