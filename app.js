// console.log("5"+ 5); 
// console.log("5" - 5);
// console.log("5" * 2);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + ture);
// console.log(5 + null);
// console.log(5 +  undefined);
// console.log("5" + "5");


// var a = "ulugbek";
// const a = "ulugbek";
// console.log(a);

// const a = "Ulugbek";
// console.log(a);


// let userName 

// let ageGroup5

// let _internalValue

// let $kind0fSpecial

// challange 2

// let = ("200" + 50);
// console.log(let);

// let age = 25
// let strAge = toString(age)
// let word = `${strAge} years old`
// console.log(word);

// let bool = "false"
// let check = Boolean(bool)

// console.log("10" - true);

// ARIFMETIC operators 

// console.log(5 + 3);
// console.log(7 - 2);

// 5 == "true" true
// 5 === "5" false 
// 10 != 5 true 
// 10 !== "10" true 
// 10 > 5 true 
// 10 < 5 false 

// const user = {
//     name: "Ulugbek",
// }

// const userr = user;
// console.log(userr === user); true 

// !!true will be true 

// let age = 20;
// let status = age >= 18 ? "Adult" : "Minor";
// console.log(status);

// CONDITIONAL STATEMENT 

// if (condition) {

// }


// if (condition) {

// } else {

// }


// if (condition) {

// } else if {

// } else {

// }


// switch (expression) {
//     case value1:
//         break;
//     case value2:
//         break;
//     default
// }


// for (initializing; CSSConditionRule; increament) {

// }

// while (condition) {

// }

// do (condition) {

// } while (condition);

// const user = {
//     username: "Ulugbek",
//     age: 20,
//     country: "Uzbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user)

// console.log(values);

// for (const key in user) {
//     const element = user[key];
//     console.log(element);    
// }

// for (const element of keys) {
//     console.log(element);   
// }


// challange3

// const temperatureCelcius = 25;
// console.log(temperatureCelcius);

// const temperature = 25;
// const temperatureFarenheit = (temperature * 9/5) + 32;
// console.log(temperature + "is equal to" + temperatureFarenheit + "F");

// challange 4

// let totalBudget = 100

// let exp1 = Number(prompt("expense1: "))
// let exp2 = Number(prompt("expense2: "))
// let exp3 = Number(prompt("expense3: "))

// totalBudget -= exp1
// totalBudget -= exp2
// totalBudget -= exp3

// if (totalBudget < 0) {
//     alert("You have overspent");
// }

// console.log(parseFloat(totalBudget));


// New practise

// Challenge1

// let number = Number(prompt("Enter a number:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= number; i++) {
//     if (i % 2 === 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }

// console.log("Even numbers:", evenCount);
// console.log("Odd numbers:", oddCount);

// Challenge2 

// let number = Number(prompt("Sonni kiriting :"))
// let res = 0;

// while (number > 0) {
//    let LastDigit = number % 10;
//    res = res * 10 + LastDigit;
//    number = Math.floor(number / 10);
// }

// console.log(res);

// Challenge3 

// let userNumber = Number(prompt("Enter number :"))
// let MaxNumber = 0

// while (userNumber > 0) {
//     let LastDigit = userNumber % 10;
//     if (MaxNumber < LastDigit) {
//         MaxNumber = LastDigit
//     }
//     userNumber = Math.floor(userNumber / 10);
// }

// console.log(MaxNumber);

// challenge4 

// let number = Number(prompt("enter a number :"))
// let originalNumber = number;

// if (number < 0) {
//     number * number * -1;
// }


// let sum = 0;
// while (number > 0) {
//     sum = sum + (number % 10);
//     number = Math.floor(number / 10);
// }

// console.log(`Sum of the digits : ${originalNumber} = ${sum}`);

// classwork

// function outer() {
//     let username = "Ulugbek";

// function inner() {
//     let fullname = username + "Yusupov";
//     console.log(fullname);
// }
// inner();
// }

