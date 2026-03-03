// let n = Number(prompt("Enter a number:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);

// challenge2

// let n = Number(prompt("enter a number"));
// let res = 0;

// while (n > 0) {
//     let lastDigit = n % 10;
//     res + res * 10 + lastDigit;
//     n = Math.floor(n / 10); 
// }

// console.log(res);  

// challenge 3

// let num = Number(prompt("enter a number:"));
// let largest = 0;

// while (num > 0){
//     let digit = num % 10;
//     if (digit > largest){
//         largest = digit;
//     }
//     num = Math.floor(num / 10);

// }
// console.log( "largest digit:", largest);

// challenge 4
// let num = Number(prompt("enter a number:"));
// let sum = 0;

// while (num > 0){
//     let lastDigit = num % 10;
//     sum = sum + lastDigit;
//     num = Math.floor(num / 10);
// }
// console.log("sum of the  digits:",sum);

// challenge 5

// let number = Number(prompt("Enter a number:"));

// let count = 0;

// if (number === 0) {
//     count = 1;
// } else {
//     while (number > 0) {
//         number = Math.floor(number / 10);
//         count++;
//     }
// }

// console.log("Total digits:", count);

// lecture 4
// challenge1

// let a = Number(prompt("Enter first number:"));
// let b = Number(prompt("Enter second number:"));

// if (a > b) {
//     alert("Largest number is: " + a);
// } else if (b > a) {
//     alert("Largest number is: " + b);
// } else {
//     alert("Both numbers are equal");
// }

// challenge2

// let a = 0;
// let b = -1;
// let c = 4;

// let largest, middle, smallest;

// if (a >= b && a >= c) {
//     largest = a;
//     if (b >= c) {
//         middle = b;
//         smallest = c;
//     } else {
//         middle = c;
//         smallest = b;
//     }
// } else if (b >= a && b >= c) {
//     largest = b;
//     if (a >= c) {
//         middle = a;
//         smallest = c;
//     } else {
//         middle = c;
//         smallest = a;   
//     }
// } else {
//     largest = c;
//     if (a >= b) {
//         middle = a;
//         smallest = b;
//     } else {
//         middle = b;
//         smallest = a;
//     }
// }

// alert(largest + ", " + middle + ", " + smallest);



// lecture 5
// challenge1

// function greet(name) {
//     return "Hello, " + name + "!";
// }

// const greet = function(name) {
//     return "Hello, " + name + "!";
// };

// const greet = (name) => {
//     return "Hello, " + name + "!";
// };

// const greet = name => "Hello, " + name + "!";

// const greet = name => `Hello, ${name}!`;

// challenge2
// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isPrime(7));  // true
// console.log(isPrime(10)); // false

// challenge3

// function countDigits(n) {
//     n = Math.abs(n); // handle negative numbers

//     if (n === 0) return 1;

//     let count = 0;

//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }

//     return count;
// }

// console.log(countDigits(12345)); // 5

// challenge 4
// function isPalindrome(n) {
//     let original = n;
//     let reversed = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         reversed = reversed * 10 + digit;
//         n = Math.floor(n / 10);
//     }

//     return original === reversed;
// }
// console.log(isPalindrome(121)); // true
// console.log(isPalindrome(123)); // false

// challenge5
function isArmstrong(n) {
    let original = n;
    let digits = countDigits(n);
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum += digit ** digits;
        n = Math.floor(n / 10);
    }

    return sum === original;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false
