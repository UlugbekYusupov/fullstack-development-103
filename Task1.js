//Challange 1                              Lecture 2
console.log("5" + 5);
console.log("5" - 5);
console.log("5" * "2");
console.log("10" / 2);
console.log(5 + true);
console.log("10" - true);
console.log("5" + true);
console.log(5 + null);
console.log(5 + undefined);

//Challange 2
console.log(+("200")+ 50);
console.log("25"+ " years old");
console.log(Boolean("false"));
console.log("10" - true);

//Challange3
const Celsius=(Number(prompt("Enter number in Celsius:")));
const Fahrenheit = (Celsius*9/5)+32;

console.log(Celsius);
console.log(Fahrenheit);

//Challange4
let Budget=(Number(prompt('Enter your budget:')));

const Expence1 = (Number(prompt('Enter first expence:')))
const Expence2 = (Number(prompt('Enter second expence:')))
const Expence3 = (Number(prompt('Enter third expence:')))

Budget = Budget-Expence1-Expence2-Expence3;

console.log("Budget:", Budget.toFixed(2));
if (Budget<0) {
    console.log("You have overspent!")
}

//Examples
let age = 20;
let status = age>= 18? "Adult": "Minor";
console.log(status);

//24.02.2026      Lecture 3 
// Task 1
let n = (Number(prompt("Enter a number")));
let even = 0;
let odd = 0;

for (let i = 1; i <=n; i++) {
    if (i % 2 === 0) {
       even++;
}   else {
        odd++;
    }
}

console.log("Even numbers:", even)
console.log("Odd numbers:", odd)

// Task 2
let number = Number(prompt("Enter a number"));
let res = 0;
while (number>0) {
    let lastDigit = number %10;
    res = res * 10 + lastDigit;
    number = Math.floor(number/10);
}
console.log(res)

// task 3
let numbers = Number (prompt("Enter a number:"));
let largest = 0;
while (numbers>0) {  //пока число не равно 0 разбираем
    let digit = numbers % 10;  // берём последюю цифру
    if (digit>largest) {
        largest = digit;  // сравниваем 
    }
    numbers = Math.floor(numbers/10); // убираем последнюю цифру
    }
console.log("Largest digit:" , largest);

// Task 4
let numbers = Number(prompt("Enter a number:"));
let sum = 0;
while (numbers>0) {
    let digit = numbers %10;
    sum = sum + digit;
    numbers = Math.floor(numbers/10); 
}
console. log("Sum of digits:", sum);

// Task 5
let number = Number(prompt("Enter a number"));
let count = 0;

if (number === 0) {
  count = 1; 
} else {
  while (number > 0) {
    count++;
    number = Math.floor(number / 10);
  }
}
console.log("Number of digits:", count);

// Task 1                             Lecture 4
let a = 10;
let b = 5;
    if (a > b) {
        console.log(a);
}
    else {
        console.log (b);
    }
