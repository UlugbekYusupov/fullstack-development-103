// =========================== Challenge 1 ===========================

// let array = [[],1,2,3,4]

// function first(arr) {
//     return arr[0]
// }

// console.log(first(array))

// =========================== Challenge 2 ===========================

// let array = [1,2,3,4]

// function lastElement(arr) {
//     return arr[arr.length-1]
// }

// console.log(lastElement(array))

// =========================== Challenge 3 ===========================

// let myColors = ["Red", "Green", "Blue", "Yellow"]
// let convertedColors = ""
// myColors.map((color) => {
//     convertedColors += " " +  color + ","
// })

// console.log(convertedColors)

// =========================== Challenge 4 ===========================

// let number = prompt('Enter a number: ')
// let numbersWithDashes = " "

// for(let i = 0; i < number.length; i++) {
//     numbersWithDashes += number[i] + "-"
// }

// numbersWithDashes = numbersWithDashes.slice(0, -1)
// console.log(numbersWithDashes)

// =========================== Challenge 5 ===========================

// let numbers = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// console.log(numbers.sort((a, b) => a - b))

// =========================== Challenge 6 ===========================

// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// let counter = {};
// let maxCount = 0;
// let mostFrequent;

// for (let item of arr1) {
//     counter[item] = (counter[item] || 0) + 1;

//     if (counter[item] > maxCount) {
//         maxCount = counter[item];
//         mostFrequent = item;
//     }
// }

// console.log(`${mostFrequent} ( ${maxCount} times )`);

// =========================== Challenge 7 ===========================

// let str = prompt("Enter a string:");
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         result += str[i].toLowerCase();
//     } else {
//         result += str[i].toUpperCase();
//     }
// }

// console.log(result);

// =========================== Challenge 8 ===========================

// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let o = ["th","st","nd","rd"];

// for (let i = 0; i < color.length; i++) {

//     let ordinal;

//     if (i + 1 == 1) ordinal = o[1];
//     else if (i + 1 == 2) ordinal = o[2];
//     else if (i + 1 == 3) ordinal = o[3];
//     else ordinal = o[0];

//     console.log(`${i+1}${ordinal} choice is ${color[i]}.`);
// }

// =========================== Challenge 9 ===========================

// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];

// let result = [];
// let maxLength = Math.max(array1.length, array2.length);

// for (let i = 0; i < maxLength; i++) {
//     result.push((array1[i] || 0) + (array2[i] || 0));
// }

// console.log(result);
