//  Challenge 1
// let number = Number(prompt("Enter the number: "))
// let evenCounter = 0;
// let oddCounter = 0

// for(let i = 1; i < number; i++) {
//     if (i % 2 == 0) {
//         evenCounter++
//     } 
//     if (i % 2) {
//         oddCounter++
//     }
// }

// console.log(evenCounter)
// console.log(oddCounter)

// Challenge 2 
// let number = Number(prompt("Enter the number: "))

// let result = 0
// while (number > 0) {
//     let lastNum = number % 10
//     result = result * 10 + lastNum
//     number = Math.floor(number / 10)
// }

// console.log(result)



// Challenge 3
// let number = Number(prompt("Enter the number: "))
// let largestNumber = 0

// while(number > 0) {
//     let lastNum = number % 10 // 1234 -> 4
//     if (lastNum > largestNumber) largestNumber = lastNum

//     number = Math.floor(number / 10)
// }

// console.log(largestNumber)

// Challenge 4
// let number = Number(prompt("Enter the number: "))
// let sum = 0;

// while(number > 0) {
//     let lastNum = number % 10
//     sum += lastNum
//     number = Math.floor(number / 10)
// }

// console.log(sum)


// Challenge 5
let number = Number(prompt("Enter the number: "))
let count = 0

while (number > 0) {
    number = Math.floor(number / 10);
    count += 1
}

console.log(count)