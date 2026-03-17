// //Challange 1                              Lecture 2
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// //Challange 2
// console.log(+("200")+ 50);
// console.log("25"+ " years old");
// console.log(Boolean("false"));
// console.log("10" - true);

// //Challange3
// const Celsius=(Number(prompt("Enter number in Celsius:")));
// const Fahrenheit = (Celsius*9/5)+32;

// console.log(Celsius);
// console.log(Fahrenheit);

// //Challange4
// let Budget=(Number(prompt('Enter your budget:')));

// const Expence1 = (Number(prompt('Enter first expence:')))
// const Expence2 = (Number(prompt('Enter second expence:')))
// const Expence3 = (Number(prompt('Enter third expence:')))

// Budget = Budget-Expence1-Expence2-Expence3;

// console.log("Budget:", Budget.toFixed(2));
// if (Budget<0) {
//     console.log("You have overspent!")
// }

// //Examples
// let age = 20;
// let status = age>= 18? "Adult": "Minor";
// console.log(status);

// //24.02.2026      Lecture 3 
// // Task 1
// let n = (Number(prompt("Enter a number")));
// let even = 0;
// let odd = 0;

// for (let i = 1; i <=n; i++) {
//     if (i % 2 === 0) {
//        even++;
// }   else {
//         odd++;
//     }
// }

// console.log("Even numbers:", even)
// console.log("Odd numbers:", odd)

// // Task 2
// let number = Number(prompt("Enter a number"));
// let res = 0;
// while (number>0) {
//     let lastDigit = number %10;
//     res = res * 10 + lastDigit;
//     number = Math.floor(number/10);
// }
// console.log(res)

// // task 3
// let numbers = Number (prompt("Enter a number:"));
// let largest = 0;
// while (numbers>0) {  //пока число не равно 0 разбираем
//     let digit = numbers % 10;  // берём последюю цифру
//     if (digit>largest) {
//         largest = digit;  // сравниваем 
//     }
//     numbers = Math.floor(numbers/10); // убираем последнюю цифру
//     }
// console.log("Largest digit:" , largest);

// // Task 4
// numbers = Number(prompt("Enter a number:"));
// let sum = 0;
// while (numbers>0) {
//     let digit = numbers %10;
//     sum = sum + digit;
//     numbers = Math.floor(numbers/10); 
// }
// console. log("Sum of digits:", sum);

// // Task 5
// number = Number(prompt("Enter a number"));
// let count = 0;

// if (number === 0) {
//   count = 1; 
// } else {
//   while (number > 0) {
//     count++;
//     number = Math.floor(number / 10);
//   }
// }
// console.log("Number of digits:", count);

// Task 1                             Lecture 4
// let a = 10;
// let b = 5;
//     if (a > b) {
//         console.log(a);
// }
//     else {
//         console.log (b);
//     }

// Task 2
// a = 2;
// b = -5;
// c = 9;

// if (a*b*c>0) {
//     alert("The sign is +");
// }
// else {
//     alert("The sign is -");
// }

//Task 3
var a = 0;
var b = -1;
var d = 4;

if (a > b && a > d) {
    if (b > d) {
        alert(a + "," + b + "," + d);
    } else {
        alert(a + "," + d + "," + b);
    }
} else if (b > a && b > d) {
    if (a > d) {
        alert(b + "," + a + "," + d);
    } else {
        alert(b + "," + d + "," + a);
    }
} else {
    if (a > b) {
        alert(d + "," + a + "," + b);
    } else {
        alert(d + "," + b + "," + a);
    }
}

// Task 4
for (var i = 0; i <= 15; i++) {
    if (i === 0) {
        console.log(0 + "is even");
    } else if (i % 2 === 0) {
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}

// Task 5
for (var i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 ===0 ){
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 ===0) {
        console.log('Buzz');
   } else {
    console.log(i);
   }
}
// Task 6
for (let j = 100; j <= 999; j++){
    let strng = j.toString();

    let number1 = Number(strng[0]);
    let number2 = Number(strng[1]);
    let number3 = Number(strng[2]);

    let sum = (number1**3)+(number2**3)+(number3**3);
    if (sum === j){
        console.log("Armstrong:", j);
    }
}
//lecture 5
// Challenge 1
//1 function decloration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet('Nazira'));

