/* 1st: Read the weight of the ration (in kilograms).
   2nd: Reads how much the cat consumes per day (in grams).
   3rd: Inform how many days the ration will last.
   4rd: Inform how much of the ration will remain (in grams).
*/

const prompt = require("prompt-sync")(); // Allow the input data via prompt.

const weightKilograms = Number(prompt(`Weight of the ration (kg): `));
const catConsumptionDaily = Number(prompt(`Cat's daily consumption (g): `));

const weightGrams = (weightKilograms * 1000);

const duration = Math.floor(weightGrams / catConsumptionDaily);
const remnant = weightGrams % catConsumptionDaily;

console.log(`Duration in days: ${duration}`);
console.log(`Remaining amount of the ration: ${remnant}g`);