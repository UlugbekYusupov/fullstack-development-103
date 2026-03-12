//                                         // Praktist3

// // // chalamge1
// // let n = 10;
// // let even = 0;
// // let odd = 0;

// // for (let i = 1; i <= n; i++) {
// //   if (i % 2 == 0) {
// //     even++;
// //   } else {
// //     odd++;
// //   }
// // }

// // console.log("Even:", even);
// // console.log("Odd:", odd);

// // chalamge2

// // let num = 1234;
// // let reverse = 0;

// // while (num > 0) {
// //   let digit = num % 10;
// //   reverse = reverse * 10 + digit;
// //   num = Math.floor(num / 10);
// // }

// // console.log("Reverse:", reverse);

// // // chalamge3
// // let number = 907251;
// // let largest = 0;

// // while (number > 0) {
// //   let digit = number % 10;

// //   if (digit > largest) {
// //     largest = digit;
// //   }

// //   number = Math.floor(number / 10);
// // }

// // console.log("Largest digit:", largest);

// // // chalamge4

// // let num2 = 1234;
// // let sum = 0;

// // while (num2 > 0) {
// //   let digit = num2 % 10;
// //   sum = sum + digit;
// //   num2 = Math.floor(num2 / 10);
// // }

// // console.log("Sum of digits:", sum);

// // // chalamge5

// // let num3 = 12345;
// // let count = 0;

// // while (num3 > 0) {
// //   num3 = Math.floor(num3 / 10);
// //   count++;
// // }

// // console.log("Number of digits:", count);



// //                                           Lecture4
// // challange1
// function greet(name) {
//   return "Hello, " + name + "!";
// }

// // challenge2

// function isPrime(n) {
//   if (n <= 1) return false;

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }

//   return true;
// }

// // challenge3
// function countDigits(n) {
//   return Math.abs(n).toString().length;
// }

// // challenge4
// function isPalindrome(n) {
//   let str = n.toString();
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// // challenge5
// function isArmstrong(n) {
//   let str = n.toString();
//   let power = str.length;
//   let sum = 0;

//   for (let digit of str) {
//     sum += Math.pow(Number(digit), power);
//   }

//   return sum === n;
// }

// // challenge6
// function createCounter(start) {
//   let count = start;

//   return {
//     increment: function() {
//       count++;
//     },
//     decrement: function() {
//       count--;
//     },
//     getCount: function() {
//       return count;
//     }
//   };
// }

// // challenge7

// function orderFood(name, address, food) {
//   return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
// }

// // challenge8
// function lazyAdder(a) {
//   return function(b) {
//     return a + b;
//   };
// }

//                                     // ASSIGNMENT
// function calculateTotal(price, quantity) {
//   let total = price * quantity;

//   if (quantity >= 5) {
//     total = total * 0.8;
//   } else if (quantity >= 3) {
//     total = total * 0.9;
//   }

//   return total;
// }
// // CHALLENGE2
// function checkPassword(password) {
//   let hasUpper = false;
//   let hasNumber = false;
//   let hasSpecial = false;

//   for (let i = 0; i < password.length; i++) {
//     let char = password[i];

//     if (char >= "A" && char <= "Z") {
//       hasUpper = true;
//     } else if (char >= "0" && char <= "9") {
//       hasNumber = true;
//     } else if (!((char >= "a" && char <= "z"))) {
//       hasSpecial = true;
//     }
//   }

//   if (password.length >= 8 && hasUpper && hasNumber && hasSpecial) {
//     return "Strong";
//   } else if (password.length >= 6 && (hasUpper || hasNumber)) {
//     return "Medium";
//   } else {
//     return "Weak";
//   }
// }
// // CHALLENGE3

// function withdraw(amount) {
//   if (amount % 10 !== 0) {
//     return "Error: Amount must be multiple of 10";
//   }

//   let result = "";

//   let hundreds = Math.floor(amount / 100);
//   amount = amount % 100;

//   let twenties = Math.floor(amount / 20);
//   amount = amount % 20;

//   let tens = Math.floor(amount / 10);

