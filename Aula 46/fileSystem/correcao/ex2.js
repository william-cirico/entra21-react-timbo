const fsp = require("fs/promises");
const path = require("path");

// Criar a função
async function getUserByName(name) {
    // 1) Ler o arquivo
    const data = (await fsp.readFile(path.resolve("users.json"))).toString("utf-8");    
    
    // 2) Converter o JSON recebido para objeto
    const users = JSON.parse(data);    
    
    // 3) Usar o método find dos vetores para procurar o nome
    /*
    [
        { nome: 'João', idade: 25, email: 'joao@email.com' },
        { nome: 'Pedro', idade: 33, email: 'pedro@email.com' },
        { nome: 'Marcos', idade: 16, email: 'marcos@email.com' },
        { nome: 'Maria', idade: 29, email: 'maria@email.com' }
    ]
    */
    const user = users.find(user => user.nome === name);

    // 4) Retornar o que foi encontrado
    return user;
}

(async () => {
    // 5) Chamar a função
    const user = await getUserByName("Pedr");
    
    // 6) Verificar se o usuário foi encontrado 
    //      * Se foi encontrado mostrar os dados dele
    //      * Se não foi encontrado mostrar "Usuário não encontrado"
    if (user) {
        console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
    } else {
        console.log("Usuário não encontrado");
    }
})();