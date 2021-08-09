/*
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
*/
const fsp = require("fs/promises");
const path = require("path");

(async () => {    
    try {
        const alunosJSON = (await fsp.readFile(path.resolve("alunos.json"))).toString("utf-8");
        
        const alunos = JSON.parse(alunosJSON);
        
        for (let aluno of alunos) {        
            let soma = 0;

            for (nota of aluno.notas) {                
                soma += nota;
            }

            const media = soma / aluno.notas.length;

            aluno.media = media;
        }

        const alunosAprovados = alunos.filter(aluno => aluno.media >= 6);
        
        await fsp.writeFile(path.resolve("aprovados.json"), JSON.stringify(alunosAprovados, null, 4));
        console.log("Alunos aprovados foram salvos no arquivo aprovados.json");
    } catch (err) {
        console.log(err.message);
    }
})();