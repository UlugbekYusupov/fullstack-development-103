// Challenge 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 2);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// Challenge 2
// 1-task
// const value = Number("200");
// const result = value + 50;
// console.log(result);

// 2-task
// const age = String(25)
// console.log("He is" + " " + age + " years old")

// 3-task
// console.log(Boolean("false"))

// 4-task
// console.log("10" - true) 
// Result is 9 because "-" operator forces the string to become a number and true is equal to 1, while false is equal to 0.

// Challenge 3
// 1-task
// const temprature = 17
// console.log(temprature)

// 2-task
// formula: F=(C×9/5)+32
// let f = (temprature * 9 / 5) + 32
// console.log("Fahrenheit version: " + f)

// 3-task
// console.log("Celcius: " + temprature + " " + "Fahrenheit: " + f)

// 4-task
// temprature = 18
// console.log(temprature)
// Uncaught TypeError: Assignment to constant variable.

// 5-task
// const TempratureByUserValue = prompt("Give a value to Celsius: ")
// console.log(TempratureByUserValue)

// Challenge 4
// let budget = Number(prompt("Enter your budget: "))

// let Expense1 = Number(prompt("How much is the expense? (1-expense)"))
// let Expense2 = Number(prompt("How much is the expense? (2-expense)"))
// let Expense3 = Number(prompt("How much is the expense? (3-expense)"))

// let AllExpenses = [Expense1,Expense2,Expense3]

// function subtract() {
//     for (let i = 0; i < AllExpenses.length; i++) {
//         if (AllExpenses[i] > budget) {
//             console.log("You are overspending!")
//         }
//         else if (i < budget) {
//             budget -= AllExpenses[i]
//         }
//     }
//     console.log("Balance: " + budget) 
// }
// subtract()

// Lecture 3
// Challenge 1
// let UserInput = Number(prompt("Enter a number: "))

// let EvenCounter = 0
// let OddCounter = 0

// function EvenOdd() {
//     if (i <= 0) {
//             return "Please enter another number!"
//         }

//     for (let i = 1; i <= UserInput; i++) {
//         if (i % 2 == 0) {
//             EvenCounter += 1
//         }
//         else {
//             OddCounter += 1
//         }
//     }
    
//     console.log("Amount of Even numbers: " + EvenCounter)
//     console.log("Amount of Odd numbers: " + OddCounter)
// }

// EvenOdd()

// Challenge 2
// let UserInput = Number(prompt("Enter a number: "))
// let ReverseNumberCounter = ""
// function ReverseNumbers() {
//     if (UserInput <= 0) {
//         return console.log("Enter a valid number!")
//     }
//     while (UserInput > 0) {
//         let digit = UserInput % 10
//         ReverseNumberCounter += digit
//         UserInput = Math.floor(UserInput / 10)
//     }

//     ReverseNumberCounter = Number(ReverseNumberCounter)
//     console.log("Reversed digits: " + ReverseNumberCounter)
// }

// ReverseNumbers()

// Challenge 3
// let UserInput = Number(prompt("Enter a number: "))
// let digits = []
// let largest = 0

// function LargestDigit() {
//     if (UserInput <= 0) {
//         return console.log("Enter a valid number!")
//     }

//     while (UserInput > 0) {
//         digits.push(UserInput % 10)
//         UserInput = Math.floor(UserInput / 10)
//     }
    
//     for (let i = 0; i < digits.length; i++) {
//         if (digits[i] > largest) {
//             largest = digits[i]
//         }
//     }

//     console.log("Largest digit: " + largest)
// }

// LargestDigit()

// Challenge 4
// let UserInput = Number(prompt("Enter a number: "))
// let digits = []
// let AllDigits = 0

// function SumDigits() {
//     if (UserInput <= 0) {
//         return console.log("Enter a valid number!")
//     }

