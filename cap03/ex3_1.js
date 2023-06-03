const prompt = require("prompt-sync")() // Add package for data input.

const num1 = Number(prompt(`1st Number: `));
const num2 = Number(prompt(`2nd Number: `));
const sum = num1 + num2;
console.log(`The sum is: ${sum}`)