// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log( 5 + true);
// console.log("10" + true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// Number("200") + 50
// console.log(Number("200") + 50)

// const celsius = 25;

// const fahrenheit = (celsius * 9/5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// bonus version

// const celsius = Number(prompt("Enter temperature in Celsius:"));

// const fahrenheit = (celsius * 9/5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// chellenge 4

let budjet = Number(prompt("enter your total budjet"));

let expense1 = Number(prompt("enter first expense"));
let expense2 = Number(prompt("enter second expense"));
let expense3 = Number(prompt("enter third expense"));

let totalExpense = expense1 + expense2 + expense3;  

let remaining = budjet - totalExpense;

console.log("Total Budget:", budget.toFixed(2));
console.log("Total Expenses:", totalExpenses.toFixed(2));
console.log("Remaining Money:", remaining.toFixed(2));

if (remaining < 0) {
    console.log("⚠️ Warning: You have overspent!");
} else {
    console.log("✅ You are within budget.");
}
