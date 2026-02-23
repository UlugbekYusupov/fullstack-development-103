// console.log("5"+ 5);
// console.log("5"- 5);
// console.log("5" * "2");
// console.log("10"/ 2);
// console.log(5 + true);
// console.log("10"-true);
// console.log(5+null);
// console.log(5+null);
// console.log(5+ undefined);
// console.log("Salom")

const celsius = 25
const fahrenheit = ( celsius * 9/5) + 32;
console.log('Celsius' , celsius);
console.log("Fahrenheit", fahrenheit)

budget = Number(prompt("enter your total budget:"));
let expense1= Number(prompt("enter expense 1:"));
let expense2= Number(prompt("enter expense 2:"));
let expense3= Number(prompt("enter expense 3:"));
let totalExpenses = expense1 + expense2 + expense3;
let remaining = budget - totalExpenses;
console.log("Total Budget:", budget.toFixed(2));
console.log("Total Expenses:", totalExpenses.toFixed(2));
console.log("Remaining Money:", remaining.toFixed(2));
if (remaining < 0) {
    console.log("Warning: You have overspent!");
} else {
    console.log("You are within your budget.");
}

let a = "42";
let b = "3.14";
let c = "hello"; 
let d = false;
let e = null;


let sum = Number(a) + Number(b) + Number(d) + Number(e);

console.log(sum); 

let limit = 10;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        evenCount++; 
    } else {
        oddCount++; 
    }
}

console.log("Evens:", evenCount);
console.log("Odds:", oddCount);

let num = 1234;
let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10;        
    reversed = (reversed * 10) + lastDigit; 
    num = Math.floor(num / 10);
}

console.log("Reversed:", reversed);

let num1 = 48291;
let largest = 0;

while (num1 > 0) {
    let currentDigit = num1 % 10; 
    
    if (currentDigit > largest) {   
        largest = currentDigit;
    }
    
    num1 = Math.floor(num1 / 10);
}

console.log("Largest digit:", largest);


let num2 = 543;
let sum2 = 0;

while (num2 > 0) {
    let lastDigit = num2 % 10;       
    sum2 += lastDigit;               
    num2 = Math.floor(num2 / 10);      
}

console.log("Sum of digits:", sum);

let num3 = 98765;
let count = 0; 
while (num3 > 0) {
    num3 = Math.floor(num3 / 10);     
    count++; 
}

console.log("Number of digits:", count);
