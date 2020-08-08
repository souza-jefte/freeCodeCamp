/**
 * Use uma classe de caráter com vogais ( a, e, i, o, u) no seu regex vowelRegexpara encontrar todas as vogais na cadeia quoteSample.
 */

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result = quoteSample.match(vowelRegex);

//Mostra todas as vogais na referia frase
console.log(result)
