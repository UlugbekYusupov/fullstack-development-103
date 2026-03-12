// // 1 type of creating object

// let car = {
//     brand : "Tesla ",
//     model : "Model S",
//     year : 2024 , 
//     start : function () {
//         console.log("Car is starting...");
//     }

// };
// console.log(car.model);
// car.start();

// // 2 type of creating object

// let person = new Object();

// person.name = "Masha";
// person.age = 15;

// person.greet = function () {
//   return `hello my name is ${this.name}`;
// };

// console.log(person.greet());

// // 3 type of creating object

// function createPerson (name, age) {
//     return {
//         name,
//         age,
//         greet() {
//             return `Hi , I'm  ${this.name} , and I'm ${this.age} years old. ` ;
//         }
//     };
// }

// let person1 = createPerson("Ali" ,48)
// let person2 = createPerson("Sem" , 12)
// console.log(person1.greet());
// console.log(person2.greet());


// // 4 type of creating object

// function Person (name , age) {
//     this.name = name
//     this.age  = age
//     this.greet = function( ) {
//         return `hi my name is ${this.name} , and i am ${this.age} years old.`;
//     }
// }

// let person3 = new Person("Sam", 40)
// let person4 = new Person("Jon" , 20)
// console.log(person3.greet());
// console.log(person4.greet());   

// // 5 type of creating object

// let animal = {
//     type: "Mammal",
//     makeSound() {
//         console.log("Some generic animal sound");
        
//     }
// };
// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound();
// console.log(dog.type);

// // 6 type of creating object

// class Person {
//     constructor (name , age ) {
//         this.name = name
//         this.age = age
//     }
//     greet () {
//         return `Hello my  name is ${this.name}`;        
//     }
// }

// let perosnn = new Person ("Alice ",25);
// console.log(perosnn.greet())

// // & type of creating object

// const config = Object.freeze({
//     theme: "dark",
//     version: "1.0.0"
// });
// config.theme = "light";
// console.log(config.theme);



// =============== Challanges ===============================

// challange 1

const student = [
    {name: "Alice" , scores: [80,90,100]},
    {name: "Bob" , scores: [50,60,70]},
    {name: "Charlie" , scores : [30,40,20]}
];

let topStudent = "";
let highestAvg = 0;

student.forEach(student => {

  let sum = 0;

  student.scores.forEach(score => {
    sum += score;
  });

  let avg = sum / student.scores.length;

  console.log(student.name + " average:", avg);

  if (avg >= 50) {
    console.log(student.name + " passed");
  } else {
    console.log(student.name + " failed");
  }

  if (avg > highestAvg) {
    highestAvg = avg;
    topStudent = student.name;
  }

});

console.log(topStudent + " has the highest average:", highestAvg);

// Challange  2

const cart = [
  { id: 1, name: "Laptop", price: 900, quantity: 1 },
  { id: 2, name: "Mouse", price: 50, quantity: 2 },
  { id: 3, name: "Keyboard", price: 100, quantity: 1 }
];

let total = 0;
let mostExpensive = cart[0];

cart.forEach(item => {

  total += item.price * item.quantity;

  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }

});

if (total > 100) {
  total = total * 0.9;
}

console.log("Total Price:", total);
console.log("Most expensive item:", mostExpensive.name);

// Challange 3

let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 10 },
  { id: 2, name: "Phone", price: 700, stock: 15 }
];

function addProduct(product) {
  products.push(product);
}

function updateStock(id, newStock) {
  products = products.map(product => 
    product.id === id ? { ...product, stock: newStock } : product
  );
}

function deleteProduct(id) {
  products = products.filter(product => product.id !== id);
}

function findProduct(name) {
  return products.find(product => product.name === name);
}


addProduct({ id: 3, name: "Keyboard", price: 100, stock: 20 });

updateStock(1, 5);

deleteProduct(2);

console.log(findProduct("Laptop"));

console.log(products);

//  Challange 4

const posts = [
  { author: "Alice", likes: 100, comments: 20, shares: 5 },
  { author: "Bob", likes: 200, comments: 50, shares: 10 }
];

function mostLikedPost(posts) {
  let mostLiked = posts[0];

  posts.forEach(post => {
    if (post.likes > mostLiked.likes) {
      mostLiked = post;
    }
  });

  return mostLiked;
}

function totalEngagement(posts) {
  let total = 0;

  posts.forEach(post => {
    total += post.likes + post.comments + post.shares;
  });

  return total;
}

console.log("Most liked post:", mostLikedPost(posts));
console.log("Total engagement:", totalEngagement(posts));
 