console.log("5"+5);
console.log("5"-5);
console.log("5"*"2");
console.log("5"+5);
console.log("10"/2);
console.log(5 + true);
console.log("10"-true);
console.log("5"+true);
console.log("5"+null);
console.log("5"+undefined); 
// 
console.log(+("200")+50);
console.log("25"+ "years old");
console.log("10" - true);
console.log(Boolean("false"));
console.log("10" - true);
console.log((25 * 9/5) + 32);
console.log(1000 - 200 - 150 - 100);
// 
let result =
    prompt("Enter budget:") -
    prompt("Expense 1:") -
    prompt("Expense 2:") -
    prompt("Expense 3:");

if (result < 0) {
    console.log("You overspent!");
} else {
    console.log("Money left:", result);
}
// 
let n = 10

let even = 0
let odd = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        even++
    } else {
        odd++
    }
}







