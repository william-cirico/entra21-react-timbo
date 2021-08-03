/*
Quando fazemos requisições para uma API Restful precisamos converter
as informações enviadas para JSON.

Para isso utilizamos o formato JSON

Um objeto no formato JSON é similar a um objeto em JS:


JSON:
{
    "nome": "Pedro",
    "idade": 30,            
}

JS:
{
    nome: Pedro,
    idade: 30
}
*/

// Para converter um objeto JS para o formato JSON:
let aluno = {
    nome: "Maria",
    idade: 20,            
}

let alunoJson = JSON.stringify(aluno)
console.log(alunoJson)        
console.log(typeof alunoJson)

// Para converter de JSON para um objeto JS
console.log(JSON.parse(alunoJson))       