//   if (hundreds > 0) result += hundreds + "x $100 ";
//   if (twenties > 0) result += twenties + "x $20 ";
//   if (tens > 0) result += tens + "x $10 ";

//   return result;
// }

// // CHALLENGE6
// function bankAccount(startBalance) {
//   let balance = startBalance;

//   return {
//     deposit: function(amount) {
//       if (amount <= 0) return "Deposit amount must be positive";
//       balance += amount;
//       return "Deposited: $" + amount;
//     },

//     withdraw: function(amount) {
//       if (amount <= 0) return "Withdraw amount must be positive";
//       if (amount > balance) return "Not enough balance";
//       balance -= amount;
//       return "Withdrew: $" + amount;
//     },

//     viewBalance: function() {
//       return "Balance: $" + balance;
//     }
//   };
// }

// // CHALLENGE7

// function createUser(name, role) {
//   return {
//     name: name,
//     role: role,

//     canAdd: function() {
//       return role === "admin";
//     },

//     canEdit: function() {
//       return role === "admin" || role === "editor";
//     },

// //     canDelete: function() {
      // return role === "admin";
// //     },

// //     canView: function() {
// //       return role === "admin" || role === "editor" || role === "viewer";
// //     }
// //   };
// // }

// // // CHALLENGE8
// // function calculateTax(income) {
// //   if (income < 10000) {
// //     return 0;
// //   } else if (income <= 50000) {
// //     return income * 0.10;
// //   } else {
// //     return income * 0.20;
// //   }
// // }


// // Challange 1

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

// // Test
// console.log(first([7, 9, 0, -2]));       // 7
// console.log(first([],3));                // []
// console.log(first([7, 9, 0, -2],3));     // [7,9,0]
// console.log(first([7, 9, 0, -2],6));     // [7,9,0,-2]
// console.log(first([7, 9, 0, -2],-3));    // -3


// // Challange 2

// // function last(arr, n) {
// //   if (n == null) {
// //     return arr[arr.length - 1];
// //   }

// //   return arr.slice(Math.max(arr.length - n, 0));
// // }

// // // Test
// // console.log(last([7, 9, 0, -2]));       // -2
// // console.log(last([7, 9, 0, -2],3));     // [9,0,-2]
// // console.log(last([7, 9, 0, -2],6));     // [7,9,0,-2]


// // Challane 3

// let myColor = ["Red", "Green", "White", "Black"];

// let result = myColor.join(",");

// console.log(result);


// // Challane 4

// function addDash(num) {
//   let str = num.toString();
//   return str.split("").join("-");
// }

// console.log(addDash(25468));

// // Challange 5

// let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// numbers.sort(function(a, b) {
//   return a - b;
// });

// console.log(numbers);

// // // Challange 6


// let items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// let counter = {};
// let mostItem;
// let mostCount = 0;

// for (let i = 0; i < items.length; i++) {

//   let element = items[i];

//   if (counter[element] == null) {
//     counter[element] = 1;
//   } else {
//     counter[element]++;
//   }

//   if (counter[element] > mostCount) {
// //     mostCount = counter[element];
// //     mostItem = element;
// //   }
// // }

// // console.log(mostItem + " (" + mostCount + " times)");


// // // Challane 7


// // let text = "The Quick Brown Fox";
// // let resulttt = "";

// // for (let i = 0; i < text.length; i++) {

// //   let letter = text[i];

// //   if (letter === letter.toUpperCase()) {
// //     resulttt += letter.toLowerCase();
// //   } else {
// //     resulttt += letter.toUpperCase();
// //   }

// // }

// // console.log(result);


// // // Challange 8

// // let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// // let suffix = ["th","st","nd","rd"];

// // for (let i = 0; i < colors.length; i++) {

// //   let number = i + 1;
// //   let ending;

// //   if (number == 1) {
// //     ending = suffix[1];
// //   } else if (number == 2) {
// //     ending = suffix[2];
// //   } else if (number == 3) {
// //     ending = suffix[3];
// //   } else {
// //     ending = suffix[0];
// //   }

// //   console.log(number + ending + " choice is " + colors[i]);
// // }


// // // Challane 9


// // let array1 = [1,0,2,3,4];
// // let array2 = [3,5,6,7,8,13];

