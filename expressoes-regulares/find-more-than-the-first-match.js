/**
 * Usando o regex starRegex, encontre e extraia ambas as "Twinkle"palavras da string twinkleStar.
 */

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex);

//Mostrar resultado:
console.log(result)