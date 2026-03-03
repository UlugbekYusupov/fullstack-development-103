//vazzifa 1

let number1 = Number(prompt("Enter a number for Challenge 1:"));

let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= number1; i++) {
  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even count:", evenCount);
console.log("Odd count:", oddCount);


console.log("Even count:", evenCount);
console.log("Odd count:", oddCount);

//2

let number2 = Number(prompt("Enter a number for Challenge 2:"));

let reversedNumber = 0;

if (number2 < 0) {
  number2 = -number2;
}

while (number2 > 0) {
  let lastDigit = number2 % 10;
  reversedNumber = reversedNumber * 10 + lastDigit;
  number2 = Math.floor(number2 / 10);
}

console.log("Reversed number:", reversedNumber);
console.log("Reversed number:", reversed);

//3

let number3 = Number(prompt("Enter a number for Challenge 3:"));

let largestDigit = 0;

if (number3 < 0) {
  number3 = -number3;
}

while (number3 > 0) {
  let currentDigit = number3 % 10;

  if (currentDigit > largestDigit) {
    largestDigit = currentDigit;
  }

  number3 = Math.floor(number3 / 10);
}

console.log("Largest digit:", largestDigit);

//4

let number4 = Number(prompt("Enter a number for Challenge 4:"));

let sumOfDigits = 0;

if (number4 < 0) {
  number4 = -number4;
}

while (number4 > 0) {
  let digitValue = number4 % 10;
  sumOfDigits = sumOfDigits + digitValue;
  number4 = Math.floor(number4 / 10);
}

console.log("Sum of digits:", sumOfDigits);

//5

let number5 = Number(prompt("Enter a number for Challenge 5:"));

let digitCount = 0;

if (number5 < 0) {
  number5 = -number5;
}

if (number5 === 0) {
  digitCount = 1;
} else {
  while (number5 > 0) {
    number5 = Math.floor(number5 / 10);
    digitCount++;
  }
}

console.log("Total digits:", digitCount);