// // let resultt = [];

// // let maxLength = Math.max(array1.length, array2.length);

// // for (let i = 0; i < maxLength; i++) {

// //   let value1 = array1[i] || 0;
// //   let value2 = array2[i] || 0;

// //   resultt.push(value1 + value2);
// // }

// // console.log(result);

// let car  = {
//   brand: "Tesla",
//   model: "Model S",
//   year: 2024,
//   start: function() {
//     console.log("Car is starting....")
//   }
// };
// console.log(car.brand);
// console.log(car.model);
// console.log(car.start);
// car.start()


// let person = new Object()
// person.name = "Alice";
// person.age = 25;
// person.greet = function() {
//   return `Hello, my name is ${this.name} and i am ${this.age}`;
// };
// console.log(person.greet())


                                      // Lekture 7

const students = [
  { name: "Ali", scores: [70, 80, 60] },
  { name: "Vali", scores: [40, 50, 45] },
  { name: "Sardor", scores: [90, 85, 95] }
];

students.forEach(s => {
  s.avg = s.scores.reduce((a, b) => a + b) / s.scores.length;
  s.passed = s.avg >= 50;
});

const topStudent = students.reduce((a, b) => (a.avg > b.avg ? a : b));

console.log(students);
console.log(topStudent);


// challane 2


const cart = [
  { id: 1, name: "Phone", price: 300, quantity: 1 },
  { id: 2, name: "Headphones", price: 50, quantity: 2 },
  { id: 3, name: "Charger", price: 20, quantity: 3 }
];

let total = cart.reduce((a, b) => a + b.price * b.quantity, 0);

if (total > 100) total *= 0.9;

const expensive = cart.reduce((a, b) => (a.price > b.price ? a : b));

console.log(total);
console.log(expensive);

// challane 3

let products = [
  { id: 1, name: "Laptop", price: 1000, stock: 5 },
  { id: 2, name: "Mouse", price: 25, stock: 20 }
];

function addProduct(p) {
  products.push(p);
}

function updateStock(id, stock) {
  const p = products.find(x => x.id === id);
  if (p) p.stock = stock;
}

function deleteProduct(id) {
  products = products.filter(x => x.id !== id);
}

function findProduct(name) {
  return products.find(x => x.name === name);
}

addProduct({ id: 3, name: "Keyboard", price: 50, stock: 10 });
updateStock(1, 3);
deleteProduct(2);

console.log(products);
console.log(findProduct("Laptop"));

// challane 4

const posts = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 }
];

function mostLikedPost(arr) {
  let mostLiked = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].likes > mostLiked.likes) {
      mostLiked = arr[i];
    }
  }

  return mostLiked;
}

function totalEngagement(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i].likes + arr[i].comments + arr[i].shares;
  }

  return total;
}

let topPost = mostLikedPost(posts);

console.log("Most liked post: " + topPost.author + " with " + topPost.likes + " likes");
console.log("Total engagement: " + totalEngagement(posts));

// challane 5

const teams = [
  { name: "Team A", wins: 5, losses: 2, points: 15 },
  { name: "Team B", wins: 6, losses: 1, points: 18 },
  { name: "Team C", wins: 4, losses: 3, points: 12 }
];

function sortTeams(arr) {
  return arr.sort(function(a, b) {
    return b.points - a.points;
  });
}

function bestTeam(arr) {
  let best = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].points > best.points) {
      best = arr[i];
    }
  }

  return best;
}

console.log("Sorted teams:");
console.log(sortTeams(teams));

let topTeam = bestTeam(teams);
console.log("Best-performing team: " + topTeam.name);

// challane 6

const inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 5 },
  { itemName: "Phone", category: "Electronics", stock: 10 },
  { itemName: "Chair", category: "Furniture", stock: 3 },
  { itemName: "Table", category: "Furniture", stock: 7 }
];

function totalStockByCategory(category) {
  return inventory
    .filter(item => item.category === category)
    .reduce((sum, item) => sum + item.stock, 0);
}

console.log("Electronics total stock:", totalStockByCategory("Electronics"));
console.log("Furniture total stock:", totalStockByCategory("Furniture"));