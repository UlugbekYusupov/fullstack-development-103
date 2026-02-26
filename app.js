// console.log("5"+ 5); 
// console.log("5" - 5);
// console.log("5" * 2);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + ture);
// console.log(5 + null);
// console.log(5 +  undefined);
// console.log("5" + "5");


// var a = "ulugbek";
// const a = "ulugbek";
// console.log(a);

// const a = "Ulugbek";
// console.log(a);


// let userName 

// let ageGroup5

// let _internalValue

// let $kind0fSpecial

// challange 2

// let = ("200" + 50);
// console.log(let);

// let age = 25
// let strAge = toString(age)
// let word = `${strAge} years old`
// console.log(word);

// let bool = "false"
// let check = Boolean(bool)

// console.log("10" - true);

// ARIFMETIC operators 

// console.log(5 + 3);
// console.log(7 - 2);

// 5 == "true" true
// 5 === "5" false 
// 10 != 5 true 
// 10 !== "10" true 
// 10 > 5 true 
// 10 < 5 false 

// const user = {
//     name: "Ulugbek",
// }

// const userr = user;
// console.log(userr === user); true 

// !!true will be true 

// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status);

// CONDITIONAL STATEMENT 

// if (condition) {

// }


// if (condition) {

// } else {

// }


// if (condition) {

// } else if {

// } else {

// }


// switch (expression) {
//     case value1:
//         break;
//     case value2:
//         break;
//     default
// }


// for (initializing; CSSConditionRule; increament) {

// }

// while (condition) {

// }

// do (condition) {

// } while (condition);

// const user = {
//     username: "Ulugbek",
//     age: 20,
//     country: "Uzbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user)

// console.log(values);

// for (const key in user) {
//     const element = user[key];
//     console.log(element);    
// }

// for (const element of keys) {
//     console.log(element);   
// }



// challange3

// const temperatureCelcius = 25;
// console.log(temperatureCelcius);

// const temperature = 25;
// const temperatureFarenheit = (temperature * 9/5) + 32;
// console.log(temperature + "is equal to" + temperatureFarenheit + "F");

// challange 4

// let totalBudget = 100

// let exp1 = Number(prompt("expense1: "))
// let exp2 = Number(prompt("expense2: "))
// let exp3 = Number(prompt("expense3: "))

// totalBudget -= exp1
// totalBudget -= exp2
// totalBudget -= exp3

// if (totalBudget < 0) {
//     alert("You have overspent");
// }

// console.log(parseFloat(totalBudget));


// New practise

// Challenge1

// let number = Number(prompt("Enter a number:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);

// Challenge2 

// let number = Number(prompt("Sonni kiriting :"))
// let res = 0;

// while (number > 0) {
//    let LastDigit = number % 10;
//    res = res * 10 + LastDigit;
//    number = Math.floor(number / 10);
// }

// console.log(res);

// Challenge3 

// let userNumber = Number(prompt("Enter number :"))
// let MaxNumber = 0

// while (userNumber > 0) {
//     let LastDigit = userNumber % 10;
//     if (MaxNumber < LastDigit) {
//         MaxNumber = LastDigit
//     }
//     userNumber = Math.floor(userNumber / 10);
// }

// console.log(MaxNumber);

// challenge4 

// let number = Number(prompt("enter a number :"))
// let originalNumber = number;

// if (number < 0) {
//     number * number * -1;
// }


// let sum = 0;
// while (number > 0) {
//     sum = sum + (number % 10);
//     number = Math.floor(number / 10);
// }

// console.log(`Sum of the digits : ${originalNumber} = ${sum}`);

// classwork

// function outer() {
//     let username = "Ulugbek";

// function inner() {
//     let fullname = username + "Yusupov";
//     console.log(fullname);
// }
// inner();
// }

// outer();

// function parent() {
//     let parentVar = "I am parent";

//     function child() {
//         let childVar = "I am a child";
//         console.log(childVar);
//     } 
//     child();
//     console.log(parentVar);
// }
// console.log(parentVar);

// Types of functions

// declaration function 
// function sum(a,b) {
//     return a + b; 
// }

// let express = function () {};

// express();

// anonymus function
// let arrow = () => {};

// IIFE function
// (function (a,b) {
//     console.log(a + b);
// })(3,4)

// Function constructor
// let s = new Function("a","b", "return a + b");
// console.log(s(20,40));

// Closures
// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter()
// counter()
// counter()

// Challenge1 New task 

function greet(name) {
    return "Hello," + name;
} 