// outer();

// function parent() {
//     let parentVar = "I am parent";

//     function child() {
//         let childVar = "I am a child";
//         console.log(childVar);
//     } 
//     child();
//     console.log(parentVar);
// }
// console.log(parentVar);

// Types of functions

// declaration function 
// function sum(a,b) {
//     return a + b; 
// }

// let express = function () {};

// express();

// anonymus function
// let arrow = () => {};

// IIFE function
// (function (a,b) {
//     console.log(a + b);
// })(3,4)

// Function constructor
// let s = new Function("a","b", "return a + b");
// console.log(s(20,40));

// Closures
// function outer() {
//     let count = 0;

//     return function inner() {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();
// counter()
// counter()
// counter()

// Challenge1 New task 

// function greet(name) {
//     return "Hello," + name;
// } 

// console.log(greet("Ali"));

// challenge2
// function isPrime(n) {
//     if (n <= 1) return false;

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     } 
//     return true;
// }

// console.log(isPrime(7)); true 
// console.log(isPrime(10)); false 

// // challenge3
// function countDigits(n) {
//    return Math.abs(n).toString().length; 
// }

// console.log(countDigits(12345)); 
// console.log(countDigits(-9873));

// challenge4
// function isPalindrome(n) {
//     n = Math.abs(n);
//     let original = n;
//     let reserved = 0;

//     while(n > 0) {
//         let digit = n % 10;
//         reserved = reserved * 10 + digit;
//         n = Math.floor(n / 10)
//     }
//     return original === reserved;
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(123));

// challenge5
// function isArmstrong(n) {
//     let original = Math.abs(n);
//     let temp = original;
//     let digits = original.toString().length;
//     let sum = 0;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum += Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }
//     return sum === original;
// }

// console.log(isArmstrong(153));
// console.log(isArmstrong(123));

// challenge6
// function createCounter(start) {
//     let count = start;

//     return {
//         increament() {
//             count++;
//         },
//         decreament() {
//             count--
//         },
//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter(5);

// counter.increament();
// counter.increament();
// console.log(counter.getCount());

// counter.decreament();
// console.log(counter.getCount());

// challenge7
// function sayHello(name) {
//     console.log("Hello" + name);
// }

// const sayHello = once(sayHello);

// sayHelloOnce("Abdullox");
// sayHelloOnce("David");
// sayHelloOnce("Name")

// challenge8
// function lazyAdder(a) {
//     return function(b) {
//         return a + b;
//     };
// } 

// const add5 = lazyAdder(5);

// console.log(add5(10));
// console.log(add5(20));

// ARRAYS 

// Length property 
// Indexing & Accessing Elements

// let colors = ["Green","Blue","Red"];
// console.log(colors);

// let colors = ["green","red","blue"]
// console.log(colors[0],colors[1],colors[2]);

// let colors = ["blue","pink","ok"]
// console.log(colors(length));

// let nums = new Array(5);
// console.log(nums);

// let names = Array("Bob","OKay")
// console.log(names);

// Spread operators or Rest operator

// let original = [1,2,3];
// let copy =  [...original];
// console.log(copy);

// let numbers = Array.of(5);
// console.log(numbers);

// function sum(...rest) {
//     console.log(rest[0] + rest[1]);
// }

// console.log(3, 4);

// const users = {
//     name:"Ulugbek",
//     email:"okay@gmail.com",
// };

// const {name: nimadir, email: okaygo} = {...users} 

// console.log(nimadir);

// let arr = [1,2,3];
// arr.push(4);
// console.log(arr);

// arr.pop(4);
// console.log(arr);


// MAP Function

// let prices = ["100$","200$","300$"];
// let clothes = ["T-shirt","Jeans","Gloves"];

// const UpdatedPrices = prices.map(function (element, index) {
//     console.log(element, index);
// }); 


// let prices = ["100$","200$","300$"];

