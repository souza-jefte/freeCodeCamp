/**
 * Combine todas as letras da sequência quoteSample.
 */

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//Mostrar resultado:
console.log(result)
