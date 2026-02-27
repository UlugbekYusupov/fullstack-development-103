// // Challenge – 1
// // The program should count how many even and odd numbers exist between 1 and a given number.
// // Print the count of even and odd numbers separately.
// // Use the modulus (%) operator to check if a number is even or odd.

// let num = 391
// let evenNum = 0
// let oddNum = 0


// while (num > 0) {
//     if (num % 2 == 0) {
//         ++evenNum
//     } else {
//         ++oddNum
//     }
//     num -= 1
// }

// console.log('even numbers:',evenNum, 'odd numbers:',oddNum);


// // Challenge – 2
// // Take a number as input and reverse it using only operators, loops, and if conditions.
// // Example: 1234 → 4321
// // Use the modulus (%) operator to extract the last digit.
// // Use division (/) to remove the last digit.

// let number1 = 1234
// let reversed = 0

// while (number > 0){
//     let lastDigit = number % 10
//     reversed = reversed * 10 + lastDigit
//     number = Math.floor(number / 10)
// }

// console.log(reversed);



// // Challenge – 3
// // Take a number as input and find the largest digit using only operators, loops, and if conditions.
// // Extract digits using the modulus (%) operator.
// // Compare each digit with the current largest digit using if conditions.
// // Remove the last digit using division (/) inside a loop.

// let usrNum = 1234967
// let maxDigit = 0

// while (usrNum > 0) {
//     let expression = usrNum % 10
//     maxDigit = expression % 10 > maxDigit ? expression : maxDigit
//     usrNum = Math.floor(usrNum / 10)
// }


// console.log(maxDigit);

// // Challenge – 4
// // Take a number as input and find the sum of its digits using only operators, loops, and if conditions.
// // Use the modulus (%) operator to extract the last digit.
// // Use addition (+) to sum up the digits.
// // Remove the last digit using division (/) inside a loop.

// let number = 275
// let sum = 0

// while (number > 0) {
//     let lastDigit2 = number % 10
//     sum += lastDigit2
//     number = Math.floor(number / 10)
// }

// console.log(sum);

// // Challenge – 5
// // Take a number as input and count how many digits it has using only operators, loops, and if conditions.
// // Use division (/) inside a loop to remove digits one by one.
// // Use a counter variable to keep track of the number of digits

// let digit = 253267
// let index = 0

// while (digit > 0) {
//     index += 1
//     digit = Math.floor(digit / 10)
// }

// console.log(index);
