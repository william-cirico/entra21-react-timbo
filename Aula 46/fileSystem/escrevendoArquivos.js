const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");
const { EOL } = require("os");

console.log(EOL);

// Escrevendo informações em um arquivo (Callback)
// const conteudo = `Esse texto foi criado através de um arquivo no node${EOL}Essa é uma nova linha`;

// // Se o arquivo já existir ele será sobrescrevido
// fs.writeFile(path.resolve(__dirname, "teste2.txt"), conteudo, err => {
//     if (err) {
//         return console.log(err.message);
//     }

//     console.log("O arquivo teste2.txt foi criado com sucesso!");
// });

// Escrevendo informações em um arquivo (Promise)
// (async () => {
//     const conteudo = `Esse texto foi criado através de um arquivo no node${EOL}Essa é uma nova linha`;

//     try {
//         await fsPromises.writeFile(path.resolve(__dirname, "teste2.txt"), conteudo);
//         console.log("O arquivo teste2.txt foi criado com sucesso!");
//     } catch(err) {
//         console.log(err);
//     }
// })();

// Adicionando informações em um arquivo (Callback)
// const novoConteudo = EOL + "Uma nova linha foi adicionada :D";
// fs.appendFile(path.resolve(__dirname, "teste2.txt"), novoConteudo, err => {
//     if (err) {
//         return console.log(err.message);
//     }

//     console.log("Novo conteúdo adicionado (Callback)");
// });

// Adicionando informações em um arquivo (Promise)
(async () => {
    const novoConteudo = EOL + "Outra linha foi adicionada :)";
    try {
        await fsPromises.appendFile(path.resolve(__dirname, "teste2.txt"), novoConteudo);
        console.log("Novo conteúdo adicionado (Promise)");
    } catch(err) {
        console.log(err.message);
    }
})();

/*
Exercício:

1. Crie um script que irá salvar as informações de memória a cada 5 segundos em um arquivo chamado log.txt

As informações devem ser salvas no seguinte formato:
{"total_memory":"xx MB", "free_memory":"xx MB", "usage":"xx %"}

Onde:
    * total_memory: Quantidade total de memória.
    * free_memory: Quantidade de memória livre.
    * usage: Porcentagem de uso da memória.

2. Crie um script que leia o arquivo alunos.json e escreva um arquivo aprovados.json com os alunos que foram 
aprovados. Para um aluno ser aprovado a média tem que ser maior ou igual à 6.

O aluno deve ser salvo no formato:
[
    {
        "matricula": 111,
        "nome": "João",
        "email": "joao@email.com",
        "notas": [10, 10, 10],
        "media": 10
    },
    {...}
]

3. Crie um script que leia o arquivo cpfs.txt e utilizando a biblioteca validator.js (https://github.com/validatorjs/validator.js/)
salve os cpfs válidos em um arquivo cpfsvalidos.txt e os cpfs inválidos em um arquivo cpfsinvalidos.txt.
*/