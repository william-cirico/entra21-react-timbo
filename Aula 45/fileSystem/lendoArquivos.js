const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// Lendo as informações de um arquivo (Callback)
fs.readFile(path.resolve(__dirname, "teste.txt"), (err, data) => {
    if (err) {
        return console.log(err.message);
    }

    // data é um Buffer: https://nodejs.org/docs/latest-v14.x/api/buffer.html#buffer_class_buffer
    // Portanto precisamos converter para utf-8 para conseguirmos visualizar o conteúdo do arquivo.
    console.log(data.toString("utf-8"));
});

// Lendo as informações de um arquivo (Promise)
(async () => {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "teste.txt"));

        console.log(data.toString("utf-8"))
    } catch (err) {
        console.log(err.message);
    }
})();

/*
Exercício

1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

Obs.: Nome e sobrenome.

const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);
        const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        console.log(nomesComA);
    } catch (err) {
        console.log(err.message);
    }
})();

2) Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
não exista a função deve retornar undefined.

Se o usuário existir mostrar as informações do usuário no seguinte formato:
Usuário encontrado: 
nome: [nome do usuário]
idade: [idade do usuário]
email: [email do usuário]

Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado."

const fsPromises = require("fs/promises");
const path = require("path");

async function getUserByName(name) {
    try {
        const data = await fsPromises.readFile(path.resolve(__dirname, "users.json"));
        const users = JSON.parse(data.toString("utf-8"));
        
        const user = users.find(user => user.nome === name);

        return user
    } catch (err) {
        console.log(err.message);
    }
}

(async () => {
    const user = await getUserByName("Pedr");

    if (user) {
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    } else {
        console.log("Usuário não foi encontrado!");
    }
})();

3) Faça um script que leia o arquivo exercioNomes.txt e utilize a biblioteca chalk (https://www.npmjs.com/package/chalk) para
mostrar os nomes que começam com a letra A em vermelho, os nomes que começam com a letra C em azul e os
nomes que começam com a letra D em magenta.

const path = require("path");
const fsPromises = require("fs/promises");
const { EOL } = require("os");
const chalk = require("chalk");

(async () => {
    try {   
        const data = await fsPromises.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        const nomes = data.toString("utf-8").split(EOL);

        for (let nome of nomes) {
            switch (nome[0].toUpperCase()) {
                case "A":
                    console.log(chalk.red(nome));
                    break;
                case "C":
                    console.log(chalk.blue(nome));
                    break;
                case "D":
                    console.log(chalk.magenta(nome));
                    break;
                default:
                    console.log(nome);
            }
        }
        // const nomesComA = nomes.filter(nome => nome[0].toUpperCase() === "A");
        // const nomesComC = nomes.filter(nome => nome[0].toUpperCase() === "C");
        // const nomesComD = nomes.filter(nome => nome[0].toUpperCase() === "D");

        // nomesComA.forEach(nome => console.log(chalk.red(nome)));
        // nomesComC.forEach(nome => console.log(chalk.blue(nome)));
        // nomesComD.forEach(nome => console.log(chalk.magenta(nome)));
    } catch (err) {
        console.log(err.message);
    }
})();
*/