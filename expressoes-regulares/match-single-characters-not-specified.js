/**
 * Crie uma única regex que corresponda a todos os caracteres que não são um número ou uma vogal. Lembre-se de incluir os sinalizadores apropriados na regex.
 */
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result)