//     while (UserInput > 0) {
//         digits.push(UserInput % 10)
//         UserInput = Math.floor(UserInput / 10)
//     }

//     for (let i = 0; i < digits.length; i++) {
//         AllDigits += digits[i]
//     }

//     console.log("Sum of all digits: " + AllDigits)
// }

// SumDigits()

// Challenge 5
// let UserInput = Number(prompt("Enter a number: "))
// let countdown = 0
// let digits = []

// function counter() {
//     if (UserInput <= 0) {
//         return console.log("Enter a valid number!")
//     }

//     while (UserInput > 0) {
//         digits.push(UserInput % 10)
//         UserInput = Math.floor(UserInput / 10)
//     }

//     for (let i = 0; i < digits.length; i++) {
//         countdown += 1
//     }

//     console.log("Amount of digits: " + countdown)
// }

// counter()

// JavaScript 7h 45m YouTube video ------------

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// console.log(count)

// let dogRatioAge = 7
// let humanAge = 18
// let HumaninDogAge = dogRatioAge * humanAge
// console.log(HumaninDogAge)

// let countEL = document.getElementById("count-el")
// let saveEL = document.getElementById("save-el")
// let resetBTN = document.getElementById("reset-btn")
// console.log(countEL)

// let countdown = 0
// function increment() {
//     countdown += 1
//     countEL.textContent = countdown
// }

// function save() {
//     let countString = countdown + " - "
//     saveEL.textContent += countString
//     countEL.textContent = 0
//     countdown = 0
//     console.log(countdown)
// }

// const MyName = "Jovohir"
// const MyLastName = "Bahodirov"
// const FullName = MyName + " " + MyLastName
// console.log(FullName)

// let MyName = "Jovohir"
// let greeting = "Hi there"
// FullGreeting = greeting + "," + " " + MyName + "!" 
// console.log(FullGreeting)

// let MyPoints = 3
// function Add3Points() {
//     MyPoints += 3
//     console.log(MyPoints)
// }

// function Remove1Point() {
//     MyPoints -= 1
//     console.log(MyPoints)   
// }

// Add3Points()
// Add3Points()
// Add3Points()
// Remove1Point()
    
// let Myname = "Jovohir"
// let greeting = "Hello"
// let myGreeting = greeting + " " + Myname
// console.log(myGreeting)

// let welcomeEL = document.getElementById("welcome-el")
// let MyName = "Jovohir"
// let greeting = "Hello " + MyName
// welcomeEL.innerText = greeting
// console.log(greeting)

// let ErrorText = document.getElementById("error")
// console.log(ErrorText)
// function ShowError() {
//     ErrorText.textContent = "Something went wrong!"
// }

// number1 = 15
// number2 = 5
// document.getElementById("num1").textContent = number1
// document.getElementById("num2").textContent = number2
// document.getElementById("result")

// function add() {
//     FinalResult = number1 + number2
//     result.textContent = "Sum: " + FinalResult
// }

// function subtract() {
//     FinalResult = number1 - number2
//     result.textContent = "Subtracted: " + FinalResult
// }

// function divide() {
//     FinalResult = number1 / number2
//     result.textContent = "Divided: " + FinalResult
// }

// function multiply() {
//     FinalResult = number1 * number2
//     result.textContent = "Multiplied: " + FinalResult
// }

// let FirstCard = 6
// let SecondCard = 8
// let sum = FirstCard + SecondCard

// if (sum < 21) {
//     console.log("Do you wanna draw a new card?")
// } else if (sum === 21) {
//     console.log("You have won!")
// } else {
//     console.log("You have lost hahahahaha")
// }

// let PersonAge = 15
// if (PersonAge > 21) {
//     console.log("You can enter to the night club")
// } else {
// console.log("You are now allowed to enter to the night club because you are" + " " + PersonAge + " " + "years old")
// }
    
// let FirstCard = 10
// let SecondCard = 10
// let sum = FirstCard + SecondCard
// let HasWon = false
// isAlive = true
// message = ""

