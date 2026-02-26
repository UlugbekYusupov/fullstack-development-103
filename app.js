                                        // Praktist3

// chalamge1
let n = 10;
let even = 0;
let odd = 0;

for (let i = 1; i <= n; i++) {
  if (i % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log("Even:", even);
console.log("Odd:", odd);

chalamge2

let num = 1234;
let reverse = 0;

while (num > 0) {
  let digit = num % 10;
  reverse = reverse * 10 + digit;
  num = Math.floor(num / 10);
}

console.log("Reverse:", reverse);

// chalamge3
let number = 907251;
let largest = 0;

while (number > 0) {
  let digit = number % 10;

  if (digit > largest) {
    largest = digit;
  }

  number = Math.floor(number / 10);
}

console.log("Largest digit:", largest);

// chalamge4

let num2 = 1234;
let sum = 0;

while (num2 > 0) {
  let digit = num2 % 10;
  sum = sum + digit;
  num2 = Math.floor(num2 / 10);
}

console.log("Sum of digits:", sum);

// chalamge5

let num3 = 12345;
let count = 0;

while (num3 > 0) {
  num3 = Math.floor(num3 / 10);
  count++;
}

console.log("Number of digits:", count);
