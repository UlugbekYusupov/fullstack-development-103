

// --------------------OPERATORS------------------------------

// Challange 1


let n = Number(prompt("Enter the number: "));

let even = 0
let odd = 0

for (let i = 1 ; i<= n ; i++){
    if (i % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even number: ", even)
console.log("Odd number: " , odd)



// Challange 2

let num = parseInt(prompt("Enter the number: "));

let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * 10 + lastDigit;
    num = Math.floor(num / 10);
}

console.log(reversed);


// Challange 3

let maxNum = Number(prompt("Enter the number: "))

let max = 0

while(maxNum > 0){
    let lastDigit = maxNum % 10
    if (maxNum < lastDigit){
        maxNum = lastDigit
    }
    maxNum = Math.floor(maxNum / 10);
}

console.log(maxNum);

// Challange 4

let number = Number(prompt("Enter the number: "))

let sum = 0

while (number > 0) {
    let lastDigit = number % 10
    sum = sum + lastDigit
    number = Math.floor(number / 10);
}

console.log("Sum of the numbers: " , sum);

// Challange 5 

let num1 = 12345;   
let count = 0;

if (num1 === 0) {
  count = 1;
} else {

  if (num1 < 0) {
    num1 = -num1;
  }

  while (num1 > 0) {
    num1 = Math.floor(num1 / 10);
    count++;
  }
}

console.log("Digits:", count);
