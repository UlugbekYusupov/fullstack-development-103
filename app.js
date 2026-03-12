// // lecture 6
// // challenge 1

// function first(arr, n) {
//   if (arr.length === 0) return [];

//   if (n === undefined) {
//     return arr[0];
//   }

//   if (n < 0) {
//     return [];
//   }

//   return arr.slice(0, n);
// }
// console.log(first([7, 9, 0, -2]));      // 7
// console.log(first([], 3));              // []
// console.log(first([7, 9, 0, -2], 3));   // [7,9,0]
// console.log(first([7, 9, 0, -2], 6));   // [7,9,0,-2]
// console.log(first([7, 9, 0, -2], -3));  // []

// // challenge2
// function last(arr, n) {
//   if (arr.length === 0) return [];

//   if (n === undefined) {
//     return arr[arr.length - 1];
//   }

//   return arr.slice(Math.max(arr.length - n, 0));
// }
// console.log(last([7, 9, 0, -2]));      // -2
// console.log(last([7, 9, 0, -2], 3));   // [9,0,-2]
// console.log(last([7, 9, 0, -2], 6));   // [7,9,0,-2]

// // challenge3
// // let myColor = ["Red", "Green", "White", "Black"];

// // let result = myColor.join(",");

// // console.log(result);

// // challenge4
// function insertDash(num) {
//   let str = num.toString();
//   let result = str.split("").join("-");
//   return result;
// }

// console.log(insertDash(25468));

// // challenge 5
// var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// arr1.sort(function(a, b){
//   return a - b;
// });

// console.log(arr1);

// // challenge 6
// var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

// let count = {};
// let max = 0;
// let mostFrequent;

// for(let i = 0; i < arr1.length; i++){

//   let item = arr1[i];

//   if(count[item] == null){
//     count[item] = 1;
//   }else{
//     count[item]++;
//   }

//   if(count[item] > max){
//     max = count[item];
//     mostFrequent = item;
//   }
// }

// console.log(mostFrequent + " (" + max + " times)");

// // challenge 7
// function swapCase(str){

//   let result = "";

//   for(let i = 0; i < str.length; i++){

//     let char = str[i];

//     if(char === char.toUpperCase()){
//       result += char.toLowerCase();
//     }else{
//       result += char.toUpperCase();
//     }

//   }

//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));

// let mycolor = ["red","black","green","yellow"];

// let result = mycolor.join(",");

// console.log(result);


// const students = [ 
//     {name: "Alice",scores:[80,90,100]},
//     {name: "Bob", scores:[50, 60, 70]},
//     {name: "charlie",scores:[30, 40, 20]}
// ];
// console.log();

// let car = {
//     brand: "BMW",
//     model: "m5 cs",
//     year: "2026",
//     start: function(){
//         console.log("car is starting...");
        
//     }
// };
// console.log(car.brand)
// car.start();
// console.log(car.model)

// let person = new Object();
// person.name = "John";
// person.age = 19;
// person.greet = function() {
//     return `Hello, my name is ${this.name}`;
// };
// console.log(person.greet());    


// function createPesron(name,age){
//     return {
//         name,
//         age,
//         greet(){
//             `hi I'm ${this.name} and I'm ${this.age} years old.`;
//         }
//     };
// }
// let person1 = createPesron("Farruh",18);
// let person2 = createPesron("John",20);
// console.log(person1.greet());
// console.log(person2.greet());

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         return `hi I'm ${this.name} and I'm ${this.age} years old.`;
//     };
// }
// let person1 = new Person("Alice",25);
// console.log(person1.greet());

// let fruits = ["apple","banana","orange"];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

                                                     // LECTURES 7
// challnge 1

const students = [
 { name: "Alice", scores: [80, 90, 100] },
 { name: "Bob", scores: [50, 60, 70] },
 { name: "Charlie", scores: [30, 40, 20] }
];

let topStudent = "";
let highestAvg = 0;

for (let student of students) {

    // calculate sum
    let sum = 0;
    for (let score of student.scores) {
        sum += score;
    }

    // average
    let avg = sum / student.scores.length;

    // pass or fail
    let status = avg >= 50 ? "Passed" : "Failed";

    console.log(student.name + " average:", avg, "-", status);

    // find top student
    if (avg > highestAvg) {
        highestAvg = avg;
        topStudent = student.name;
    }
}

console.log(topStudent + " has the highest average:", highestAvg);

// challenge2
const cart = [
 { id: 1, name: "Laptop", price: 900, quantity: 1 },
 { id: 2, name: "Mouse", price: 50, quantity: 2 },
 { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

let total = 0;
let mostExpensive = cart[0];

for (let item of cart) {

    // calculate total price
    total += item.price * item.quantity;

    // find most expensive item
    if (item.price > mostExpensive.price) {
        mostExpensive = item;
    }
}

// apply discount
if (total > 100) {
    total = total * 0.9;
}

console.log("Total Price:", total);
console.log("Most expensive item:", mostExpensive.name);

// challenge3

let products = [
 { id: 1, name: "Laptop", price: 1200, stock: 10 },
 { id: 2, name: "Phone", price: 700, stock: 15 }
];

const addProduct = p => products.push(p);

const updateStock = (id, stock) =>
 products = products.map(p => p.id === id ? {...p, stock} : p);

const deleteProduct = id =>
 products = products.filter(p => p.id !== id);

const findProduct = name =>
 products.find(p => p.name === name);

console.log(products);
