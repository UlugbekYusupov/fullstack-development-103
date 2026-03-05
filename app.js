// // console.log("5"+ 5);
// // console.log("5"- 5);
// // console.log("5" * "2");
// // console.log("10"/ 2);
// // console.log(5 + true);
// // console.log("10"-true);
// // console.log(5+null);
// // console.log(5+null);
// // console.log(5+ undefined);
// // console.log("Salom")

// const celsius = 25
// const fahrenheit = ( celsius * 9/5) + 32;
// console.log('Celsius' , celsius);
// console.log("Fahrenheit", fahrenheit)

// budget = Number(prompt("enter your total budget:"));
// let expense1= Number(prompt("enter expense 1:"));
// let expense2= Number(prompt("enter expense 2:"));
// let expense3= Number(prompt("enter expense 3:"));
// let totalExpenses = expense1 + expense2 + expense3;
// let remaining = budget - totalExpenses;
// console.log("Total Budget:", budget.toFixed(2));
// console.log("Total Expenses:", totalExpenses.toFixed(2));
// console.log("Remaining Money:", remaining.toFixed(2));
// if (remaining < 0) {
//     console.log("Warning: You have overspent!");
// } else {
//     console.log("You are within your budget.");
// }

// let a = "42";
// let b = "3.14";
// let c = "hello"; 
// let d = false;
// let e = null;


// let sum = Number(a) + Number(b) + Number(d) + Number(e);

// console.log(sum); 

// let limit = 10;
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= limit; i++) {
//     if (i % 2 === 0) {
//         evenCount++; 
//     } else {
//         oddCount++; 
//     }
// }

// console.log("Evens:", evenCount);
// console.log("Odds:", oddCount);

// let num = 1234;
// let reversed = 0;

// while (num > 0) {
//     let lastDigit = num % 10;        
//     reversed = (reversed * 10) + lastDigit; 
//     num = Math.floor(num / 10);
// }

// console.log("Reversed:", reversed);

// let num1 = 48291;
// let largest = 0;

// while (num1 > 0) {
//     let currentDigit = num1 % 10; 
    
//     if (currentDigit > largest) {   
//         largest = currentDigit;
//     }
    
//     num1 = Math.floor(num1 / 10);
// }

// console.log("Largest digit:", largest);


// let num2 = 543;
// let sum2 = 0;

// while (num2 > 0) {
//     let lastDigit = num2 % 10;       
//     sum2 += lastDigit;               
//     num2 = Math.floor(num2 / 10);      
// }

// console.log("Sum of digits:", sum);

// let num3 = 98765;
// let count = 0; 
// while (num3 > 0) {
//     num3 = Math.floor(num3 / 10);     
//     count++; 
// }

// console.log("Number of digits:", count);
                                // 1
// let num1 = 10;
// let num2 = 25;
// if (num1>num2){
//     alert("The largest number is "+ num1);
// } else if (num2 > num1){
//     alert("The largest number is "+ num2);
// } else {
//     alert("Both  numbers are equal");
// }

//                                 // 2
// let a = 3
// let b = -7
// let c = 2
// let product = a * b * c
// if (product > 0){
//     alert("The sign is +");
// } else if (product < 0){
//     alert("The sign is -")
// } else{
//     alert("The sign is 0")
// } 
//                                 // 3
// let a1 = 0 
// let b1 = -1
// let c1 = 4 
// let product1 = [c1, b1, a1]
// alert(product1)
//                                 // 4
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd");
//     }
// }
//                                  // 5
// for (let i = 1; i <= 100; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     } 
//     else if (i % 5 === 0) {
//         console.log("Buzz");
//     } 
//     else {
//         console.log(i);
//     }

// }

//                                 // 6

// for (let num = 100; num <= 999; num++) {

//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let ones = num % 10;

//     let sum = (hundreds ** 3) + (tens ** 3) + (ones ** 3);

//     if (sum === num) {
//         console.log(num);
//     }
// }
Challenge1

function FirstElements(array, n = 1) {
    return array.slice(0, n);
}

const arr = [1,2,3,4,5];

console.log(FirstElements(arr));
console.log(FirstElements(arr,3));
console.log(FirstElements(arr,10));

Challnge2

function SecondElements(array, n = 1) {
    return array.slice(-n);
}

const arr = [1,2,3,4,5];

console.log(SecondElements(arr));
console.log(SecondElements(arr,3));

challenge3

const fruits = ["apple","banana","orange","grape"];
const result1 = fruits.join();
console.log(result1);

const result2 = fruits.join(" - ");
console.log(result2);

const result3 = fruits.join("");
console.log(result3);

function joinarr(array, separator = ",") {
    return array.join(separator)
}

console.log(joinarr(fruits));
console.log(joinarr(fruits, " "));
console.log(joinarr(fruits, " | "));

challenge4

const input = 25468;
const result = insertdash(input);
console.log(result);

function insertdash(input) {
    const str = input.toString();
    return str.split("").join("-")
}

console.log(insertdash(24568));


challenge5

var arr1 = [-3,8,7,6,5,-4,3,2,1];

var sortedarr = arr1.sort(function(a,b) {
    return a - b;
})

console.log(sortedarr);
challenge6

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function findmostfrequent(arr) {
    var frequency = {};
    var maxcount = 0;
    var mostfrequentitem;

    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        frequency[item] = (frequency[item]  0) + 1

    if (frequency[item] > maxcount) {
        maxcount = frequency[item];
        mostfrequentitem = item;
    }   
    }

    return {
        item: mostfrequentitem,
        count: maxcount
    };
}

var result = findmostfrequent(arr1);

console.log(result.item + "(" + result.count + "times)");

challenge7

function swapCase(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == c.toUpperCase()) {
      result += c.toLowerCase();
    } else {
      result += c.toUpperCase();
    }
  }
  return result;
}

console.log(swapCase("The Quick Brown Fox"));

challenge8

let color = ["blue","green","red","orange","violet","indigo","yellow"];
let suffix = ["th","st","nd","rd"];

color.map((item, index) => {
  let num = index + 1;
  if (num === 1) {
    console.log(num + suffix[1] + " " + item);
  } else if (num === 2) {
    console.log(num + suffix[2] + " " + item);
  } else if (num === 3) {
    console.log(num + suffix[3] + " " + item);
  } else {
    console.log(num + suffix[0] + " " + item);
  }
});

challenge9

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];
let result = [];

let maxLength = Math.max(arr1.length, arr2.length);

for (let i = 0; i < maxLength; i++) {
  let val1 = arr1[i]  0;  
  let val2 = arr2[i] || 0;  
  result[i] = val1 + val2;
}
