// console.log("5" + 5);        // "55"
// console.log("5" - 5);        // 0
// console.log("5" * "2");      // 10
// console.log("10" / 2);       // 5
// console.log(5 + true);       // 6
// console.log("10" - true);    // 9
// console.log("5" + true);     // "5true"
// console.log(5 + null);       // 5
// console.log(5 + undefined);  // NaN


// //  CHALLENGE 2
// // 1
// let num1 = Number("200") + 50;
// console.log(num1); // 250

// // 2
// let age = String(25) + " years old";
// console.log(age); // "25 years old"

// // 3
// console.log(Boolean("false")); // true (chunki bu oddiy string)

// // 4
// console.log("10" - true); // 9

// const celsiu = 25;

// let fahrenhet = (celsiu * 9 / 5) + 32;

// console.log("Celsius:", celsiu);
// console.log("Fahrenheit:", fahrenhet);

// //  CHALLENGE 3
// const celsius = 25;

// let fahrenheit = (celsius * 9 / 5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);



// //  CHALLENGE 4
// let budget = Number(prompt("Budjetni kiriting:"));

// let expense1 = Number(prompt("1-xarajat:"));
// let expense2 = Number(prompt("2-xarajat:"));
// let expense3 = Number(prompt("3-xarajat:"));

// let totalExpense = expense1 + expense2 + expense3;
// let remaining = budget - totalExpense;

// console.log("Qolgan pul:", remaining.toFixed(2));

// if (remaining < 0) {
//   console.log("⚠️ Siz budjetdan oshib ketdingiz!");
// }

// //  CHALLENGE 5 
// console.log(!!"false" == !!"true");   // true
// console.log(0 || "JavaScript");       // "JavaScript"
// console.log("" && 100);               // ""
// console.log(null ?? "Fallback");      // "Fallback"
// console.log(undefined ?? "Default");  // "Default"

// //  CHALLENGE 6
// let a = "42";
// let b = "3.14";
// let c = "hello";
// let d = false;
// let e = null;


// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum); // 45.14

// let number1 = Number(prompt("Son kiriting:"));

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     evenCount++;
//   } else {
//     oddCount++;
//   }
// }

// console.log("Juft sonlar:", evenCount);                                       
// console.log("Toq sonlar:", oddCount);  

// let number2 = Number(prompt("Sonni kiriting :"));
// let res = 0;

// while(number2 > 0){
//     let lastDigit = number2 % 10;
//     res = res * 10 + lastDigit;
//     number2 = Math.floor(number2 / 10);
// }
// console.log(res)

// let usrNum = Number(prompt("give a numm :"));
// let maxNum = 0;

// while (usrNum > 0){
//     let lastDigit = usrNum % 10;
//     if (maxNum < lastDigit){
//         maxNum = lastDigit;
//     }
//     usrNum = Math.floor(usrNum / 10);
// }
// console.log(maxNum)

// CHALLENGE 3

// let n = parseInt(prompt("Son kiriting:"));

// n = Math.abs(n);   // manfiy bo‘lsa musbatga o‘tkazamiz
// let largest = 0;

// if (n === 0) {
//     largest = 0;
// }

// while (n > 0) {
//     let digit = n % 10;   // oxirgi raqamni olish
    
//     if (digit > largest) {
//         largest = digit;  // eng kattasini yangilash
//     }
    
//     n = Math.floor(n / 10);  // oxirgi raqamni olib tashlash
// }

// console.log("Eng katta raqam:", largest);

function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Nurmuhammad"));
  

