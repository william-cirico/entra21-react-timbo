const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// Criando uma pasta (Callback)
const nomeNovaPasta = path.resolve(__dirname, "novaPasta");
fs.mkdir(nomeNovaPasta, { recursive: true }, (err) => {
    if (err) {
        return console.log(err.message);
    }    
});

// Criando uma pasta (Promise)
(async () => {
    const nomeNovaPasta = path.resolve(__dirname, "novaPasta");
    try {
        await fsPromises.mkdir(nomeNovaPasta, { recursive: true });
    } catch (err) {
        console.log(err.message);
    }    
})();

// Lendo os arquivos dentro de uma pasta (Callback)
const nomePasta = path.resolve(__dirname, "..", "modulosNode");
fs.readdir(nomePasta, (err, files) => {
    if (err) {
        return console.log(err.message);
    }

    console.log(files);
});


// Lendo os arquivos dentro de uma pasta (Promise)
(async () => {
    const nomePasta = path.resolve(__dirname, "..", "modulosNode");
    
    const files = await fsPromises.readdir(nomePasta);

    console.log(files);
})();


// Renomeando uma pasta/arquivo (Callback)
fs.rename(path.resolve(__dirname, "vouSerRenomeado.js"), "fuiRenomeado.js", err => {
    if (err) {
        return console.log(err.message);
    }

    console.log("Arquivo renomeado (Callback)");
});

// Renomeando uma pasta/arquivo (Promise)
(async () => {
    try {
        await fsPromises.rename(path.resolve(__dirname, "vouSerRenomeado.js"), "fuiRenomeado.js");
        console.log("Arquivo renomeado (Promise)");
    } catch (err) {
        console.log(err.message);
    }    
})();

// Remover uma pasta/arquivo (Callback)
fs.rm(path.resolve(__dirname, "pastaRemovida"), { recursive: true, force: true }, err => {
    if (err) {
        return console.log(err.message);
    }

    console.log("Arquivo/Pastas removido (Callback)");
});

// Remover uma pasta/arquivo (Promise)
(async () => {
    try {
        await fsPromises.rm(path.resolve(__dirname, "pastaRemovida"), {recursive: true, force: true });
        console.log("Arquivo/Pasta removido (Promise)")        ;
    } catch (err) {
        console.log(err.message);
    }
})();


/*
Exercício

1) Crie uma função obterArquivos(path) que receba como parâmetro o path de um diretório
e retorne um vetor com todos os arquivos presentes naquele diretório.

Obs.: Diretórios não devem ser incluídos.
const fsPromises = require("fs/promises");
const fs = require("fs");
const path = require("path");

async function obterArquivos(folderPath) {
    try {
        const data = await fsPromises.readdir(folderPath);
        
        const files = data.filter(file => fs.statSync(path.resolve(folderPath, file)).isFile());

        console.log(files);
    } catch (err) {
        console.log(err);
    }
}

obterArquivos(__dirname);

2) Crie uma função moveFiles(oldFolderPath, newFolderPath) que move os arquivos da pasta original
para a nova pasta.

const fsPromises = require("fs/promises");
const path = require("path");

async function moveFiles(oldFolderPath, newFolderPath) {                    
    try {
        const files = await fsPromises.readdir(oldFolderPath);
        
        // Criando a pasta se ela não existir
        await fsPromises.mkdir(newFolderPath, { recursive: true }); 

        // Movendo os arquivos
        for (file of files) {
            await fsPromises.rename(path.resolve(oldFolderPath, file), path.resolve(newFolderPath, file));
            console.log(`O arquivo ${file} foi movido`);
        }         
    } catch (err) {
        console.log(err.message);
    } 
}

const oldFolderPath = "C:\\Users\\william.cirico\\Desktop\\projetoPesado",
      newFolderPath = "C:\\Users\\william.cirico\\Desktop\\novaPasta";

moveFiles(newFolderPath, oldFolderPath);

3) Crie uma função moveEspecificFiles(oldFolderPath, newFolderPath, extension) que move os arquivos
com a extensão informada para a nova pasta.

const fsPromises = require("fs/promises");
const path = require("path");

async function moveEspecificFiles(oldFolderPath, newFolderPath, extension) {            
    // Criando a pasta se ela não existir
    try {
        const files = await fsPromises.readdir(oldFolderPath);
        
        await fsPromises.mkdir(newFolderPath, { recursive: true });  

        // Filtrando os arquivos com a mesma extensão    
        const especificFiles = files.filter(file => path.extname(path.resolve(oldFolderPath, file)) === extension);    
        // Movendo os arquivos
        for (file of especificFiles) {
            await fsPromises.rename(path.resolve(oldFolderPath, file), path.resolve(newFolderPath, file));
            console.log(`O arquivo ${file} foi movido`);
        }
    } catch (err) {
        console.log(err.message);
    } 
}

const oldFolderPath = "C:\\Users\\william.cirico\\Desktop\\projetoPesado",
      newFolderPath = "C:\\Users\\william.cirico\\Desktop\\novaPasta";

moveEspecificFiles(oldFolderPath, newFolderPath, ".txt");
*/