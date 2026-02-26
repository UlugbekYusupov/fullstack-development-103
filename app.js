//1

let number = Number(prompt("Sonni kiriting:"))
let even = 0
let odd = 0
while (number > 0) {
    if (number % 2 == 0) {
        even += 1
    }
    else {
        odd +=1
    }
    number -= 1
}
console.log(even,odd)


//task2

let num = Number(prompt("Enter a number:"));

let reversed = 0;

while (num > 0) {
  let lastDigit = num % 10;    
  reversed = reversed * 10 + lastDigit;
  num = Math.floor(num / 10);
}

console.log("Reversed number:", reversed);

// task 3

let num1 = Number(prompt("Enter a number:"));

let largest = 0;

while (num > 0) {
  let digit = num % 10; 

  if (digit > largest) {
    largest = digit;
  }

  num = Math.floor(num / 10);
}

console.log("Largest digit:", largest);

// task 4

let num3 = Number(prompt("Enter a number:"));

let sum = 0;


if (num < 0) {
  num = -num;
}

while (num > 0) {
  let digit = num % 10;    
  sum = sum + digit;       
  num = Math.floor(num / 10)
}

console.log("Sum of digits:", sum);

//task 5

let num4 = Number(prompt("Enter a number:"));

let count = 0;


if (num < 0) {
  num = -num;
}

// agar 0 bo‘lsa
if (num === 0) {
  count = 1;
} else {
  while (num > 0) {
    num = Math.floor(num / 10); 
    count++;
  }
}

console.log("Total digits:", count);