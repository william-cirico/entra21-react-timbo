/*
1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

Obs.: Nome e sobrenome.
*/
const fsp = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

(async () => {
    try {
        const data = await fsp.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        
        const nomes = data.toString("utf-8").split(EOL);

        console.log(nomes.filter(nome => nome[0].toUpperCase() === "A"));        
    } catch (err) {
        console.log(err.message);
    }
})();
