//challenge1
console.log("5"+5);
console.log("5"-5);
console.log("5"+"2");
console.log("10"/2);
console.log(5 + true);
console.log("10"-true);
console.log("5"+true);
console.log(5 + null);
console.log(5 + undefined);

//challenge2
let strNumber = "200";
let result1 = Number(strNumber) + 50;

let age = 25;
let result2 = age + " years old";

let boolString = "false";
let result3 = Boolean(boolString);

let result4 = "10" - true;

console.log("1) '200' + 50 =", result1);
console.log("2) 25 + ' years old' =", result2);
console.log("3) Boolean('false') =", result3);
console.log("4) '10' - true =", result4);

//challenge3
const celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("Celsius:", celsius);
console.log("Fahrenheit:", fahrenheit);

//challenge4
let budget = prompt("Enter your total budget:");
budget = Number(budget);

let expense1 = Number(prompt("Enter expense 1:"));
let expense2 = Number(prompt("Enter expense 2:"));
let expense3 = Number(prompt("Enter expense 3:"));

let totalExpenses = expense1 + expense2 + expense3;
let remaining = budget - totalExpenses;

console.log("Total Budget: " + budget.toFixed(2));
console.log("Total Expenses: " + totalExpenses.toFixed(2));
console.log("Remaining Budget: " + remaining.toFixed(2));

if (remaining < 0) {
    console.log("You have overspent");
}
