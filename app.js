const celsius = 25
const fahrenheit = ( celsius * 9/5) + 32;
console.log('Celsius' , celsius);
console.log("Fahrenheit", fahrenheit)

budget = Number(prompt("enter your total budget:"));
let expense1= Number(prompt("enter expense 1:"));
let expense2= Number(prompt("enter expense 2:"));
let expense3= Number(prompt("enter expense 3:"));
let totalExpenses = expense1 + expense2 + expense3;
let remaining = budget - totalExpenses;
console.log("Total Budget:", budget.toFixed(2));
console.log("Total Expenses:", totalExpenses.toFixed(2));
console.log("Remaining Money:", remaining.toFixed(2));
if (remaining < 0) {
    console.log("Warning: You have overspent!");
} else {
    console.log("You are within your budget.");
}

let a = "42";
let b = "3.14";
let c = "hello"; 
let d = false;
let e = null;


let sum = Number(a) + Number(b) + Number(d) + Number(e);

console.log(sum); 

let limit = 10;
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= limit; i++) {
    if (i % 2 === 0) {
        evenCount++; 
    } else {
        oddCount++; 
    }
}

console.log("Evens:", evenCount);
console.log("Odds:", oddCount);

let num = 1234;
let reversed = 0;

while (num > 0) {
    let lastDigit = num % 10;        
    reversed = (reversed * 10) + lastDigit; 
    num = Math.floor(num / 10);
}

console.log("Reversed:", reversed);

let num1 = 48291;
let largest = 0;

while (num1 > 0) {
    let currentDigit = num1 % 10; 
    
    if (currentDigit > largest) {   
        largest = currentDigit;
    }
    
    num1 = Math.floor(num1 / 10);
}

console.log("Largest digit:", largest);


let num2 = 543;
let sum2 = 0;

while (num2 > 0) {
    let lastDigit = num2 % 10;       
    sum2 += lastDigit;               
    num2 = Math.floor(num2 / 10);      
}

console.log("Sum of digits:", sum);

let num3 = 98765;
let count = 0; 
while (num3 > 0) {
    num3 = Math.floor(num3 / 10);     
    count++; 
}

console.log("Number of digits:", count);




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

// let arr1 = [1, 0, 2, 3, 4];
// let arr2 = [3, 5, 6, 7, 8, 13];
// let result = [];

// let maxLength = Math.max(arr1.length, arr2.length);

// for (let i = 0; i < maxLength; i++) {
//   let val1 = arr1[i] || 0;  
//   let val2 = arr2[i] || 0;  
//   result[i] = val1 + val2;
// }



// Challenge 1
const students = [
  { name: "Alice", scores: [80, 90, 100] },
  { name: "Bob", scores: [50, 60, 70] },
  { name: "Charlie", scores: [30, 40, 20] }
];

function getAverage(scores) {
  return scores.reduce((a, b) => a + b, 0) / scores.length;
}

let topStudent = null;
let highestAvg = -1;

students.forEach(student => {
  const avg = getAverage(student.scores);
  if (avg > highestAvg) {
    highestAvg = avg;
    topStudent = student;
  }
});

console.log(`${topStudent.name} has the highest average: ${highestAvg}`);



// Challenge 2
const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
const finalTotal = total > 100 ? total * 0.9 : total;

const mostExpensive = cart.reduce((max, item) => {
  const val = item.price * item.quantity;
  return val > (max.price * max.quantity) ? item : max;
}, cart[0]);

console.log(`Total Price: ${finalTotal} (after discount)`);



// Challenge 3
let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(id, name, price, stock) {
  products.push({ id, name, price, stock });
}

function updateStock(id, newStock) {
  const p = products.find(p => p.id === id);
  if (p) p.stock = newStock;
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
}

function findProduct(name) {
  return products.find(p => p.name.toLowerCase() === name.toLowerCase());
}



// Challenge 4
const posts = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 }
];

const mostLiked = posts.reduce((max, p) => p.likes > max.likes ? p : max, posts[0]);

const totalEngagement = posts.reduce((sum, p) => 
  sum + p.likes + p.comments + p.shares, 0);

console.log("Most liked:", mostLiked.author);
console.log("Total engagement:", totalEngagement);



// Challenge 5
const teams = [
  { name: "Team A", wins: 5, losses: 2, points: 15 },
  { name: "Team B", wins: 6, losses: 1, points: 18 },
  { name: "Team C", wins: 4, losses: 3, points: 12 }
];

const sortedTeams = [...teams].sort((a, b) => b.points - a.points);
const bestTeam = sortedTeams[0];

console.log("Best team:", bestTeam.name);
console.log("Ranking:", sortedTeams.map(t => t.name));



// Challenge 6
const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
  { itemName: "Mouse", category: "Accessories", stock: 25 }
];

function totalStockByCategory(category) {
  return inventory
    .filter(item => item.category === category)
    .reduce((sum, item) => sum + item.stock, 0);
}

function getLowStockItems(threshold = 10) {
  return inventory.filter(item => item.stock <= threshold);
}

console.log("Electronics stock:", totalStockByCategory("Electronics"));
console.log("Low stock:", getLowStockItems(10).map(i => i.itemName));

