function dizOi() {
    console.log("Oi")
}

function dizTchau() {
    console.log("Tchau")
}

let objeto = {
    nome: "João",
    sobrenome: "da Silva"
}

// Exportação padrão (Uma por módulo)
export default dizTchau
// Exportação explícita
export {dizOi, objeto}

export class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}