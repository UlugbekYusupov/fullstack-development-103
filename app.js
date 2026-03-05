// const user = {
//   name: "Ulugbek",
// };

// const userr = user;

// console.log(user === userr);

// const user = {
//   username: "Ulugbek",
//   age: 20,
//   country: "Uzbekistan",
// };

// const keys = Object.keys(user);
// const values = Object.values(user);

// console.log(values);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of user) {
//   console.log(element);
// }

// let number = Number(prompt("Sonni kiriting :"));
// let res = 0;
// while (number > 0){
//     let lastDigit = number % 10;
//     res = res * 10 + lastDigit;
//     number = Math.floor(number / 10);

// }
// console.log(res)

// let usrNum = Number(prompt("give a num: "));
// let maxNum = 0;

// while (usrNum > 0) {
//   let lastDigit = usrNum % 10;
//   if (maxNum < lastDigit) {
//     maxNum = lastDigit;
//   }
//   usrNum = Math.floor(usrNum / 10);
// }

// console.log(maxNum);

// function outer() {
//   let username = "Ulugbek";

//   function inner() {
//     let fullname = username + "Yusupov";
//     console.log(fullname);
//   }
//   inner();
// }

// outer();

// sum();

// function sum(a, b) {
//   return a + b;
// }

// let express = function () {};

// express();

// let arrow = () => {};

// (function (a, b) {
//   console.log(a + b);
// })(3, 4);

// console.log(Array(2));

// let s = new Function("a", "b", "return a + b");

// console.log(s(10, 20));

// let colors = ["Greem", "Blue", "Red"];
// console.log(colors[0], colors[1], colors[2]);

// let nums = new Array(5);
// console.log(nums.length);
// let names = new Array("Bob", "Alice");
// console.log(names);

// let original = [1, 2, 3];
// let copy = [...original];
// console.log(copy);

// let numbers = Array.of(5);
// console.log(numbers);

// function sum(...rest) {
//   console.log(rest[0] + rest[1]);
// }

// sum(3, 4);

// const users = {
//   name: "Ulugbek",
//   email: "nimadir@gmail.com",
// };

// const { name: nimadir, email: buyamnimadir } = { ...users };

// console.log(nimadir);

// let prices = ["100", "200", "700"];

// const updatedPrices = prices.map(function (value, index) {
//   return value > 5;
// });

// console.log(updatedPrices);

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);

// const array = [1, 4, 9, 16];

// // Pass a function to map
// const mapped = array.map((x) => x * 2);

// console.log(mapped);

// const array = [1, 2, 3, 4];

// const initialValue = 0;

// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);

// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1, 5));
// console.log(animals.slice(-2));
// console.log(animals.slice(2, -1));
// console.log(animals.slice());

// const months = ["Jan", "March", "April", "June"];

// months.splice(1, 100, "Feb");

// console.log(months);

// months.splice(4, 1, "May");
// console.log(months);

// challenge 1 (Abdulloh)
// function first(arr, n = 1) {
//   if (arr.length === 0) {
//     return arr;
//   }

//   if (n < 0) {
//     return n;
//   } else if (n == 1) {
//     return arr[0];
//   }

//   return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// function SecondElements(array, n = 1) {
//   return array.slice(-n);
// }
// const arr = [1, 2, 3, 4, 5];
// console.log(SecondElements(arr));
// console.log(SecondElements(arr, 3));
// // challenge 3
// let myсolor = ["Red", "Green", "White", "Black"];
// let results = myсolor.join(",");
// console.log(results);

// // let num = String(+prompt("Enter numbers: "));
// // let result = num.split("").join("-");
// // console.log(result);

// // let arr1=[-3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// // let result=arr1.sort((a, b)=> a-b)
// // console.log(result)

// let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// function mostFrequentItem(arr) {
//   let mostCommon = 0;
//   let commonVal;

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count += 1;
//       }
//       if (count > mostCommon) {
//         mostCommon = count;
//         commonVal = arr[i];
//       }
//     }
//   }
//   return `Most common value is: ${commonVal}, it repeated: ${mostCommon} times`
// }

// console.log(mostFrequentItem(arr1));

// let InputString = prompt("Enter str: ")
// function ChangeText() {
//   let result = ''
//   for (let letter of InputString) {
//     if (letter === letter.toLowerCase()) {
//       result += letter.toUpperCase()
//     }
//     else {
//       result += letter.toLowerCase()
//     }

//   }
//   return result
// }
// console.log(ChangeText(InputString));
