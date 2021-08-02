const circulo = require("./circulo");
const Quadrado = require("./quadrado");

console.log(`A área do círculo de raio 4 é ${circulo.area(4)}`);

const quadrado = new Quadrado(2);
console.log(`A área do quadrado é ${quadrado.area()}`);