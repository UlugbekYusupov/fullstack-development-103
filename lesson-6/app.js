// task-1
// function task1(arr) {
//     console.log(arr[0]);
// }

// task1([1, 2, 3, 4, 5]);

// task-2
// function task2(arr) {
//     console.log(arr[arr.length - 1]);
// }

// task2([1, 2, 3, 4, 5]);

// // task-3
// function task3(arr) {
//     console.log(arr.join(","));
// }

// task3([1, 2, 3, 4, 5]); 

// task-4
// function task4(number) {
//     return number.
//         toString()
//         .split("")
//         .join("-");
// }

// let number = Number(prompt("Enter a number"));
// console.log(task4(number));

// task-5
// function task5(arr) {
//     return arr.sort((a, b) => a - b);
// }

// console.log(task5([-5, 3, 8, 1, 2]));


// task-6
// function mostFrequent(arr) {
//   let maxCount = 0;
//   let mostItem;

//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }

//     if (count > maxCount) {
//       maxCount = count;
//       mostItem = arr[i];
//     }
//   }

//   return mostItem + " ( " + maxCount + " times )";
// }

// let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// console.log(mostFrequent(arr1));

// task-7
// function swapCase(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === char.toUpperCase()) {
//       result += char.toLowerCase();
//     } else {
//       result += char.toUpperCase();
//     }
//   }

//   return result;
// }

// console.log(swapCase("The Quick Brown Fox"));


// task-8
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let o = ["th", "st", "nd", "rd"];

// for (let i = 0; i < color.length; i++) {

//   let ordinal;

//   if (i === 0) {
//     ordinal = i + 1 + o[1];
//   } else if (i === 1) {
//     ordinal = i + 1 + o[2];
//   } else if (i === 2) {
//     ordinal = i + 1 + o[3];
//   } else {
//     ordinal = i + 1 + o[0];
//   }

//   console.log(ordinal + " choice is " + color[i]);
// }


// task-9
// let array1 = [1, 0, 2, 3, 4];
// let array2 = [3, 5, 6, 7, 8, 13];

// let result = [];

// for (let i = 0; i < array2.length; i++) {

//   let num1 = array1[i];
//   let num2 = array2[i];

//   if (num1 === undefined) {
//     num1 = 0;
//   }

//   if (num2 === undefined) {
//     num2 = 0;
//   }

//   result.push(num1 + num2);
// }

// console.log(result);