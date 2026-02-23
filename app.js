//challenge1
console.log("5" + 5); //55
console.log("5" - 5); //0
console.log("5" * 2); //10
console.log("10" / 2); //5
console.log(5 - true); //4
console.log("10" + true); //10true
console.log("5" + true); //5true
console.log(5 - null); //5
console.log(5 - undefined); //NaN
//challenge2
//2.1
let str = "200";
let num = Number(str);
console.log(num + 50); 
//2.2
let age = 25;
let st = String(age);
console.log(st + " years old");
//2.3
let a = "false";
console.log(Boolean(a));
//2.4
console.log("10" - true);// true = 1 and false = 0 
//challenge3
//3.1
const t = 20;
console.log(t + " Celsius");
//3.2
const F = (t*9/5)+32;
console.log(F + " F");
//3.3
console.log(F , t);
//3.4
//t = 30 //Uncaught TypeError: Assignment to constant variable.
//challenge4
//4.1
let total = Number(prompt("Enter your total budget:"));
let expense1 = Number(prompt("Enter expense 1:"));
let expense2 = Number(prompt("Enter expense 2:"));
let expense3 = Number(prompt("Enter expense 3:"));
let remaining = total - (expense1 + expense2 + expense3);
if (remaining < 0) {
    console.log("Warning: You have overspent!");
}
console.log("Remaining budget:", remaining.toFixed(2));

