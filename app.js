 
// console.log("5"+5);
// console.log("5"- 5);
// console.log("5"* "2");
// console.log("5"/2);
// console.log(5+true);
// console.log("10" - true);
// console.log("5"+true);
// console.log(5+null);
// console.log(5+undefined);




// console.log("200")+50
// String(25) + " years old"
// Boolean("false") 
// console.log("10" - true)




// let budget = Number(prompt("Total budget kiriting"));
// let exp1 = Number(prompt("Expense 1 kiriting"));
// let exp2 = Number(prompt("Expense 2 kiriting"));
// let exp3 = Number(prompt("Expense 3 kiriting"));

// let totalExp = exp1 + exp2 + exp3;
// let remaining = budget - totalExp;

// let overspent = remaining < 0;             
// let overAmount = Math.abs(remaining);

// console.log("Budget " + budget.toFixed(2));
// console.log("Total expenses " + totalExp.toFixed(2));
// console.log("Remaining " + remaining.toFixed(2));

// let messages = [
//   "You are within your budget",
//   "You have overspent by " + overAmount.toFixed(2)
// ];

// console.log(messages[Number(overspent)]);



// // 3
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter temperature in Celsius: ", (answer) => {
//   const celsius = Number(answer);

//   if (Number.isNaN(celsius)) {
//     console.log("Please enter a valid number.");
//     rl.close();
//     return;
//   }

//   const fahrenheit = (celsius * 9 / 5) + 32;

//   console.log(`Celsius: ${celsius}°C`);
//   console.log(`Fahrenheit: ${fahrenheit}°F`);

//   rl.close();
// });


// Challange 1
// const n = Number(prompt("N ni kiriting:"));

// let even = 0;
// let odd = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }

// console.log("Juft sonlar:", even);
// console.log("Toq sonlar:", odd);

// ###############################################################################

// challane 2

// let  = Number(prompt("Son kiriting:"));  

// let rev = 0;          
// let isNegative = false;


// if (n < 0) {
//   isNegative = true;
//   n = -n; 
// }

// while (n > 0) {
//   let digit = n % 10;          
//   rev = rev * 10 + digit;      
//   n = Math.floor(n / 10);     
// }

// if (isNegative) {
//   rev = -rev;
// }

// console.log("Teskari son:", rev);



// // ##

// let number = 58392;   
// let largest = 0;

// while (number > 0) {

//     let digit = number % 10;   

//     if (digit > largest) {     
//         largest = digit;
//     }

//     number = Math.floor(number / 10);  
// }

// console.log("Largest digit:", largest);


// ##



// let number = 12345;
// let sum = 0;

// while (number > 0) {

//     let digit = number % 10;   
//     sum = sum + digit;         

//     number = Math.floor(number / 10);  
// }

// console.log("Sum of digits:", sum);


// ##


// let number = 987654;
// let count = 0;

// while (number > 0) {

//     number = Math.floor(number / 10);  
//     count = count + 1;                 
// }

// console.log("Digit count:", count);


function greet(name) {
    return "Hello, " + name + "!";
}


console.log(greet("Ali"))