// const UpdatedPrices = prices.map(function (value, index) {
//     return value > 5;
// });

// console.log(UpdatedPrices);


// with for 

// let prices = ["100$","200$","300$"];
// let clothes = ["T-shirt","Jeans","Gloves"];

// for(let i= 0; i < prices.length; i++) {
//     prices[i]
// }

// console.log(prices);


// const words = ["spray","okay","result","vs","github"]

// const result = words.filter((word) )


// const array = [1,2,3,4];

// const initialValue = 0;

// const sumWithInitial = array.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
// )

// console.log(sumWithInitial);


// const animals = ["ant","boson","camel","duck","elephant"];

// console.log(animals.slice(2));


// const animals = ["ant","boson","camel","duck","elephant"];

// console.log(animals.slice(-2));


// const months = ["Jan","March","April","June"];

// months.splice(1, 0, "Feb");

// console.log(months);

// HOMEWORK 

// Challenge1

// function FirstElements(array, n = 1) {
//     return array.slice(0, n);
// }

// const arr = [1,2,3,4,5];

// console.log(FirstElements(arr));
// console.log(FirstElements(arr,3));
// console.log(FirstElements(arr,10));

// Challnge2

// function SecondElements(array, n = 1) {
//     return array.slice(-n);
// }

// const arr = [1,2,3,4,5];

// console.log(SecondElements(arr));
// console.log(SecondElements(arr,3));

// challenge3

// const fruits = ["apple","banana","orange","grape"];
// const result1 = fruits.join();
// console.log(result1);

// const result2 = fruits.join(" - ");
// console.log(result2);

// const result3 = fruits.join("");
// console.log(result3);

// function joinarr(array, separator = ",") {
//     return array.join(separator)
// }

// console.log(joinarr(fruits));
// console.log(joinarr(fruits, " "));
// console.log(joinarr(fruits, " | "));

// challenge4

// const input = 25468;
// const result = insertdash(input);
// console.log(result);

// function insertdash(input) {
//     const str = input.toString();
//     return str.split("").join("-")
// }

// console.log(insertdash(24568));


// challenge5

// var arr1 = [-3,8,7,6,5,-4,3,2,1];

// var sortedarr = arr1.sort(function(a,b) {
//     return a - b;
// })

// console.log(sortedarr);

// challenge6

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// function findmostfrequent(arr) {
//     var frequency = {};
//     var maxcount = 0;
//     var mostfrequentitem;

//     for (var i = 0; i < arr.length; i++) {
//         var item = arr[i];
//         frequency[item] = (frequency[item] || 0) + 1

//     if (frequency[item] > maxcount) {
//         maxcount = frequency[item];
//         mostfrequentitem = item;
//     }   
//     }

//     return {
//         item: mostfrequentitem,
//         count: maxcount
//     };
// }

// var result = findmostfrequent(arr1);

// console.log(result.item + "(" + result.count + "times)");

// challenge7

// function swapCase(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     let c = str[i];
//     if (c == c.toUpperCase()) {
//       result += c.toLowerCase();
//     } else {
//       result += c.toUpperCase();
//     }
//   }
//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// challenge8

// let color = ["blue","green","red","orange","violet","indigo","yellow"];
// let suffix = ["th","st","nd","rd"];

// color.map((item, index) => {
//   let num = index + 1;
//   if (num === 1) {
//     console.log(num + suffix[1] + " " + item);
//   } else if (num === 2) {
//     console.log(num + suffix[2] + " " + item);
//   } else if (num === 3) {
//     console.log(num + suffix[3] + " " + item);
//   } else {
//     console.log(num + suffix[0] + " " + item);
//   }
// });

// challenge9

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];
let result = [];

let maxLength = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLength; i++) {
  let val1 = arr1[i] || 0;  
  let val2 = arr2[i] || 0;  
  result[i] = val1 + val2;
}

console.log(result);



