// if (sum <= 20) {
//     message = "Do you want to draw a new card ?"
//     isAlive = true
// }
// else if (sum === 21) {
//     message = "You have won!"
//     HasWon = true
// }
// else {
//     message = "Defeat!"
//     isAlive = false
// }
// console.log(isAlive)
// console.log(HasWon)
// console.log(message)

// Card Game -------------
// let FirstCard = CreateRandomNumber()
// let SecondCard = CreateRandomNumber()
// let sum = FirstCard + SecondCard
// let HasWon = false
// let cards = [FirstCard, SecondCard] //array - list of items
// isAlive = true
// message = ""
// let QuestionEl = document.getElementById("QuestionElement")
// // SumCards = document.getElementById("SumCards")
// SumCards = document.querySelector("#SumCards")
// AllCards = document.querySelector("#AllCards")
// let player = {
//     name: "Jovohir",
//     coins: 145,
//     // greeting: function() {
//     //     console.log("Hello")
//     // }
// }
// let PlayerBalance = 150
// let playerEL = document.getElementById("player-el")
// playerEL.textContent = player.name + ": $" + player.coins

// function StartGame() {
//     RenderGame()
// }
// function RenderGame() {
//     if (sum <= 20) {
//         message = "Do you want to draw a new card ?"
//         isAlive = true
//     }
//     else if (sum === 21) {
//         message = "You have won!"
//         HasWon = true
//     }
//     else {
//         message = "You have lost!"
//         isAlive = false
//     }
//     SumCards.textContent = "Sum: " + sum
//     AllCards.textContent = "Cards: "
//     for (let i = 0; i < cards.length; i++) {
//         AllCards.textContent += cards[i] + " "
//     }
//     QuestionElement.textContent = message
//     console.log(SumCards)
//     console.log(AllCards)
//     console.log(message)
// }

// function CreateNewCard() {
//     if (HasWon === false && isAlive === true) {
//         let NewCard = CreateRandomNumber()
//         sum += NewCard
//         cards.push(NewCard)
//         console.log(cards)
//         StartGame()
//     }
// }

// function CreateRandomNumber() {
//     RandomNumber = Math.floor(Math.random() * 13) + 1
//     if (RandomNumber === 1) {
//         return 11
//     }
//     else if (RandomNumber > 10) {
//         return 10
//     }
//     return RandomNumber 
// }   
// --------------------------

// let cards = [7,4,9,1,5,3,6,4,7,6]
// cards.push(5, 6)
// cards.pop()
// console.log(cards)

// for (let count = 1; count < 11; count += 1) {
//     console.log(count)
// }

// let cards = [7,4,9,1,5,3,6,4,7,6]
// for (let i = 0; i < cards.length; i++) {
//     console.log(cards[i])
// }

// let MyList = ["Hello", "my", "name", "is", "Jovohir"]
// let greetingEL = document.querySelector("greeting-el")
// for (let i = 0; i < MyList.length; i++) {
//     greetingEL.textContent += MyList[i] +  " "
// }

// let RandomNumber = Math.floor(Math.random() * 6) + 1
// console.log(RandomNumber)

// function CreateRandomNumber() {
//     let RandomNumber = Math.floor(Math.random() * 6) + 1
//     return RandomNumber
// }
// FinalResult = CreateRandomNumber()
// console.log(FinalResult)

// let person = {
//     name: 'Jovohir',
//     country: "Uzbekistan",
//     age: 18
// }

// function LogData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// LogData() 

// let age = 18

// function pricing() {
//     if (age < 6) {
//         return console.log("You have got a free membership!")
//     }
//     else if (age > 6 && age < 17) {
//         return console.log("You have got child discount!")
//     }
//     else if (age >= 18 && age < 26) {
//         return console.log("You have got a student discount!")
//     }
//     else if (age > 27 && age < 66) {
//         return console.log("You have no discount!")
//     }
//     else {
//         return console.log("You have got a senior citizen discount!")
//     }
// }

