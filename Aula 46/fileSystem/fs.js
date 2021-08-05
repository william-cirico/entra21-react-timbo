// O módulo fs nos permite interagir com o file system.
const fs = require("fs");
const fsPromises = require("fs/promises");

// Obtendo as informações de um arquivo (Callback)
fs.stat(path.resolve(__dirname, "./teste.txt"), (err, stats) => {
    if (err) {
        return console.log(err.message);        
    }

    // Saber se é um arquivo
    console.log(stats.isFile());
    // Saber se é um diretório
    console.log(stats.isDirectory());
    // Saber o tamanho em bytes
    console.log(stats.size + "B");    
});

// Obtendo as informações de um arquivo (Promise)
(async () => {
    try {
        const stats = await fsPromises.stat(path.resolve(__dirname, "./teste.txt"));

        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.size + "B");
    } catch (err) {
        console.log(err.message);
    }
})();