//2 function expression
const greetUser = function (name) {
    return `Hello, ${name}!`;
};
let greeting = greetUser("Nazira");
console.log(greeting);

//3 Arrow function
const gretUser = name => `Hello, ${name}!`;
console.log(gretUser('Nazira'));                                               // Lecture 6

//4 IIFE function
(function (name) {
    console.log(`Hello, ${name}!`);
})('Nazira');

//5 Function constructor
function Person(name) {
    this.userName = name;
    this.sayHello = function () {
        console.log(`Hello, ${this.userName}!`);
    };
}
const user = new Person("Nazira");
user.sayHello();
//Lecture 6
//Challange 1
function first(arr, n) {
    if (n == null) {
        return arr[0];
    }
    if (n < 0) {
        return [];
    }
    return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

//Challange 2
function last(array, n) {
    if (Array == null) return void 0;
    if (n == 0) return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
}

// Challenge 3
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(","));

//Challange 4
function insertDashes(num) {
    let str = num.toString();
    let result = [str[0]];
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
            result.push('-', str[i]);
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
}
//Сhallange 5
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort(function (a, b) {
    return a - b;
});

console.log(arr1);

//Challange 6
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};
for (var i = 0; i < arr1.length; i++) {
    var element = arr1[i];
    if (counts[element]) {
        counts[element]++;
    } else {
        counts[element] = 1;
    }
}
var mostCount = 0;
var mostFrequent = 0;

for (var key in counts) {
    if (counts[key] > mostCount) {
        mostCount = counts[key];
        mostFrequent = key;
    }
}
console.log(mostFrequent + '' + mostCount + "times");

// Challenge 7 
var input = 'The Quick Brown Fox';
var result = input
    .split('')
    .map(function (letter) {
        return letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase();
    })
    .join('');
console.log(result);

// Lecture 7
// Challange 1
const students = [
    { name: 'Alica', scores: [80, 90, 100] },
    { name: 'Ali', scores: [50, 60, 70] },
    { name: 'Amina', scores: [30, 40, 20] }
];
let bestStudent = { name: '', average: 0 };
for (let i = 0; i < students.length; i++) {
    let s = students[i]

    let totalScore = 0;
    for (let score of s.scores) {
        totalScore += score;
    }
    let avrgScore = totalScore / s.scores.length;
    if (avrgScore > bestStudent.average) {
        bestStudent.name = s.name;
        bestStudent.average = avrgScore;
    }
}
console.log(`Best student: ${bestStudent.name}, average: ${bestStudent.average}`)

//Challange 2
const cart = [
    { id: 1, name: 'Laptop', price: 900, quantity: 1 },
    { id: 2, name: 'Mouse', price: 50, quantity: 2 },
    { id: 3, name: 'Keyboard', price: 100, quantity: 1 }
];

//Challange 3
const products = [
    { id: 1, name: 'Laptop', price: 1200, stock: 10 },
    { id: 2, name: 'Phone', price: 700, stock: 10 }
];
// добавим товар
const addProduct = products.push({ id: 3, name: 'Keyboard', price: 800, stock: 12 });
console.log(products);

// удаляем товар
function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
    }
}
deleteProduct(2);
console.log(products);

//Assignments
//Challange 4
function startTrafficLight() {
    console.log('Red');
    setTimeout(function () {
        console.log('Green');
        setTimeout(function () {
            console.log('Yellow');
        }, 3000);
    }, 5000);
}
startTrafficLight();

//Challange 6
function bankingSysytem(banking) {
    let balance = 0;

    function deposit(amount) {
        balance += amount;
        console.log("Balance updated")
    }
    function withdraw(amount) {
        if (amount > balance) {
            console.log("not enoygh money")
        } else {
            balance -= amount;
            console.log("Withdrawn")
        }
    }
    function viewBalance() {
        console.log("Your balance: ", balance);
    }
    return {
        deposit, withdraw, viewBalance
    }
}
const banking = bankingSysytem()
banking.deposit(30);
banking.viewBalance();

//Challange 7 
function roleBased(){
    let roles = ['Admin', 'Editor', 'Viewer']
    let permissions = ['edit', 'create', 'delete', 'view']
    let ask = prompt('Enter your role: ')
if (ask === roles[0]){
    console.log("You can");
    
}
}