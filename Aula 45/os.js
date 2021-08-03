// O módulo OS nos disponibiliza métodos relacionados ao sistema operacional
const os = require("os");

// Informações sobre as threads do processador
console.log(os.cpus())

// Memória livre (bytes)
let freeMemoryInBytes = os.freemem();
let freeMemoryInMB = parseInt(freeMemoryInBytes / 1024 / 1024);
console.log(`Esse computador tem ${freeMemoryInMB} MB de memória livre`);

// Total de memória disponível no sistema (bytes)
let totalMemoryInBytes = os.totalmem();
let totalMemoryInMB = parseInt(totalMemoryInBytes / 1024 / 1024);
console.log(`Esse computador tem ${totalMemoryInMB} MB de memória RAM`);

// Sistema operacional
console.log(os.platform());

// Quantidade de segundos que o computador está ligado
let uptimeInSeconds = os.uptime();
let uptimeInHours = parseInt(uptimeInSeconds / 60 / 60);
console.log(`Este computador está ligado à: ${uptimeInHours} horas`);


