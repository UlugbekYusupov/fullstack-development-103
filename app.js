//Challange 1
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * 2);
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 - null);
console.log(5 + undefined);

//Challange 2
let num = Number("200") + 50
console.log(num);
let age = 25 + " years old"
console.log(age);
var checking = Boolean("false")
console.log(checking)
console.log("10"-true);

//Challange 3
const C = 13;
//C = 30; // TypeError: Assignment to constant variable
const F = (C * 9/5)+32;
console.log("Celsius:", C);
console.log("Faranheit:", F);
//Bonus
const userInput = prompt("Enter temperature in Celsius:")
const convertedF = (Number(userInput)*9/5)+32;
console.log("Celsius:" + userInput);
console.log("Farenheit:" + convertedF);

//Challange 4
let totalBudget = prompt("Enter your overall budget:(UZS)");
totalBudget = Number(totalBudget);
//Expenses
let exp1 = prompt("Expense 1:(UZS)");
let exp2 = prompt("Expense 2:(UZS)");
let exp3 = prompt("Expense 3:(UZS)");
//Budget - Expenses
let totalExp = Number(exp1) + Number(exp2) + Number(exp3);
let remaining = totalBudget - totalExp;
//Checking Budget
if(remaining < 0 ){
    console.log("Warning: You spent too much money!")
}
console.log("Remaining: " + remaining.toFixed(2) + " UZS")