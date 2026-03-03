// function first() {
//     console.log("One");
//     second()
// }

// function second() {
//     console.log("Two");
//     third()
// }

// function third() {
//     console.log("Three");
    
// }
// first()


// console.log(my_var);
// console.log(k);
// console.log(m);


// const k = 90
// let m = 1000
// var my_var = 100
// console.log(m);
// console.log(my_var);


// sync
// const fs = require("fs");
// const filepath = 'text.txt';

// // Reads the file in a synchronous and blocking the way 
// const data = fs.readFileSync(filepath,{encoding:'utf8'});

// // Prints the content of file 
// console.log(data);

// // this section calculates the dum of numbers fromo 1-10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// // Prints the sum
// console.log("Sum:",sum);




// async
// const fs = require("fs");
// const filepath = 'text.txt';

// // Reads the file in a asynchronous and blocking the way 
// fs.readFile(filepath,{encoding:'utf8'},(err,data)=>{
//     console.log(data);
// });

// // Prints the content of file 

// // this section calculates the dum of numbers fromo 1-10
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }

// // Prints the sum
// console.log("Sum:",sum);










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