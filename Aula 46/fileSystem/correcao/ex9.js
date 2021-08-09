/*
3) Crie uma função moveEspecificFiles(oldFolderPath, newFolderPath, extension) que move os arquivos
com a extensão informada para a nova pasta.
*/
const fsp = require("fs/promises");
const path = require("path");

async function moveEspecificFiles(oldFolderPath, newFolderPath, extension) {
    try {
        const fileNames = await fsp.readdir(oldFolderPath);
        
        await fsp.mkdir(newFolderPath, { recursive: true });

        const especificFileNames = fileNames.filter(fileName => path.extname(fileName) === extension);

        for (let fileName of especificFileNames) {
            await fsp.rename(path.resolve(oldFolderPath, fileName), path.resolve(newFolderPath, fileName));
            console.log(`O arquivo ${fileName} foi movido`);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const oldFolderPath = path.resolve("antigo"),
      newFolderPath = path.resolve("novo");

moveEspecificFiles(oldFolderPath, newFolderPath, ".js");