// Challenge 1 - done 

// Challenge 2 
let number = "200" * 1 // Converting 200 to number using *
console.log(number + 50)

let age = 25
let result = 25 + " years old"
console.log(result, "| Type: " + typeof result)

if ('false' == true) console.log(true) // Program tries to convert false(string) to Number and it returns NaN and true also will be converted to Number which is 1. If we check Nan == 1 it gives us false so thats why console.log showing false
    else console.log(false) 

console.log("10" - true) // Program converts 10 to Number cuz we r using - and true equals to 1 false to 0. Now simple math 10 - 1 = 9

//  ============== Challenge 3 ============== 
const temp = 10
// temp = 30 // This returns TypeError because when we use CONST we cant reasign it.
const fahr = (temp * 9/5) + 32
console.log(fahr)

// Secon method
const tempInput = Number(prompt('Enter the celcius: '))
const fahr2 = (tempInput * 9/5) + 32
console.log(fahr2)

//  ============== Challenge 4 ============== 
let totalBudget = Number(prompt('Enter your total budget: ')) // 100

let firstExpense = Number(prompt('Enter first amount:'))
let secondExpense = Number(prompt('Enter second amount:'))
let thirdExpense = Number(prompt('Enter third amount:'))

let totalExpense = firstExpense + secondExpense + thirdExpense 

if (totalExpense > totalBudget) alert('Error! You have overspent.') 
    else alert(`Success! Current budget: ${totalBudget - (firstExpense + secondExpense + thirdExpense)}`)

