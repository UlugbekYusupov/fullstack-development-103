// // Lesson 5 Functions
// // challenge 1

// function sayHello (name) {
//     return `hello ${name}`;
// }

// function outer(outerName) {
//     function inner(name) {
//         return `hello ${name}`;
//     }
//     inner(outerName)
// }

// let func = function (name) {
//     return `hello ${name}`;
// }

// let func2 = (name) => { return `Hello ${name}`}

// let func3 = new Function("name", "return `Hello ${name}`");

// console.log(func3("Name"));

// // // Challenge 2 - Write a function isPrime(n) that returns true if n is prime, otherwise false.

// function isPrime(num) {
//     if (num <= 1) return false
//     if (num === 2) return true 
//     if (num % 2 === 0) return false

//     let checker = Math.floor(Math.sqrt(num))
//     for (let i = 3; i <= checker; i += 2) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }

//     return true;
// }

// console.log(isPrime(36)); 

// // Challenge 3 - Write a function countDigits(n) that counts the number of digits in a given number.
// function countDigits (n) {
//     counter = 0
//     while (n > 0) {
//         counter += 1
//         n = Math.floor(n / 10)
//     }
//     return counter
// }

// console.log(countDigits(1));

// // Challenge 4 - Write a function isPalindrome(n) that checks if a number reads the same forward and backward.

// function isPalindrome(n) {
//     let origNum = n
//     let reversed = 0
//     while (n > 0) {
//         let lastDigit = n % 10
//         reversed = reversed * 10 + lastDigit
//         n = Math.floor(n / 10 )
//     }

//     return origNum === reversed
// }

// console.log(isPalindrome(323)); 


// // Challenge 5 - Write a function isArmstrong(n) that checks if a number is an Armstrong number.
// // (An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.)

// function isArmstrong (n) {
//     let numStore = 0
//     let sum = 0

//     while (n > 0) {
//         let lastDigit = n % 10
//         numStore += Math.pow(lastDigit, 3)
//         n = Math.floor(n / 10)
//     }

//     return numStore
// }

// console.log(isArmstrong(153));

// // Challenge 6 - Create a function createCounter(start) that returns an object with three methods:
// // increment() ➝ Increases the count
// // decrement() ➝ Decreases the count
// // getCount() ➝ Returns the current count

// function createCounter(n) {
//     let count = n

//     return {
//         increment: function () {
//             count += 1
//             console.log('increment +1');
//         },
//         decrement: function () {
//             count -= 1
//             console.log('decrement -1');
//         },
//         getCount: function () {
//             console.log('current count', count);
//         }
//     }
// }

// const counter = createCounter(7)
// counter.increment()
// counter.decrement()
// counter.getCount()


// // Challenge 7 – Create a function that order food, the program asks for name, address and what do 	you want to order, then the output should be “Dear (name), your ordered food (food you 	entered) will be ready in 15 minuts and will be delivered to your address(address you 		entered)”

// function foodDelivery() {
//     name = prompt('What is ur name?')
//     adress = prompt('What is ur adress?')
//     order = prompt('what is ur order?')

//     console.warn(`Dear ${name}, your ordered food (${order}) will be ready in 15 minuts and will be delivered to ${adress}`);
// }

// foodDelivery()


// // Challenge 8 - Create a function lazyAdder(a) that returns another function that adds b when called.
// // const add5 = lazyAdder(5); 
// // console.log(add5(10));  - > 15
// // console.log(add5(20));  -> 25

// function lazyAdder (a) {
//     numStore = a
//     return function inAdd (b) {
//         console.log(numStore + b);
//     }
// }

// console.log(parseFloat(totalBudget));

// Challenge 1 - Dynamic Pricing Calculation
// Scenario: Create a function that calculates the total price of an online shopping cart, applying discounts based on quantity.
// Example: If a user buys 3+ items, apply a 10% discount; if 5+, apply 20%.

function shoppingCart(items) {

    if (item_quantity >= 3) {
        items * 0.10
    } else {
        items * 0.20
    }
}

console.log(object);


// Challenge 2 - Password Strength Checker
// Scenario: Build a function to check password strength based on conditions:
// Minimum 8 characters
// At least one uppercase letter
// At least one number
// At least one special character
// Return "Weak", "Medium", or "Strong" based on conditions.

// Challenge 3 - ATM Cash Withdrawal System
// Scenario: Simulate an ATM that dispenses the least number of bills for a given amount (e.g., $130 → 1x $100, 1x $20, 1x $10).
// if the requested amount is not in multiples of 10, return an error.