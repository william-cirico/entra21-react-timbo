console.log("Hello World!")


/* 
DOM (Document Object Model) 

Representa todo conteúdo da página como objetos que podem ser modificados.

O nome de cada elemento no dom é Node.
*/

console.log(document)
console.log(typeof document)

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

// Conseguimos modificar o comportamento de toda a página através do DOM
document.body.style.backgroundColor = "red"