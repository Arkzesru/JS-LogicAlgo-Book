const prompt = require("prompt-sync")(); // Add package for data input.

const vehicle = prompt("Vehicle: "); // Reads the input data.
const price = Number(prompt("Price $: "));

const downPayment = price * 0.5; // Calculate the down payment.
const installment = downPayment / 12; // Calculate the installment.

console.log(`Promotion: ${vehicle}`); // Displays the answers.
console.log(`Down Payment of $ ${downPayment.toFixed(2)}`);
console.log(`+12x de $ ${installment.toFixed(2)}`);