// Challange 1

// function first(arr, n) {  
//   if (n === undefined) {
//     return arr[0];
//   }
  
//   if (n < 0) {
//     return [];
//   }
  
//   return arr.slice(0, n);
// }

// console.log(first([7, 9, 0, -2]));      
// console.log(first([], 3));              
// console.log(first([7, 9, 0, -2], 3));   
// console.log(first([7, 9, 0, -2], 6));   
// console.log(first([7, 9, 0, -2], -3));  

// // Challange 2

// function last(num , n){
//     if (n=== undefined) {
//         return num[0]
//     }

//     if (n<0) {
//         return [];
//     }

//     return num.slice(-n)
// }

// console.log(last([7, 9, 0, -2])); 
// console.log(last([7, 9, 0, -2],3)); 
// console.log(last([7, 9, 0, -2],6)); 

// // challange 3

// MyColor = ["red" , "green" , "white" , "black"]

// console.log(MyColor.join());

// // challange 4

// numbers = [2, 5, 8, 9]

// console.log(numbers.join("-"))

// // challange 5

// const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort()
// console.log(arr1);

// // challange 6

//  const mostF=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// const frequent = mostF.find((element) => element = "a")
// console.log(frequent);
 
// // challange 7

// function swapCase(str) {
//   let result = '';

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


// console.log(swapCase('The Quick Brown Fox')); 

// // challange 8

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// let o = ["th", "st", "nd", "rd"];

// color.map((currentColor, index) => {
//   let choiceNum = index + 1; 
  

//   let suffix = o[choiceNum] || o[0]; 

//   console.log(`${choiceNum}${suffix} choice is ${currentColor}.`);
// });


