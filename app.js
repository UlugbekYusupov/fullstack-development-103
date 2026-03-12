let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  start: function () {
    console.log("Car is starting...");
  }
};

console.log(car.brand); // Tesla
car.start(); // "Car is starting..."



// challane 1

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