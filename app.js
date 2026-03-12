// Task1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10"/2);
// console.log( 5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);
// // Task2
// console.log("200" + 50);
// const age = 25
// console.log(age + " " + "years old")
// console.log("false")
// console.log("10" - true)
// // Task 3 
// const celsius = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit = (celsius * 9/5) + 32;
// console.log("celsius" +" "+ "fahrenheit")
// // We cannot change const 
// const name = prompt("Enter a number")
// console.log(name)
// Task4
// let budget = prompt("Enter your total budget")
// let a = prompt("Enter first amount:")
// let b = prompt("Enter second amount:")
// let d = prompt("Enter third amount:")
// let result = budget = a + b + d
// let = remaining = budget - result
// console.log(result)

// let n = parseInt(prompt("Enter a number:"))

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {  
//         evenCount++;
//     } else {             
//         oddCount++;
//     }
// }

// console.log("Even numbers",evenCount)
// console.log("Odd numbers",oddCount)

// let number = Number(prompt("Sonni kiriting :"));
// let res = 0;
// while (number > 0) {
//     let lastDigit = number % 10;
//     res = res * 10 + lastDigit;
//     number  = Math.floor(number/10);
// }
// console.log(res)

// let number = Number(prompt("Give a number :"))
// let maxNumber = 0 

// while(number > 0) {
//     let lastDigit =  number % 10
//     if (maxNumber < lastDigit) {
//         maxNumber = lastDigit
//     }
//     number = Math.floor(number/10)
// }
// console.log(maxNumber)


// // 1
// function greet1(name) {
//   return "Hello, " + name + "!";
// }
// // 2
// const greet2 = function(name) {
//   return "Hello, " + name + "!";
// };
// // 3
// const greet3 = (name) => {
//   return "Hello, " + name + "!";
// };
// // 4
// const greet4 = name => "Hello, " + name + "!";
// // 5
// const greet5 = name => `Hello, ${name}!`;

// // Challenge 2
// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // Challenge 3
// function countDigits(n) {
//   return Math.abs(n).toString().length;
// }
// // Challenge 4
// function isPalindrome(n) {
//   let str = n.toString();
//   return str === str.split('').reverse().join('');
// }
// // Challenge 5
// function isArmstrong(n) {
//   let str = n.toString();
//   let power = str.length;
//   let sum = 0;

//   for (let digit of str) {
//     sum += Math.pow(Number(digit), power);
//   }

//   return sum === n;
// }
// // Challenge 6

// function createCounter(start) {
//   let count = start;

//   return {
//     increment() {
//       count++;
//     },
//     decrement() {
//       count--;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }


// const counter = createCounter(10);
// counter.increment();
// counter.increment();
// counter.decrement();
// console.log(counter.getCount());

// // Challenge 7 
// function once(fn) {
//   let called = false;
//   let result;

//   return function(...args) {
//     if (!called) {
//       called = true;
//       result = fn(...args);
//     }
//     return result;
//   };
// }

// const sayHi = once(() => {
//   console.log("Hello!");
//   return "Done";
// });

// sayHi(); 
// sayHi(); 

// // Challenge 8
// function lazyAdder(a) {
//   return function(b) {
//     return a + b;
//   };
// }


// const add5 = lazyAdder(5);

// console.log(add5(10)); 
// console.log(add5(20)); 

// // BONUS

// // 1
// function debounce(fn, delay) {
//   let timeoutId;

//   return function(...args) {
//     clearTimeout(timeoutId);

//     timeoutId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }
// // 2
// function throttle(fn, interval) {
//   let lastTime = 0;

//   return function(...args) {
//     const now = Date.now();

//     if (now - lastTime >= interval) {
//       lastTime = now;
//       fn.apply(this, args);
//     }
//   };
// }
// // 3
// function taskScheduler() {
//   let tasks = [];

//   return {
//     schedule(task, delay) {
//       const id = setTimeout(() => {
//         task();
//         tasks = tasks.filter(t => t !== id);
//       }, delay);

//       tasks.push(id);
//     },

//     cancelAll() {
//       tasks.forEach(id => clearTimeout(id));
//       tasks = [];
//     }
//   };
// }


// Array  hometask 

// function first(arr, n) {
//   if (arr.length === 0) return [];

//   if (n == null) {
//     return arr[0];
//   }

//   if (n < 0) {
//     return n;
//   }

//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));     
// console.log(first([], 3));             
// console.log(first([7, 9, 0, -2], 3));  
// console.log(first([7, 9, 0, -2], 6));   
// console.log(first([7, 9, 0, -2], -3));

// // Second task
// function last(arr, n) {
//   if (n == null) {
//     return arr[arr.length - 1];
//   }

// 
//   return arr.slice(-n);
// }

// console.log(last([7, 9, 0, -2]));     
// console.log(last([7, 9, 0, -2], 3)); 
// console.log(last([7, 9, 0, -2], 6));  

// // Third task
// let myColor = ["Red", "Green", "White", "Black"];

// console.log(myColor.join(","));

// // Fourth task
// function addDashes(num) {
//   return num.toString().split("").join("-");
// }

// console.log(addDashes(025));

// // Fifth task

// var array1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

// array1.sort(function(a, b){
//   return a - b;
// });

// console.log(array1);

// // Sixth task

// var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

// function mostFrequent(arr){
//   let count = {};
//   let maxItem;
//   let maxCount = 0;

//   for(let item of arr){
//     count[item] = (count[item] || 0) + 1;

//     if(count[item] > maxCount){
//       maxCount = count[item];
//       maxItem = item;
//     }
//   }

//   console.log(maxItem + " (" + maxCount + " times)");
// }

// mostFrequent(arr1);

// // Seventh task
// function swapCase(str){
//   let result = "";

//   for(let char of str){
//     if(char === char.toUpperCase()){
//       result += char.toLowerCase();
//     }else{
//       result += char.toUpperCase();
//     }
//   }

//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// // Eighth task
// var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// var o = ["th","st","nd","rd"];

// for (let i = 0; i < color.length; i++) {

//   let ordinal;

//   if (i === 0) ordinal = "st";
//   else if (i === 1) ordinal = "nd";
//   else if (i === 2) ordinal = "rd";
//   else ordinal = "th";

//   console.log((i + 1) + ordinal + " choice is " + color[i] + ".");
// }

// // nineth task
// var array2 = [1,0,2,3,4];
// var array3 = [3,5,6,7,8,13];

// function sumArrays(arr2, arr3) {

//   let result = [];
//   let maxLength = Math.max(arr2.length, arr3.length);

//   for (let i = 0; i < maxLength; i++) {

//     let val1 = arr2[i] || 0;
//     let val2 = arr3[i] || 0;

//     result.push(val2 + val3);
//   }

//   return result;
// }

// console.log(sumArrays(array2, array3));



// Object 
// 1 Object Literal ({})
// let car = {
//     brand: "Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function () {
//         console.log("Car is starting...");
//     }
// };
// console.log(car.brand);
// car.start();

// 2 Using new Object()
// let person = new Object();

// person.name = "Muhammadyusuf";
// person.age = 19;
// person.greet = function () {
//     return `Hello, my name is ${this.name}`;
// };

// console.log(person.greet());

// Factory Function 

// function createPerson(name,age) {
//     return {
//         name,
//         age,
//         greet () {
//             return `Hi Im ${this.name}, and Im ${this.age} years old`;
//         }
//     };
// }

// let person1 = createPerson("Muhammadyusuf",19);
// let person2 = createPerson("Bob",30);
// console.log(person1.greet());
// console.log(person2.greet());

// 4 Constructor Function

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function() {
//        return `Hi Im ${this.name}, and Im ${this.age} years old`; 
//     };
// }
// let person1 = new Person("Muhammadyusuf",19);
// let person2 = new Person("Bob",30);
// console.log(person1.greet());
// console.log(person2.greet());

// 5 Using ES6 class

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// greet() {
//     return `Hello, my name is $(this.name)`;
//   }
// }
// let Person = new Person1("Muhammadyusuf,19");
// console.log(Person.green());



// Homework
// task 1
// const students = [
//   { name: "Alice", scores: [80, 90, 100] },
//   { name: "Bob", scores: [50, 60, 70] },
//   { name: "Charlie", scores: [30, 40, 20] }
// ];

// let topStudent = "";
// let highestAvg = 0;

// students.forEach(student => {

//   const total = student.scores.reduce((sum, score) => sum + score, 0);
//   const avg = total / student.scores.length;

//   const passed = avg >= 50;

//   console.log(`${student.name} average: ${avg} - ${passed ? "Passed" : "Failed"}`);

//   if (avg > highestAvg) {
//     highestAvg = avg;
//     topStudent = student.name;
//   }
// });

// console.log(`${topStudent} has the highest average: ${highestAvg}`);

// // task 2
// const cart = [
//   { id: 1, name: "Laptop", price: 900, quantity: 1 },
//   { id: 2, name: "Mouse", price: 50, quantity: 2 },
//   { id: 3, name: "Keyboard", price: 100, quantity: 1 }
// ];

// let totalPrice = 0;

// cart.forEach(item => {
//   totalPrice += item.price * item.quantity;
// });

// let finalPrice = totalPrice;
// if (totalPrice > 100) {
//   finalPrice = totalPrice * 0.9;
// }

// let mostExpensive = cart[0];

// cart.forEach(item => {
//   if (item.price > mostExpensive.price) {
//     mostExpensive = item;
//   }
// });

// console.log("Total Price:", totalPrice);
// console.log("Final Price after discount:", finalPrice);
// console.log("Most expensive item:", mostExpensive.name);

// // task 3

// let products = [
//   { id: 1, name: "Laptop", price: 1200, stock: 10 },
//   { id: 2, name: "Phone", price: 700, stock: 15 }
// ];

// function addProduct(product) {
//   products.push(product);
// }

// function updateStock(id, newStock) {
//   products = products.map(product =>
//     product.id === id ? { ...product, stock: newStock } : product
//   );
// }


// function deleteProduct(id) {
//   products = products.filter(product => product.id !== id);
// }


// function findProduct(name) {
//   return products.find(product => product.name === name);
// }


// addProduct({ id: 3, name: "Tablet", price: 500, stock: 8 });

// updateStock(1, 20);

// deleteProduct(2);

// const found = findProduct("Laptop");

// console.log("Products:", products);
// console.log("Found product:", found);


// function checkPasswordStrength(password) {
//     let conditions = 0;

   
//     if (password.length >= 8) {
//         conditions++;
//     }

    
//     if (/[A-Z]/.test(password)) {
//         conditions++;
//     }

    
//     if (/[0-9]/.test(password)) {
//         conditions++;
//     }

   
//     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//         conditions++;
//     }

//     if (conditions <= 2) {
//         return "Weak";
//     } else if (conditions === 3) {
//         return "Medium";
//     } else {
//         return "Strong";
//     }
// }

// console.log(checkPasswordStrength("abc"));        
// console.log(checkPasswordStrength("Password1"));  
// console.log(checkPasswordStrength("@Passw0rd!"));  


// function trafficLight() {
//     console.log("Red Light");
    
//     setTimeout(() => {
//         console.log("Green Light");
        
//         setTimeout(() => {
//             console.log("Yellow Light");
            
//             setTimeout(() => {
//                 trafficLight(); 
//             }, 2000);

//         }, 3000); 

//     }, 5000); 
// }

// trafficLight();
