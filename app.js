// Challenge 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / "2");
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// Challenge 2
// console.log("200" + 50);
// console.log("25" + "", "years old")
// console.log("false")
// console.log("10" - true)

// Challenge 3
// const celsius = Number(prompt("Enter temperature in Celsius:"));

// let fahrenheit = (celsius * 9/5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// Challenge 4
// let budget = Number(prompt("Enter your total budget:"));
// let expense1 = Number(prompt("Enter expense 1:"));
// let expense2 = Number(prompt("Enter expens 2:"));
// let expense3 = Number(prompt("Enter expense 3:"));
// let totalExpenses = expense1 + expense2 + expense3;

// let remaining = budget - totalExpenses;

// if (remaining < 0) {
//     console.log("Warning! You have overspent!");
// } else {
//     console.log("You are within your budget.");
// }
// console.log("Remaining money:", remaining);

// Challenge 1
// let number = 11;
// let evenCount = 0;
// let oddCount = 0;
// for (let i = 1; i<= number; i++) {
//     if (i % 2 == 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// console.log("Even numbers:", evenCount);
// console.log("Odd number;", oddCount);

// Challenge 2
// let number = 1234;   
// let reversed = 0;

// while (number > 0) {

//     let digit = number % 10;   
//     reversed = reversed * 10 + digit;   
//     number = Math.floor(number / 10);   
// }

// console.log(reversed);

// Challenge 3
// let number = 4321;
// let largest = 0;
// while (number > 0) {
//     let digit = number % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     number = Math.floor(number / 10)
// }
// console.log("Largest digit:", largest)

// Challeng 4
// let number = 1234;   
// let sum = 0;         
// while (number > 0) {
//     let digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits:", sum);

// Challenge 5
// let number = 12345;
// let count = 0;
// while (number > 0) {
//     let digit = number % 10;
//     number = Math.floor(number / 10);
//     count = count + 1;
// }
// console.log("Number of digits:", count);


// Practice
// let number1 = 10;
// let number2 = 25;
// if (number1 > number2) {
//     console.log("Eng katta son:", number1);
// } else if (number2 > number1) {
//     console.log("Eng katta son:", number2);
// } else {
//     console.log("Ikkala son teng");
// }

    

// let a = 3;
// let b = 7;
// let c = 2;

// let product = a * b * c;

// if (product > 0) {
//     alert("The sign is +");
// } else if  (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The product is 0");
// }

// let numbers = [0, -1, 4];

// numbers.sort(function(a,b) {
//     return b - a;
// });

// alert(numbers.join(","));


// for (let i = 0; i <= 15; i++) {

//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd ");
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     } 
//     else {
//         console.log(i ++);
//     }
// }

// for (let num = 100; num <= 999; num++) {

//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;

//     let sumOfCubes = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3);

//     if (sumOfCubes == num) {
//         console.log(num++)
//     }
// }


// Lesson 6: Array
// function first(arr, n) {
//     if (n < 0) {
//         return n;
//     }
//     if (arr.length === 0) {
//         return [];
//     }
//     if (n === undefined) {
//         return arr[0];
//     }
//     return arr.slice(0, n)
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// function last(arr, n) {
//     if (n === undefined) {
//         return arr[arr.length - 1];
//     }
//     return arr.slice(-n);
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// var myColor = ["Red", "Green", "White", "Black"];
// var result = myColor.join(",");
// console.log(result);


// var num = "025468";
// var result = "";
// for (var i = 0; i < num.length; i++) {
//   result += num[i];
//   if (num[i] % 2 === 0 && num[i+1] % 2 === 0) {
//     result += "-";
//   }

// }

// console.log(result);

// let num = "025468";
// let result = num.split("").join("-");
// console.log(result);

// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort(function(a,b){
//     return a - b;
// })
// console.log(arr1.join(","));

// let str = "The Quick Brown Fox";
// let result = "";
// for (let i = 0; i< str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         result += str[i].toLowerCase();
//     } else {
//         result += str[i].toUpperCase();
//     }
// }
// console.log(result);


// let arr1 = [1, 0, 2, 3, 4];
// let arr2 = [3, 5, 6, 7, 8, 13];
// let result = [];
// let maxLength = Math.max(arr1.length, arr2.lenth);
// for (let i = 0; i < maxLength; i++) {
//     let num1 = arr1[i] || 0;
//     let num2 = arr2[i] || 0;

//     result.push(num1 + num2);
// }
// console.log(result);

