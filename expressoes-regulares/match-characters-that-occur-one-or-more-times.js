/**
 * Encontre a correspondência quando a letra ocorrer uma ou mais vezes em "Mississippi". Escreva uma regex que use o sinal +.
 */
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

//mostrar no console
console.log(result);
