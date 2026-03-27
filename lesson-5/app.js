// // Challenge 1

// // 1) Function Declaration
// function greet1(name) {
//     return "Hello, " + name + "!";
// }

// // 2) Function Expression
// let greet2 = function (name) {
//     return "Hello, " + name + "!";
// };

// // 3) Arrow Function
// let greet3 = (name) => {
//     return "Hello, " + name + "!";
// };

// // 4) IIFE (runs immediately)
// (function (name) {
//     console.log("Challenge 1 (IIFE):", "Hello, " + name + "!");
// })("John");

// // 5) Function Constructor
// let greet5 = new Function("name", "return 'Hello, ' + name + '!'");


// // Challenge 2
// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n === 2) return true;
//     if (n % 2 === 0) return false;

//     for (let i = 3; i <= Math.sqrt(n); i += 2) {
//         if (n % i === 0) return false;
//     }

//     return true;
// }


// // Challenge 3
// const countDigits = function (n) {
//     n = Math.abs(n);

//     if (n === 0) return 1;

//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

//     return count;
// };


// // Challenge 4
// const isPalindrome = (n) => {
//     const str = String(Math.abs(n));
//     const reversed = str.split("").reverse().join("");
//     return str === reversed;
// };


// // Challenge 5
// function isArmstrong(n) {
//     const numStr = String(Math.abs(n));
//     const power = numStr.length;

//     let sum = 0;
//     for (let i = 0; i < numStr.length; i++) {
//         const digit = Number(numStr[i]);
//         sum += digit ** power;
//     }

//     return sum === Math.abs(n);
// }


// // Challenge 6
// const createCounter = (start) => {
//     let count = start;

//     return {
//         increment() {
//             count++;
//         },
//         decrement() {
//             count--;
//         },
//         getCount() {
//             return count;
//         }
//     };
// };


// // Challenge 7
// function once(fn) {
//     let hasRun = false;
//     let result;

//     return function (...args) {
//         if (!hasRun) {
//             result = fn(...args);
//             hasRun = true;
//         }
//         return result;
//     };
// }


// // Challenge 8
// const lazyAdder = (a) => {
//     return (b) => a + b;
// };



// console.log("Challenge 1 (Declaration):", greet1("John"));
// console.log("Challenge 1 (Expression):", greet2("John"));
// console.log("Challenge 1 (Arrow):", greet3("John"));
// console.log("Challenge 1 (Constructor):", greet5("John"));

// console.log("Challenge 2:");
// console.log("isPrime(1):", isPrime(1));
// console.log("isPrime(2):", isPrime(2));
// console.log("isPrime(7):", isPrime(7));
// console.log("isPrime(10):", isPrime(10));

// console.log("Challenge 3:");
// console.log("countDigits(0):", countDigits(0));
// console.log("countDigits(12345):", countDigits(12345));
// console.log("countDigits(-999):", countDigits(-999));

// console.log("Challenge 4:");
// console.log("isPalindrome(121):", isPalindrome(121));
// console.log("isPalindrome(123):", isPalindrome(123));

// console.log("Challenge 5:");
// console.log("isArmstrong(153):", isArmstrong(153));
// console.log("isArmstrong(371):", isArmstrong(371));
// console.log("isArmstrong(123):", isArmstrong(123));

// console.log("Challenge 6:");
// const counter = createCounter(10);
// console.log("Start:", counter.getCount());
// counter.increment();
// counter.increment();
// console.log("After 2 increments:", counter.getCount());
// counter.decrement();
// console.log("After 1 decrement:", counter.getCount());

// console.log("Challenge 7:");
// const sayHiOnce = once(() => "Hi!");
// console.log(sayHiOnce()); // runs
// console.log(sayHiOnce()); // does not run again, returns same result

// console.log("Challenge 8:");
// const add5 = lazyAdder(5);
// console.log("add5(10):", add5(10));
// console.log("add5(20):", add5(20));



// Assignment tasks

// task-1

// let soz = prompt("Enter a passcode")

// let eightChar = false
// let one_upper_case = false
// let number = false
// let special = false



// let score = 0

// function passcodeCodeChecker(vord) {
//     for (let i = 0; i < vord.length; i++) {

//         if (vord.length >= 8) {
//             eightChar = true
//             score += 1
//         }

//         if (chars > "!" && chars < "/") {
//             special = true
//             score += 1
//         }

//         if (vord > "A" && vord < "Z") {
//             one_upper_case = true
//             score += 1
//         }

//         if (vord > 0 && vord < 9) {
//             number = true 
//             score += 1
//         }

//         if (score === 1) {
//             return "Veak !"
//         }
//         else if (score === 2) {
//             return "Medium !"
//         }
//         else if (score >= 3) {
//             return "Strong !"
//         }
//         else{
//             return "Bad passcode !"
//         }
//     }
// }

// console.log(passcodeCodeChecker(soz));



// task-2

// function light() {
//     setTimeout(function(){
//         console.log("Red");
//     }),5000
//     setTimeout(function(){
//         console.log("yello");
//     }),3000
//     setTimeout(function(){
//         console.log("green");
//     }),2000
// }


// light()