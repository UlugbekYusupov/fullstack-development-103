//challenge1
let students = [
  { name: "Ali", scores: [60, 70, 80] },
  { name: "Vali", scores: [40, 45, 50] },
  { name: "Sami", scores: [90, 85, 88] }
];

let topStudent = null;
let highestAvg = 0;

for (let student of students) {

  // average hisoblash
  let sum = 0;
  for (let score of student.scores) {
    sum += score;
  }

  let avg = sum / student.scores.length;

  // pass yoki fail
  let status = avg >= 50 ? "Passed" : "Failed";

  console.log(student.name + " average:", avg, "-", status);

  // top student topish
  if (avg > highestAvg) {
    highestAvg = avg;
    topStudent = student.name;
  }
}

console.log("Top student:", topStudent, "with average:", highestAvg);

//challenge2
let cart = [
  { id: 1, name: "Laptop", price: 800, quantity: 1 },
  { id: 2, name: "Mouse", price: 20, quantity: 2 },
  { id: 3, name: "Keyboard", price: 50, quantity: 1 }
];

let totalPrice = 0;
let mostExpensive = cart[0];

for (let item of cart) {

  // total price hisoblash
  totalPrice += item.price * item.quantity;

  // eng qimmat itemni topish
  if (item.price > mostExpensive.price) {
    mostExpensive = item;
  }
}

console.log("Total price:", totalPrice);

// discount
if (totalPrice > 100) {
  let discount = totalPrice * 0.10;
  totalPrice -= discount;
  console.log("Discount applied:", discount);
}

console.log("Final price:", totalPrice);

console.log("Most expensive item:", mostExpensive.name, "-", mostExpensive.price);

//challenge3
let products = [
  { id: 1, name: "Laptop", price: 800, stock: 5 },
  { id: 2, name: "Mouse", price: 20, stock: 50 },
  { id: 3, name: "Keyboard", price: 50, stock: 30 }
];

// ADD PRODUCT
function addProduct(product) {
  products.push(product);
}

// UPDATE STOCK
function updateStock(id, newStock) {
  for (let product of products) {
    if (product.id === id) {
      product.stock = newStock;
      return;
    }
  }
}

// DELETE PRODUCT
function deleteProduct(id) {
  products = products.filter(product => product.id !== id);
}

// FIND PRODUCT
function findProduct(name) {
  return products.find(product => product.name === name);
}

// ----------------------
// TESTING
// ----------------------

addProduct({ id: 4, name: "Monitor", price: 200, stock: 10 });

updateStock(2, 40);

deleteProduct(3);

console.log("Found product:", findProduct("Laptop"));

// MAP – product names
let productNames = products.map(product => product.name);
console.log("Product names:", productNames);

// FILTER – stock > 10
let availableProducts = products.filter(product => product.stock > 10);
console.log("Available products:", availableProducts);

// REDUCE – total inventory value
let totalValue = products.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);

console.log("Total inventory value:", totalValue);

console.log("Final product list:", products);

//challenge4
let posts = [
  {
    author: "Ali",
    likes: 120,
    shares: 30,
    comments: [
      { user: "Vali", message: "Great post!" },
      { user: "Sami", message: "Nice!" }
    ]
  },
  {
    author: "Vali",
    likes: 200,
    shares: 40,
    comments: [
      { user: "Ali", message: "Amazing!" },
      { user: "John", message: "Love this!" }
    ]
  },
  {
    author: "Sami",
    likes: 150,
    shares: 20,
    comments: [
      { user: "Ali", message: "Good job!" }
    ]
  }
];

// MOST LIKED POST
function mostLikedPost(posts) {
  let mostLiked = posts[0];

  for (let post of posts) {
    if (post.likes > mostLiked.likes) {
      mostLiked = post;
    }
  }

  return mostLiked;
}

// TOTAL ENGAGEMENT
function totalEngagement(posts) {
  let total = 0;

  for (let post of posts) {
    total += post.likes + post.shares + post.comments.length;
  }

  return total;
}

// RESULTS
console.log("Most liked post:", mostLikedPost(posts));
console.log("Total engagement:", totalEngagement(posts));

//challenge5
let teams = [
  {
    name: "Lions",
    wins: 10,
    losses: 2,
    points: 30,
    goalsScored: 25,
    goalsConceded: 10
  },
  {
    name: "Tigers",
    wins: 8,
    losses: 4,
    points: 24,
    goalsScored: 20,
    goalsConceded: 15
  },
  {
    name: "Eagles",
    wins: 12,
    losses: 1,
    points: 36,
    goalsScored: 30,
    goalsConceded: 8
  }
];

// SORT TEAMS BY RANKING
function sortTeamsByRanking(teams) {
  return teams.sort((a, b) => b.points - a.points);
}

// FIND BEST TEAM
function bestTeam(teams) {
  let best = teams[0];

  for (let team of teams) {
    if (team.points > best.points) {
      best = team;
    }
  }

  return best;
}

// GOAL DIFFERENCE
function goalDifference(team) {
  return team.goalsScored - team.goalsConceded;
}

// RESULTS
console.log("Sorted leaderboard:");
console.log(sortTeamsByRanking(teams));

console.log("Best team:");
console.log(bestTeam(teams));

// Goal difference for each team
for (let team of teams) {
  console.log(
    team.name + " goal difference: " + goalDifference(team)
  );
}

//challenge6
let inventory = [
  { itemName: "Laptop", category: "Electronics", stock: 15 },
  { itemName: "Mouse", category: "Electronics", stock: 5 },
  { itemName: "Chair", category: "Furniture", stock: 20 },
  { itemName: "Table", category: "Furniture", stock: 8 },
  { itemName: "Notebook", category: "Stationery", stock: 50 }
];

// TOTAL STOCK PER CATEGORY
function totalStockPerCategory(items) {
  let result = {};

  for (let item of items) {
    if (!result[item.category]) {
      result[item.category] = 0;
    }

    result[item.category] += item.stock;
  }

  return result;
}

// LOW STOCK ALERT
function lowStockAlert(items, limit = 10) {
  let lowStockItems = items.filter(item => item.stock < limit);

  console.log("Low stock items:");

  for (let item of lowStockItems) {
    console.log(item.itemName + " stock is low (" + item.stock + ")");
  }
}

// RESULTS
console.log("Total stock per category:");
console.log(totalStockPerCategory(inventory));

lowStockAlert(inventory);
