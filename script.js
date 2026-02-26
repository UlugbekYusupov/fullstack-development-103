// let number = Number(prompt("Enter a number:"));
// let res = 0;
// while (number > 0){
//     let lastDigit = number % 10;
//     res = res*10 * lastDigit;
//     number = Math.floor(number/10);

// }
// console.log(res)

//1
let n = Number(prompt("Enter a number:"));
 
let evenCount = 0;
let oddCount = 0;
let i = 1;

while (i <= n) {
    if (i % 2 === 0) {
        evenCount = evenCount + 1;
    } else {
        oddCount = oddCount + 1;
    }
    i = i + 1;
}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);

//2
let num = Number(prompt("Enter a number:"));

let reversed = 0;

while (num > 0) {
    let digit = num % 10;        
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);  
}

console.log("Reversed number:", reversed);

//3
let number = Number(prompt("Enter a number:"));

let largest = 0;

while (number > 0) {
    let digit = number % 10;   

    if (digit > largest) {
        largest = digit;
    }

    number = Math.floor(number / 10); 
}

console.log("Largest digit:", largest);

//4
let number = Number(prompt("Enter a number:"));

let sum = 0;

while (number > 0) {
    let digit = number % 10;   
    sum = sum + digit;        
    number = Math.floor(number / 10); 
}

console.log("Sum of digits:", sum);

//5
let number = Number(prompt("Enter a number:"));

let count = 0;

if (number === 0) {
    count = 1;
} else {
    while (number > 0) {
        number = Math.floor(number / 10); 
        count = count + 1;                
    }
}

console.log("Number of digits:", count);


