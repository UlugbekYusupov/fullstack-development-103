
console.log("5" + 5 );
console.log("5" - 5 );
console.log("5" * "2" );
console.log("10" / 2 );
console.log(5 + true );
console.log("10" - true );
console.log("5" + true );
console.log(5 + null );
console.log(5 + undefined);


// Challange 2
let num1 = Number("200");
console.log(num1 + 50);


// Challange 3
const celsuis = 20
const fahrenheit = (celsuis * 9/5) + 32 
console.log("Celsius:" , celsuis)
console.log("Fahrenheit: " , fahrenheit)


// Challange 4
let budget = Number(prompt("Enter the budget: "));

let expense1 = Number(prompt("Enter the expense 1: "));
let expense2 = Number(prompt("Enter the expense 2: "));
let expense3 = Number(prompt("Enter the expense 3: "));

let allExpenses = expense1 + expense2 + expense3

let result = budget - allExpenses

console.log("Result : " , result)