// pricing()

// let countries = ["China", "USA", "India", "Indonesisa", "Pakistan"]
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i])
// }

// let countries = ["China", "USA", "India", "Indonesisa", "Pakistan"]

// countries.pop()
// countries.push("Uzbekistan")
// countries.shift()
// countries.unshift("China")
// console.log(countries)

// let hands = ["rock", "paper", "scissor"]

// function GetHand() {
//     let randomIndex = Math.floor(Math.random() * 3)
//     return hands[randomIndex]
// }

// console.log(GetHand())

// let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎"]

// let appleEL = document.querySelector("#apple")
// let orangeEL = document.querySelector("#orange")
// let AppleArray = []
// let OrangeArray = []

// function sorting() {
//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "🍎") {
//             AppleArray.push(fruits[i])
//         }
//         else {
//            OrangeArray.push(fruits[i])
//         }
//     }

//     appleEL.textContent = AppleArray
//     orangeEL.textContent = OrangeArray

//     console.log(AppleArray)
//     console.log(OrangeArray)
// }

// sorting() 

// Wrong Version ------
// let i = 1
// let UserInput = Number(prompt("Enter a number: "))

// let EvenCounter = 0
// let OddCounter = 0

// function OddEven() {
//     if (UserInput % 10 == 0) {
//         FinalPartEven = UserInput / 10
//         EvenCounter += FinalPartEven
//     }
//     else if (UserInput % 10 != 0) {
//         FinalPartOdd = UserInput / 10
//         OddCounter += FinalPart
//     }

//     console.log(EvenCounter)
//     console.log(OddCounter)
// }

// OddEven()

// Swtich Statements

// let grade = prompt("Enter your grade: ")
// let grade1 = "Distinction"
// let grade2 = "Merit"
// let grade3 = "Pass"
// switch (grade) {
//     case grade1:
//         console.log("Wow excellent!")
//         break
//     case grade2:
//         console.log("Not too bad!")
//         break
//     case grade3:
//         console.log("Try harder next time!")
//         break
//     default:
//         console.log("Invalid grade!")
// }

// Do while
// This code block runs once, even though the condition is false

// let count = 5
// do {
//     count ++
//     console.log("Count is: " + count)
// } while (count < 5)

// for...in and for...of loops 

// for in - The for...in statement iterates over all enumerable property keys (names/indices) of an object, including inherited properties from its prototype chain.

// const person = {
//     FirstName: "Jovohir",
//     SecondName: "Bohodirov",
//     Age: 18,
//     IsMarried: false
// }

// for (const key in person) {
//     console.log(key + ": " + person[key])
// } 

// for of 
// The for...of statement iterates directly over the values of an iterable object.

// const cars = ['BMW', 'AUDI', 'TESLA', 'NEXIA']
// for (const value of cars) {
//     console.log(value)
// }

// First exercise
// let FirstNumber = prompt("Enter the first number: ")
// let SecondNumber = prompt("Enter the second number: ")
// if (FirstNumber > SecondNumber) {
//     console.log("Larger number is " + FirstNumber)
// }
// else if (SecondNumber > FirstNumber) {
//     console.log("Larger number is " + SecondNumber) 
// }
// else {
//     console.log("They are equal")
// }

// Second exercise
// let NumberArray = [3,-8,2]
// for (let i = 0; i < NumberArray.length; i++) {
//     if (NumberArray[i] < 0) {
//         alert("You entered negative number (" + NumberArray[i] + ") The Sign is '-' ")
//     }
// }

// Third exercise
// let FirstNumber = Number(prompt("Enter the first number: "))
// let SecondNumber = Number(prompt("Enter the second number: "))
// let ThirdNumber = Number(prompt("Enter the third number: "))

// let largest, average, smallest;

