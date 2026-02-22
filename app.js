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
//============================================================================================================

//LECTURE 3 
// Challenge 1
let number = +prompt("Enter number:");
let evens = 0;
let odds = 0;

for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
        evens++; 
    } else {
        odds++;  
    }
}

console.log("Even numbers: " + evens);
console.log("Odd numbers: " + odds);

//Challenge 2 
let nuM = +prompt("Enter the number for reverse:");
let reversed = 0;

while (nuM > 0) {
    let lastDigit = nuM % 10; 
    reversed = (reversed * 10) + lastDigit; 
    nuM = Math.floor(nuM / 10); 
}

console.log("Reversed number: " + reversed);

//Challenge 3
let nUm = +prompt("Raqamlarini tekshirish uchun son kiriting:");
let maxDigit = 0;

while (nUm > 0) {
    let digit = nUm % 10;
    if (digit > maxDigit) {
        maxDigit = digit; 
    }
    nUm = Math.floor(num / 10);
}

console.log("The biggest number: " + maxDigit);

//Challenge 4
let Num = +prompt("To get sum of numbers:");
let sum = 0;

while (Num > 0) {
    sum += Num % 10;
    Num = Math.floor(Num / 10);
}

console.log("Sum of numbers: " + sum);

//Challenge 5
let numBer = +prompt("Enter number:");
let count = 0;

if (numBer === 0) count = 1; 

while (numBer > 0) {
    numBer = Math.floor(num / 10);
    count++; 
}

console.log("Amout of digits: " + count);