
// // Challenge 2
let num1 = '200'
let integer = parseInt(num) + 50

let age = 20
let strAge = toString(age)
let word = `${strAge} years old`

let bool = 'false'
let check = Boolean(bool)

console.log('10' - true)

// // Challenge 3
const temp = 30
const farenheit = (temp * 9/5) + 32
console.log(temp, farenheit);

// // Challenge 4
let totalBudget = 100

let exp1 = Number(prompt('expense1: '))
let exp2 = Number(prompt('expense2: '))
let exp3 = Number(prompt('expense3: '))

totalBudget -= exp1
totalBudget -= exp2
totalBudget -= exp3

if (totalBudgetm < 0) {
    alert('U have overspent');
} else {
    console.log(`Your balance: $${parseFloat(totalBudget) }`);
}

console.log(parseFloat(totalBudget));


// // Challenge 5 
console.log(!!"false" == !!"true");
console.log(0 || "JavaScript");
console.log(" "&& 100);
console.log(null ?? "Fallback");
console.log(undefined ?? "Default Value");

// // // Challenge 6

let a = "42";
let b = "3.14";
let c = "hello";
let d = false;
let e = null;

let sum1 = Number(a + b + c.length + Number(d + e));

console.log(sum);
