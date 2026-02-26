// task-1
// let number = prompt("Enter a number")
// let total_odd = 0
// let total_even = 0
// for (let i = 1; i < number; i++) {
//     if (i % 2 === 0) {
//         total_even++
//     }else{
//         total_odd++
//     }
// }
// console.log("Number of the total even number:",total_even);
// console.log("Number of the total odd number:",total_odd);


// task-2
// let number = Number(prompt(("Enter a number")));
// let res = 0;
// while (number > 0) {
//     let lastdigit = number % 10
//     res = res*10+lastdigit
//     number = Math.floor(number/10)
// }

// console.log(res);



// task-3
// let number = Number(prompt('enter a nuber'))
// let largestDigit = 0;

// while (number > 0) {
//     let digit = number % 10; 

//     if (digit > largestDigit) {
//         largestDigit = digit;
//     }

//     number = Math.floor(number / 10);
// }

// console.log("Eng katta raqam:", largestDigit);


// task-4
// let sum = 0;         

// while (number > 0) {
//     let digit = number % 10;  
//     sum += digit;      
//     number = Math.floor(number / 10); 
// }

// console.log("Raqamlar yig‘indisi:", sum);


// task-5
// let number = 0;
// let count = 0;

// if (number === 0) {
//     count = 1;
// } else {
//     while (number > 0) {
//         number = Math.floor(number / 10);
//         count++;
//     }
// }

// console.log("Raqamlar soni:", count);