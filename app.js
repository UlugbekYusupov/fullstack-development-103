// =========================== Challenge 1 ===========================

// function 1
// function greet(name) {
//     console.log(`Hello, ${name}`)
// }

// greet('Kamronbek')

// function 2
// let greet = function (name) {
//     console.log(`Hello, ${name}`)
// }

// greet('Kamronbek')

// function 3
// let greet = (name) => {
//     console.log(`Hello, ${name}`)
// }

// greet('Kamronbek')

// function 4
// (function(name){
//     console.log(`Hello, ${name}`)
// }('Kamronbek'))

// =========================== Challenge 2 =========================== 
// let count = 0;

// function isPrime(n) {
//     for(let i = 1; i < n; i++) {
//         if(n % i == 0) {
//             count += 1
//         }
//     }
// }


// isPrime(17)

// if(count <= 2) console.log('prime num')
//     else console.log('not prime')

// =========================== Challenge 3 =========================== 
// let count = 0
// let number = Number(prompt('Enter number: '))

// function countDigits(n) { 
//     while (n > 0) {
//     n = Math.floor(n / 10);
//     count += 1
// }
// }

// countDigits(number)
// console.log(count)

// =========================== Challenge 4 =========================== 
// function isPalindrome(n) {
//     let firstNumber = n
//     let reversedNumber = 0

//     while (n > 0) {
//         let digit = n % 10          
//         reversedNumber = reversedNumber * 10 + digit
//         n = Math.floor(n / 10)  
//     }

//     return firstNumber === reversedNumber
// }

// console.log(isPalindrome(121))
// console.log(isPalindrome(321))

// =========================== Challenge 5 =========================== 
// function isArmstrong(n) {
//     if (n < 0) return false

//     let number = n
//     let temp = n
//     let digits = 0
//     let sum = 0

//     while (temp > 0) {
//         digits++
//         temp = Math.floor(temp / 10)
//     }

//     temp = n

//     while (temp > 0) {
//         let digit = temp % 10
//         sum += digit ** digits
//         temp = Math.floor(temp / 10)
//     }

//     return sum === number
// }

// console.log(isArmstrong(153)) 
// console.log(isArmstrong(133)) 

// =========================== Challenge 6 =========================== 

// function createCounter(start) {
//     let count = start

//     return {
//         increment() {
//             count++
//         },
//         decrement() {
//             count--
//         },
//         getCount() {
//             return count
//         }
//     }
// }
// const counter = createCounter(5)

// counter.increment()
// counter.increment()
// counter.decrement()

// console.log(counter.getCount()) 

// =========================== Challenge 7 =========================== 

// function once(fn) {
//     let called = false

//     return function() {
//         if (!called) {
//             called = true
//             return fn()
//         }
//     }
// }

// function greet() {
//     console.log("Hello!")
// }

// const sayHello = once(greet)

// sayHello()
// sayHello() 
// sayHello() 

// =========================== Challenge 8 =========================== 

// function lazyAdder(a) {
//     return function(b) {
//         return a + b
//     }
// }

// const add5 = lazyAdder(5)

// console.log(add5(10)) 
// console.log(add5(20)) 