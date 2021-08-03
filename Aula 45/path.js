// O módulo path provê formas de se trabalhar com os caminhos de arquivos
const path = require("path");

// Podemos acessar a pasta do arquivo atual através da variável __dirname
console.log(__dirname);

// Com o arquivo incluso:
console.log(__filename);

// Obter a extensão de um arquivo
console.log(path.extname(__filename));

// Retorna um objeto com todas as propriedades do caminho informado:
console.log(path.parse(__filename));

// Junta todos os caminhos informados usando o separador específico do SO.
console.log(path.join(__dirname, "src", "teste.js"));

// Junta todos os caminhos informados para formar um caminho absoluto (Parte do diretório atual).
console.log(path.resolve("src", "teste.js"));