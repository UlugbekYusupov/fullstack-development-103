//1

let students = [
  { name: "Ali", scores: [60, 70, 80] },
  { name: "Vali", scores: [40, 45, 50] },
  { name: "Sami", scores: [90, 85, 95] }
];

let result = students.map(function(student){

  let sum = student.scores.reduce(function(total, score){
    return total + score;
  },0);

  let avg = sum / student.scores.length;

  return {
    name: student.name,
    average: avg,
    passed: avg >= 50
  };

});

console.log(result);

let topStudent = result.reduce(function(best, student){
  return student.average > best.average ? student : best;
});

console.log("Top student:", topStudent);

//2

let cart = [
  { id: 1, name: "Laptop", price: 800, quantity: 1 },
  { id: 2, name: "Mouse", price: 20, quantity: 2 },
  { id: 3, name: "Keyboard", price: 50, quantity: 1 }
];


let totalPrice = cart.reduce(function(total, item){   // Total price
  return total + (item.price * item.quantity);
},0);

console.log("Total price:", totalPrice);


let finalPrice = totalPrice;    // Discount

if(totalPrice > 100){
  finalPrice = totalPrice * 0.9;
}

console.log("Final price after discount:", finalPrice);


let expensiveItem = cart.reduce(function(max, item){    // most expensive
  return item.price > max.price ? item : max;
});

console.log("Most expensive item:", expensiveItem);


// 3


let products = [
  { id: 1, name: "Laptop", price: 1200, stock: 5 },  // Product Inventory
  { id: 2, name: "Mouse", price: 25, stock: 50 },
  { id: 3, name: "Keyboard", price: 75, stock: 20 }
];


function addProduct(product){   // ADD PRODUCT
  products.push(product);
}


function updateStock(id, newStock){  // UPDATE STOCK
  products = products.map(function(product){
    if(product.id === id){
      return {...product, stock: newStock}
    }
    return product
  })
}


function deleteProduct(id){     // DELETE PRODUCT
  products = products.filter(function(product){
    return product.id !== id
  })
}


function findProduct(name){     // FIND PRODUCT 
  return products.find(function(product){
    return product.name === name
  })
}


//

addProduct({id:4, name:"Monitor", price:300, stock:10})

updateStock(2,100)

deleteProduct(3)

console.log(findProduct("Laptop"))

console.log(products)


//4


let posts = [   // POSTS ARRAY
  {
    author: "Ali",
    likes: 120,
    shares: 30,
    comments: [
      { user: "Vali", message: "Great post!" },
      { user: "Hasan", message: "Nice!" }
    ]
  },
  {
    author: "Vali",
    likes: 250,
    shares: 50,
    comments: [
      { user: "Ali", message: "Amazing!" }
    ]
  },
  {
    author: "Hasan",
    likes: 180,
    shares: 40,
    comments: [
      { user: "Ali", message: "Cool!" },
      { user: "Vali", message: "Good job!" },
      { user: "Olim", message: "Loved it!" }
    ]
  }
];



function mostLikedPost(posts){      // MOST LIKED POST

  let mostLiked = posts[0];

  for(let i = 1; i < posts.length; i++){

    if(posts[i].likes > mostLiked.likes){
      mostLiked = posts[i];
    }

  }

  return mostLiked;
}



function totalEngagement(posts){    // TOTAL ENGAGEMENT

  let total = 0;

  for(let i = 0; i < posts.length; i++){

    let engagement =
      posts[i].likes +
      posts[i].shares +
      posts[i].comments.length;

    total += engagement;

  }

  return total;
}


console.log("Most liked post:", mostLikedPost(posts))

console.log("Total engagement:", totalEngagement(posts))

//5


let teams = [
  { name: "Barcelona", wins: 10, losses: 2, points: 30, goalsScored: 25, goalsConceded: 10 },       // TEAMS ARRAY
  { name: "Real Madrid", wins: 9, losses: 3, points: 27, goalsScored: 22, goalsConceded: 12 },
  { name: "Manchester City", wins: 11, losses: 1, points: 33, goalsScored: 28, goalsConceded: 9 },
  { name: "Bayern Munich", wins: 8, losses: 4, points: 24, goalsScored: 20, goalsConceded: 15 }
];



function sortTeamsByRanking(teams){     // SORT TEAMS BY RANKING (POINTS)

  return teams.sort(function(a,b){
    return b.points - a.points
  })

}



function bestTeam(teams){       // FIND BEST TEAM

  let best = teams[0]

  for(let i = 1; i < teams.length; i++){

    if(teams[i].points > best.points){
      best = teams[i]
    }

  }

  return best
}




function goalDifference(team){      // GOAL DIFFERENCE FUNCTION

  return team.goalsScored - team.goalsConceded

}


let ranking = sortTeamsByRanking(teams)

console.log("Leaderboard:", ranking)

console.log("Best Team:", bestTeam(teams))

console.log("Goal Difference (City):", goalDifference(teams[2]))


//6


let inventory = [   
  { itemName: "Laptop", category: "Electronics", stock: 15 },
  { itemName: "Phone", category: "Electronics", stock: 5 },
  { itemName: "T-Shirt", category: "Clothing", stock: 30 },
  { itemName: "Jeans", category: "Clothing", stock: 8 },
  { itemName: "Apple", category: "Food", stock: 50 },
  { itemName: "Milk", category: "Food", stock: 4 }
];



function totalStockPerCategory(items){      // TOTAL STOCK PER CATEGORY

  let result = {};

  for(let i = 0; i < items.length; i++){

    let category = items[i].category;

    if(result[category]){
      result[category] += items[i].stock;
    }else{
      result[category] = items[i].stock;
    }

  }

  return result;
}



function lowStockAlert(items){      // LOW STOCK ALERT SYSTEM

  let lowStockItems = [];

  for(let i = 0; i < items.length; i++){

    if(items[i].stock < 10){
      lowStockItems.push(items[i]);
    }

  }

  return lowStockItems;
}


console.log("Total Stock Per Category:")
console.log(totalStockPerCategory(inventory))

console.log("Low Stock Items:")
console.log(lowStockAlert(inventory))

