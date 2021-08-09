/*
1) Crie uma função obterArquivos(path) que receba como parâmetro o path de um diretório
e retorne um vetor com todos os arquivos presentes naquele diretório.

Obs.: Diretórios não devem ser incluídos.
*/
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

async function obterArquivos(caminho) {
    try {
        const fileNames = await fsp.readdir(caminho);
        const files = fileNames.filter(fileName => fs.statSync(path.resolve(caminho, fileName)).isFile());
        
        return files;
    } catch (error) {   
        console.log(error.message);
    }
}



obterArquivos(__dirname)
    .then(result => console.log(result));