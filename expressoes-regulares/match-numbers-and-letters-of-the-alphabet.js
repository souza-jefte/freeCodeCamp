/**
 * Crie uma única regex que corresponda a um intervalo de   letras entre "h" e "s", e um intervalo de números entre 2 e 6. Lembre-se de incluir os sinalizadores apropriados na regex.
 */

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//mostrar resultado:
console.log(result)
