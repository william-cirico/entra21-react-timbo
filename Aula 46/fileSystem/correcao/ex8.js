/*
2) Crie uma função moveFiles(oldFolderPath, newFolderPath) que move os arquivos da pasta original
para a nova pasta.
*/
const fsp = require("fs/promises");
const path = require("path");

async function moveFiles(oldFolderPath, newFolderPath) {
    try {
        const fileNames = await fsp.readdir(oldFolderPath);
        
        await fsp.mkdir(newFolderPath, { recursive: true });

        for (let fileName of fileNames) {
            await fsp.rename(path.resolve(oldFolderPath, fileName), path.resolve(newFolderPath, fileName));
            console.log(`O arquivo ${fileName} foi movido`);
        }
        
    } catch (error) {
        console.log(error.message);
    }
}

const oldFolderPath = path.resolve("antigo"),
      newFolderPath = path.resolve("novo");

moveFiles(newFolderPath, oldFolderPath);