// if (FirstNumber >= SecondNumber && FirstNumber >= ThirdNumber) {
//     largest = FirstNumber
//     if (SecondNumber >= ThirdNumber) {
//         average = SecondNumber
//         smallest = ThirdNumber
//     }
//     else {
//         average = ThirdNumber
//         smallest = SecondNumber
//     }
// }
// else if (SecondNumber >= FirstNumber && SecondNumber >= ThirdNumber) {
//     largest = SecondNumber
//     if (FirstNumber >= ThirdNumber) {
//         average = FirstNumber
//         smallest = ThirdNumber
//     }
//     else {
//         average = ThirdNumber
//         smallest = FirstNumber
//     }
// }
// else {
//     largest = ThirdNumber
//     if (FirstNumber >= SecondNumber) {
//         average = FirstNumber
//         smallest = SecondNumber
//     }
//     else {
//         average = SecondNumber
//         smallest = FirstNumber
//     }
// }

// console.log("Largest: " + largest + ", Average: " + average + ", Smallest: " + smallest)

// 4-exercise
// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " is even")
//     }
//     else {
//         console.log(i + " is odd")
//     }
// }

// 5-exercise
// for (let i = 0; i <= 100; i++) {
//     if (i % 3 == 0) {
//         console.log("Fizz")
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz")
//     }
//     else if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz")
//     }
//     else {
//         console.log(i)
//     }
// }

// 6-exercise 
// Could not accomplish this task

// 7-exercise
// let Marks = [80,77,88,95,68]
// let sum = 0

// for (let i = 0; i < Marks.length; i++) {
//     sum += Marks[i]
//     sum = sum / Marks.length
// }
// console.log("Their average mark is: " + sum)

// if (sum <= 60) {
//     console.log("Grade: F")
// }
// else if (sum > 60 && sum <=70) {
//     console.log("Grade: D")
// }
// else if (sum > 70 && sum <= 80) {
//     console.log("Grade: C")
// }
// else if (sum > 80 && sum <=90) {
//     console.log("Grade: 90")
// }
// else if (sum > 90 && sum <= 100) {
//     console.log("Grade: A")
// }

// Lecture 5
// Practice
// Challenge 1
// function greeting(name) {
//     return console.log(name)
// }
// greeting('Jovohir')

// let MyName = function(name) {
//     return console.log(name);
// }

// MyName("Jovohir")

// let MyName = (name) => name
// console.log(MyName('Jovohir'));

// (function() {
//     console.log('Jovohir')
// }) ()

// let MyName = new Function(
//     'name',
//     'return console.log(name)'
// );
// MyName('Jovohir')

// Challenge 2
// var UserInput = Number(prompt("Enter a number: "))
// function isPrime(n) {
//     if (n <= 1) return false
//     if (n === 2 || n === 3) return true
//     if (n % 2 === 0 || n % 3 === 0) return false
//     for (let i = 5; i < n; i += 2) {
//     if (n % i === 0) return false
// }
//     return true
// }
// console.log(isPrime(UserInput))

// var UserInput = Number(prompt("Enter a number: "))
// var countdown = []

// challenge 3
// function CountDigits(n) {
//     while (n > 0) {
//         countdown.push(n % 10);
//         n = Math.floor(n / 10);
//     }
//     return countdown.length
// }
// console.log(CountDigits(UserInput))

// challenge 4
// did not understand this one

// challenge 5
// did not understand this one

// challenge 6
// function createCounter(start) {
//     let count = start;

//     return {
//         increment() {
//             count += 1;
//         },
//         decrement() {
//             count -= 1;
//         },
//         GetCount() {
//             return count;
//         }
//     }
// }

// console.log(createCounter(10))

// challenge 7
// did not understand this one

// function lazyAdder(a) {
//   return function(b) {
//     return a + b
//   }
// }

// const add = lazyAdder(5)

// console.log(add(10))
