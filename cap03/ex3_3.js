/* 1st: Reads the employee's salary.
   2nd: Reads the employee's work time.
   3rd Calculates a 1 percent increase in salary every quadrennium (four years).
   4th Calculates the number of quadrenniums that the employee is entitled and displays it.
   5th Calculate the total salary and displays it.
*/

const prompt = require("prompt-sync")(); // Add the package to the program.

const salary = Number(prompt(`Salary $: `)); // Reads the input data.
const workTime = Number(prompt(`Employee's work time (in years): `));

const quadrenniumsWorked = Math.floor(workTime / 4); // Calculates the quaddreniums worked by employees.
const increaseSalary = salary * 1.01 ** quadrenniumsWorked; // Calculates the salary with 1 percent increase every quadrennium.


console.log(`Number of quadrenniums worked: ${quadrenniumsWorked}`);
console.log(`Total Salary: ${increaseSalary.toFixed(2)}`);