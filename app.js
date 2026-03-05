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

function first(arr, n) {
  if (arr.length === 0) return [];

  if (n == null) {
    return arr[0];
  }

  if (n < 0) {
    return n;
  }

  return arr.slice(0, n);
}

console.log(first([7, 9, 0, -2]));     
console.log(first([], 3));             
console.log(first([7, 9, 0, -2], 3));  
console.log(first([7, 9, 0, -2], 6));   
console.log(first([7, 9, 0, -2], -3));

// Second task
function last(arr, n) {
  if (n == null) {
    return arr[arr.length - 1];
  }

  return arr.slice(-n);
}

console.log(last([7, 9, 0, -2]));     
console.log(last([7, 9, 0, -2], 3)); 
console.log(last([7, 9, 0, -2], 6));  

// Third task
let myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));

// Fourth task
function addDashes(num) {
  return num.toString().split("").join("-");
}

console.log(addDashes(12345));

// Fifth task

var array1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

array1.sort(function(a, b){
  return a - b;
});

console.log(array1);

// Sixth task

var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

function mostFrequent(arr){
  let count = {};
  let maxItem;
  let maxCount = 0;

  for(let item of arr){
    count[item] = (count[item] || 0) + 1;

    if(count[item] > maxCount){
      maxCount = count[item];
      maxItem = item;
    }
  }

  console.log(maxItem + " (" + maxCount + " times)");
}

mostFrequent(arr1);

// Seventh task
function swapCase(str){
  let result = "";

  for(let char of str){
    if(char === char.toUpperCase()){
      result += char.toLowerCase();
    }else{
      result += char.toUpperCase();
    }
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));

// Eighth task
var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {

  let ordinal;

  if (i === 0) ordinal = "st";
  else if (i === 1) ordinal = "nd";
  else if (i === 2) ordinal = "rd";
  else ordinal = "th";

  console.log((i + 1) + ordinal + " choice is " + color[i] + ".");
}

// nineth task
var array2 = [1,0,2,3,4];
var array3 = [3,5,6,7,8,13];

function sumArrays(arr2, arr3) {

  let result = [];
  let maxLength = Math.max(arr2.length, arr3.length);

  for (let i = 0; i < maxLength; i++) {

    let val1 = arr2[i] || 0;
    let val2 = arr3[i] || 0;

    result.push(val2 + val3);
  }

  return result;
}

console.log(sumArrays(array2, array3));
