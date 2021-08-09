


// const os = require("os");
// const fsPromises = require("fs/promises");
// const path = require("path");

// setInterval(async () => {
//     const freeMemory = parseInt(os.freemem() / 1024 / 1024),
//           totalMemory = parseInt(os.totalmem() / 1024 / 1024),
//           usage = parseInt((freeMemory * 100) / totalMemory);
    
//     const content = {
//         freeMemory: `${freeMemory} MB`,
//         totalMemory: `${totalMemory} MB`,
//         usage: `${usage} %`
//     }

//     const contentInJSON = JSON.stringify(content) + os.EOL;

//     try {
//         await fsPromises.appendFile(path.resolve(__dirname, "log.txt"), contentInJSON);
//         console.log("Log adicionado");
//     } catch(err) {
//         console.log(err.message);
//     }
// }, 5000);

const os = require("os");
const fsp = require("fs/promises");
const path = require("path");

setInterval(async () => {
    const freeMemory = parseInt(os.freemem() / 1024 / 1024),
          totalMemory = parseInt(os.totalmem() / 1024 / 1024)
          usage = parseInt((freeMemory * 100) / totalMemory);
    
    const data = {
        free_memory: `${freeMemory} MB`,
        total_memory: `${totalMemory} MB`,
        usage: `${usage} %`
    }

    const content = JSON.stringify(data) + os.EOL;

    // Inserindo no arquivo
    try {
        await fsp.appendFile(path.resolve(__dirname, "log.txt"), content);
        console.log(content)
    } catch(err) {
        console.log(err.message);
    }

    console.log(JSON.stringify(data));
}, 5000);