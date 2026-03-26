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

// challenge 7 Updated version
// let UserName = prompt("What is your name ?")
// let UserAddress = prompt("Enter your address: ")
// let UserOrder = prompt("What do you wanna order? ")

// function OrderFood() {
//     console.log("Dear " + UserName + " your" + UserOrder + " will be ready in 15 minutes and will be delivered to " + UserAddress)
// }
// OrderFood()

// Assignment
// Challenge 1
// let product = prompt("Enter product name: ")
// let quantity = Number(prompt("Enter the quantity: "))
// let price = 190000
// let PriceAfterDiscount = 0
// // I'm using this formula to find the percentage - (Percentage / 100) * value

// function discount() {
//     if (quantity > 3 && quantity < 5) {
//         let tax = (10 / 100) * (quantity * price)
//         PriceAfterDiscount -= tax
//         console.log("10% discount has been applied")
//         console.log("Total sum: " + PriceAfterDiscount)
//     }
//     else if (quantity > 5) {
//         let tax = (20 / 100) * (quantity * price)
//         PriceAfterDiscount -= tax
//         console.log("20% discount has been applied")
//         console.log("Total sum: " + PriceAfterDiscount)
//     }
//     else {
//         PriceAfterDiscount = (quantity * price)
//         console.log("no discount has been applied")
//         console.log("Total sum: " + PriceAfterDiscount)
//     }

// }

// discount()

// Challenge 2
// let UserPassword = prompt("Enter the password: ");

// function hasUppercase(str) {
//   return /[A-Z]/.test(str)
// }

// function hasNumber(str) {
//   return /\d/.test(str)
// }

// function HasEnoughCharacters(str) {
//   return str.length >= 8
// }

// function HasSpecialCharacters(str) {
//   return /[^a-zA-Z0-9]/.test(str)
// }

// function CheckPassword(password) {

//   if (!password || password.trim() === "") {
//     console.log("Password must not be empty! Please enter the password again")
//   }

//   const A = hasUppercase(password)
//   const B = hasNumber(password)
//   const C = HasEnoughCharacters(password)
//   const D = HasSpecialCharacters(password)

//   const passed = [A, B, C, D].filter(Boolean).length

//   if (passed === 4) {
//     console.log("Strong password!")
//   }
//   else if (passed === 3) {
//     console.log("Medium password - one requirement missing")
//   }
//   else if (passed === 1 || passed === 2) {
//     console.log("Weak password - multiple requirements missing")
//   }
//   else {
//     console.log(
//       "Password must contain uppercase letter, number, special character and be at least 8 characters (Weak password)"
//     )
//   }
// }

// CheckPassword(UserPassword)

// Challenge 3
// let UserMoney = Number(prompt("Enter your money (only integers): "))
// if (!Number.isInteger(UserMoney) || UserMoney <= 0 || UserMoney % 10 !== 0) {
//     alert("Invalid amount")
// }
// else {
//     let bills = [100, 50, 20, 10, 5, 1]
//     for (let bill of bills) {
//         let count = Math.floor(UserMoney / bill)

//         if (count > 0) {
//             console.log(count + " x $" +bill)
//             UserMoney %= bill
//         }
//     }
// }

// Challenge 4
// function TrafficLight(color) {
//     console.log(color);
// }
// setTimeout(TrafficLight, 5000, "Red")
// setTimeout(TrafficLight, 3000, "Green")
// setTimeout(TrafficLight, 2000, "Yellow")

// Challenge 6
// function BankAccount(InitialBalance = 0) {
//     let balance = InitialBalance

//     return {
//         deposit(amount) {
//             if (amount > 0) {
//                 balance += amount
//             }
//             else {
//                 console.log('Balance cannot be negative!')
//             }
//         },

//         withdraw(amount) {
//             if (amount > 0 && amount < balance) {
//                 balance -= amount
//             }
//             else {
//                 console.log("Invalid amount")
//             }
//         },

//         GetBalance() {
//             return balance
//         }
//     }
// }

// const Account = BankAccount(200000)

// const UserDeposit = Number(prompt("Enter deposit: "))
// Account.deposit(UserDeposit)

// const UserWithdraw =  Number(prompt("Enter amount to withdraw: "))
// Account.withdraw(UserWithdraw)

// console.log("Final Balance: " + Account.GetBalance())

// Challenge 7
// let role = prompt("Enter your role (admin, editor, viewer): ")
// let content = ["Image", "MP4", "Music", "Game"]

// function AddContentByUser() {
//     let AddContent = prompt("Add new content: ")
//     content.push(AddContent)
//     console.log("All contents: " + content)
// }

// function EditContentByUser() {
//     console.log("Current contents: ")
//     content.forEach((item, index) => {
//         console.log("Index: " + index + " Content name: " + item)
//     })
//     let UserChooseContentIndex = Number(prompt("Enter the index of the content to edit: "))
//     if (UserChooseContentIndex >= 0 && UserChooseContentIndex < content.length) {
//         let EditedContent = prompt("What do you want to change to? ")
//         content[UserChooseContentIndex] = EditedContent
//         console.log("Updated content: ")
//         console.log(content)
//     }
//     else console.log("Invalid Index")
// }

// function DeleteContent() {
//     console.log("Current contents: ")
//     content.forEach((item, index) => {
//         console.log("Index: " + index  + " " + "Content name: " + item)
//     })

//     let UserChooseIndexToDelete = prompt("Enter the index of the content you wanna delete: ")
//     if (UserChooseIndexToDelete >= 0 && UserChooseIndexToDelete < content.length) {
//         console.log(content[UserChooseIndexToDelete] + " has been deleted from content list!")
//         content.splice(UserChooseIndexToDelete, 1)
//         console.log("Updated content: ")
//         console.log(content)
//     }
//     else alert("Wrong Index")
// }

// function ViewContent() {
//     return console.log(content)
// }

// if (role === "admin") {
//     console.log("1. Add")
//     console.log("2. Edit")
//     console.log("3. Delete")
//     let action = Number(prompt("Choose an action (1-3) "))
//     if (action === 1) {
//         AddContentByUser()
//     }
//     else if (action === 2) {
//         EditContentByUser()
//     }
//     else DeleteContent()
// }

// else if (role === "editor") {
//     console.log("1. Edit")
//     console.log("2. View")
//     let action = Number(prompt("Choose an action (1-2) "))
//     if (action === 1) {
//         EditContentByUser()
//     }
//     else if (action === 2) {
//         ViewContent()
//     }
//     else {
//         console.log ("You have chosen an invalid action!")
//     }
// }

// else if (role === "viewer") {
//     console.log("1. View")
//     console.log("Presently, you can only view contents")
//     ViewContent()
// }

// function () {

// }

// Challenge 8
// (Percentage / 100) * value
// let salary = Number(prompt("Enter your salary: "))
// function tax() {
//     if (salary <= 10000) {
//         alert("You have no tax!")
//     }
//     else if (salary >= 10000 && salary < 50000) {
//         let tax = salary * (10/100)
//         salary -= tax
//         console.log("Your salary after the tax: ",salary + " Tax: 10%")
//     }
//     else if (salary >= 50000) {
//         let tax = salary * (20/100)
//         salary -= tax
//         console.log("Your salary after the tax:",salary + " Tax: 20%")
//     }
// }

// tax()

// let numbers = Array.of(5)
// console.log(numbers);

// let SetToArray = [...new Set ([6,7,8,9,10])]
// console.log(SetToArray);

// let original = [1,2,3]
// let copy = [...original]
// console.log(copy)

// let numbers = Array.of(10)
// console.log(numbers);

// let MyList = [1,2,3,4,5]
// MyList.shift()
// MyList.unshift(1)
// console.log(MyList);

// map()
// let numbers = [1,2,3,4,5,6]
// let NewArray = numbers.map(num => num * 2)
// console.log(NewArray)

// let fruits = new Map()
// fruits.set("Apple", 500)
// fruits.set("Orange", 600)
// fruits.set("Pineapple", 100)

// console.log(fruits.get("Apple"))

// let users = [
//     {name: "Jovohir", age: 20},
//     {name: "someone", age: 40},
//     {name: "someone-2", age: 1}
// ]

// let names = users.map(user => user.name)
// console.log(names);

// filter()
// let numbers = [1,2,3,4,5,6,7,8,9]
// let EvenNumbers = numbers.filter(n => n % 2 === 0)
// console.log(EvenNumbers);

// let users = [
//     {name: "Jovohir", age: 20},
//     {name: "someone", age: 40},
//     {name: "someone-2", age: 1}
// ]

// let OlderUsers = users.filter(user => user.age >= 20)
// console.log(OlderUsers);

// reduce()
// let numbers = [1,2,3,4]
// let sum = numbers.reduce((acc, num) => acc + num, 0)
// console.log(sum);

// find()
// let numbers = [1,2,3,4,5,6]
// let FindNum = numbers.find(n => n > 5)
// console.log(FindNum)

// let products = [
//     {id: 1, name: "Iphone"},
//     {id: 2, name: "Samsung"},
//     {id: 3, name: "Mi"}
// ]

// let FindPhone = products.find(p => p.id === 2)
// console.log(FindPhone);

// findIndex()
// let numbers = [10,20,30,40,50]
// let result = numbers.findIndex(n => n > 20)
// console.log(result);

// includes()
// let fruits = ["Apple", "Orange", "Kiwi"]
// console.log(fruits.includes("Orange"))

// Splice()
// array.splice(startIndex, deleteCount, newItems)

// let numbers = [10,20,30,40,50]
// numbers.splice(1,2)
// console.log(numbers);

// let numbers =  [1,2,5]
// numbers.splice(2,0,3,4)
// console.log(numbers);

// Challenge 1
// function first(n) {
//     return n[0]
// }
// console.log(first([9,8,7,6,5]));

// Challenge 2
// function last(n) {
//     return n.at(-1)
// }
// console.log(last([1,2,3,4]));

// Challenge 3
// function joining(MyList) {
//     return MyList.join()
// }
// console.log(joining(["Red", "Green", "White", "Black"]))

// Challenge 4
// let UserNumber = prompt("Enter a number: ").split("")

// function dashes() {
//     console.log(UserNumber.join("-"));

// }
// dashes()

// Challenge 5
// function SortNumber(n) {
//     return n.sort((a,b) => a - b)
// }
// console.log(SortNumber([5,1,9,-4,20]));

// Challenge 6
// function mostFrequent(arr) {
//     let count = {};
//     let maxItem;
//     let maxCount = 0;

//     for (let item of arr) {
//         count[item] = (count[item] || 0) + 1;

//         if (count[item] > maxCount) {
//             maxCount = count[item];
//             maxItem = item;
//         }
//     }

//     return `${maxItem} (${maxCount} times)`;
// }

// var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// console.log(mostFrequent(arr1));
// Did not understand this one

// Challenge 7
// let UserText = prompt("Enter text: ")
// function ChangingText() {
//     let result = ""
//     for (let char of UserText) {
//         if (char === char.toUpperCase()) {
//             result += char.toLowerCase()
//         }
//         else {
//             result += char.toUpperCase()
//         }
//     }
//     console.log("Final result: " + result);

// }
// ChangingText()

// Challenge 8
// let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let MyObject = {}

// function ObjectContainer() {
//     for (let i = 0; i < color.length; i++) {
//         MyObject[(i + 1) + " choice"] = color[i]
//     }
//     return MyObject
// }

// console.log(ObjectContainer());

// Challenge 9
// let array1 = [1,0,2,3,4];
// let array2 = [3,5,6,7,8,13];
// let FinalArray = new array1.map((num, i) => (array2[i] || 0) + num)
// console.log(FinalArray);

// let cars = {
//     brand: "Tesla",
//     model: "Model X",
//     year: 2026,
//     start: function() {
//         console.log("Car is starting...");

//     }
// }

// console.log(cars.brand);
// cars.start()

// let person = new Object()
// person.name = "Jovohir"
// person.age = 18
// person.greet = function () {
// return `Hello bro, my name is ${this.name}`
// }
// console.log(person.greet());

// Objects

// let object = {
//     FirstName: "Jovohir",
//     LastName: "Doe",
//     age: 18
// }
// console.log(object);

// Object Literal ({})
// let car = {
//     brand: "Tesla",
//     model: "Version X",
//     year: 2026,
//     start: function() {
//         console.log("I like Tesla}");
//     }
// }
// console.log(car.brand);
// car.start()

// Using new Object()
// let person = new Object()
// person.name = "Jovohir"
// person.age = 18
// person.introduction = function() {
//     return `Hello, my name is ${this.name}`
// }
// console.log(person.introduction());

// Factory Function
// function WritePerson(name, age) {
//     return {
//         name,
//         age,
//         greet() {
//             return `Hello, my name is ${this.name} and I'm ${this.age} years old`
//         }
//     }
// }

// let person1 = WritePerson("Jovohir", 18)
// let person2 = WritePerson("Muhammad", 22)

// console.log(person1.greet());
// console.log(person2.greet());

// Constructor Function
// function People (name, age) {
//     this.name = name
//     this.age = age
//     this.info = function () {
//         return `Hi, I'm ${this.name} and I'm ${this.age} years old`
//     }
// }

// let person1 = new People("Jovohir", 18)
// let person2 = new People("Muhamamd", 25)

// console.log(person1.info());
// console.log(person2.info());

// Using Object.create(prototype)

// let animal = {
//     type: "Mammal",
//     MakeSound() {
//         console.log("Some generic mammal sound!");
//     }
// }

// let dog = Object.create(animal)
// dog.breed = "This is dog"
// dog.MakeSound()
// console.log(dog.type);
// console.log(dog.breed);

// Using ES6 class
// class Person {
//     constructor (name, age) {
//         this.name = name
//         this.age = age
//     }
//     greet() {
//         return `Hello guys! My name is ${this.name} and I'm ${this.age} years old`
//     }
// }

// let person1 = new Person ("Jovohir", 18)
// console.log(person1);
// console.log(person1.greet());

// Singleton Object (Object.freeze())
// const config = Object.freeze( {
//     theme: "dark",
//     version: 11
// })
// config.theme = "Light"
// console.log(config.theme);

// Object homwork
// Challenge 1
// const students = [
//     {name: "Alice", scores: [80,90,100]},
//     {name: "Bob", scores: [50,60,70]},
//     {name: "Charlie", scores: [30,40,20]}
// ]

// function GetAverage(scores) {
//     let sum = scores.reduce((a,b) => a + b, 0) / scores.length
//     return sum
// }

// function Status(average) {
//     return average >= 50? "Passed" : "Failed"
// }

// students.forEach(student => {
//     let average = GetAverage(student.scores)
//     console.log(student.name, ":", GetAverage(student.scores), "-", Status(average));
// })

// let TopStudent = ""
// let MaxAverage = 0
// students.forEach(student => {
//     let average = GetAverage(student.scores)
//     if (average > MaxAverage) {
//         MaxAverage = average
//         TopStudent = student.name
//     }
// })
// console.log(TopStudent, "got the highest score:", MaxAverage);

// Challenge 2
// const cart = [
//     {id: 1, name: "Laptop", price: 900, quantity: 1},
//     {id: 2, name: "Mouse", price: 50, quantity: 2},
//     {id: 3, name: "Keyboard", price: 100, quantity: 1}
// ]

// let MostExpensiveItem = ""
// let MaxNumber = 0

// function MostExpensiveProduct() {
//     cart.forEach(item => {
//         if (item.price > MaxNumber) {
//             MaxNumber = item.price
//             MostExpensiveItem = item.name
//         }
//         console.log(`Most expensive item is ${MostExpensiveItem} (${MaxNumber}$)`);

//     })
// }

// function GetSum(cart) {
//     let SumPrices = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
//     return SumPrices
// }

// function Discount(SumPrices) {
//     if (SumPrices < 100) {
//         SumPrices = SumPrices * (1 - 0.1)
//     }
//     return SumPrices
// }

// let total = GetSum(cart)

// console.log(`Total price: ${Discount(total)}$ (after 10% of discount)`);
// MostExpensiveProduct()

// Challenge 3
// let products = [
//     {id: 1, name: "Laptop", price: 1200, stock: 10},
//     {id: 2, name: "Phone", price: 700, stock: 15}
// ]

// function DeleteProductByID() {
//     let UserDeleting = Number(prompt("Enter an ID to remove a product: (1-2)"))

//     let OiriginalLength = products.length
//     products = products.filter(item => item.id !== UserDeleting)
//     if (OiriginalLength === products.length) {console.log("Product not found!")}

//     console.log("Remaining products: ");
//     console.log(products);
// }

// function AddNewProduct() {
//     let UserAddingProductName = prompt("Enter the name of a new product: ")
//     let UserEnteringPrice = Number(prompt("Enter its price: "))
//     let UserEnteringStock = Number(prompt("Enter the amount of that product: "))

//     let NewProductByUser = {
//         id: products.length + 1,
//         name: UserAddingProductName,
//         price: UserEnteringPrice,
//         stock: UserEnteringStock
//     }
//     products.push(NewProductByUser)

//     console.log("Your product has been added!");
//     console.log("Updated Inventory: ");
//     console.log(products);
// }

// function UpdateStockByUser() {
//     let UserEnterIDtoUpdateStock = Number(prompt("Enter an ID of the product to update its stock: "))
//     let UserSetNewStock = Number(prompt("Enter its new amount: "))

//     let product = products.find(ProductID => ProductID.id === UserEnterIDtoUpdateStock)
//     if (product) {
//         product.stock = UserSetNewStock
//         console.log("Stock has been successfully updated!");
//         console.log(products);
//     }
//     else {console.log("Product not found!");}
// }

// function UserFindingProduct() {
//     let UserSearchingForProduct = prompt("Enter the product name you are searching: ")
//     let FoundProduct = products.find(item => item.name.toLowerCase() === UserSearchingForProduct.toLowerCase())
//     console.log(FoundProduct);
// }

// DeleteProductByID()
// AddNewProduct()
// UpdateStockByUser()
// UserFindingProduct()

// Challenge 4
// let posts = [
//     {author: "Alice", likes: 100, comments: 20, shares: 5},
//     {author: "Bob", likes: 200, comments: 50, shares: 10}
// ]

// let MaxLike = 0

// function MostLike() {
//     posts.forEach(post => {
//         if (post.likes > MaxLike) {
//             MaxLike = post.likes
//         }
//     })

//     console.log(`Most liked post has ${MaxLike} likes`)
// }

// function TotalEngagement() {
//     let sum = posts.reduce((total, post) =>
//         total + post.likes + post.comments + post.shares, 0
//     )

//     console.log(`Total engagement: ${sum}`)
// }

// function AuthorComment() {
//     let AuthorCommentObject = posts.map(post => ({
//         author: post.author,
//         comments: post.comments
//     }))

//     console.log(AuthorCommentObject)
// }

// MostLike()
// TotalEngagement()
// AuthorComment()

// challenge 5
// const teams = [
//     { name: "Team A", wins: 5, losses: 2, points: 15, goalsScored: 12, goalsConceded: 6 },
//     { name: "Team B", wins: 6, losses: 1, points: 18, goalsScored: 15, goalsConceded: 5 }
// ]

// function sortTeams() {
//     const sorted = teams.sort((a, b) => b.points - a.points)
//     console.log("Leaderboard:", sorted)
// }

// function bestTeam() {
//     let best = teams[0]

//     teams.forEach(team => {
//         if (team.points > best.points) {
//             best = team
//         }
//     })

//     console.log("Best team:", best)
// }

// function showGoals() {
//     teams.forEach(team => {
//         console.log(
//             team.name +
//             "Goals scored: " + team.goalsScored +
//             "Goals conceded: " + team.goalsConceded
//         )
//     })
// }

// sortTeams()
// bestTeam()
// showGoals()

// challenge 6
// const inventory = [
//     { itemName: "Laptop", category: "Electronics", stock: 5 },
//     { itemName: "Phone", category: "Electronics", stock: 10 },
//     { itemName: "Chair", category: "Furniture", stock: 3 }
// ]

// function totalStockByCategory(category) {
//     let total = 0

//     inventory.forEach(item => {
//         if (item.category === category) {
//             total += item.stock
//         }
//     })

//     console.log("Total stock in", category + ":", total)
// }

// function lowStockAlert() {
//     inventory.forEach(item => {
//         if (item.stock < 5) {
//             console.log("Low stock alert:", item.itemName, "- only", item.stock, "left")
//         }
//     })
// }

// totalStockByCategory("Electronics")
// lowStockAlert()

// DOM
// const title = document.getElementById("title")
// const text = document.querySelector(".text")
// const title = document.getElementById("title")
// console.log(title);
// console.log(text);
// title.textContent = "New title"

// Changing style
// const message = document.getElementById("message")

// message.style.color = "red"
// message.style.fontSize = "30px"

// Creating new elements
// const container = document.getElementById("container")

// const newElement = document.createElement("p")

// newElement.textContent = "This is new"

// container.appendChild(newElement)

// removing elements
// const element = document.getElementById("removeMe")
// element.remove()

// Events
// const button = document.getElementById("btn")

// button.addEventListener("click", function() {
//     alert("Button clicked!")
// })

// Simple Counter
// let count = 0

// const button = document.getElementById("add")
// const counter = document.getElementById("count")

// button.addEventListener("click", function () {
//     count++
//     counter.textContent = count
// })

// Add to cart program

// let cart = 0

// const buyBtn = document.querySelector(".buy")
// const cartCount = document.getElementById("cart")

// buyBtn.addEventListener("click", function() {
//     cart++
//     cartCount.textContent = cart
// })

// Examples by my teacher (DOM)
// const heading = document.createElement("h1")
// heading.textContent = "Bu h1 elementi"
// document.body.appendChild(heading)

// const button = document.createElement("button")
// button.textContent = "Click me!"
// document.body.appendChild(button)

// button.classList.add("btn")
// heading.classList.add("heading")

// button.addEventListener("click", function () {
// heading.classList.toggle("heading")
// })

// const body = document.body
//
// const title = document.createElement("h1")
// const countEl = document.createElement("h2")
// const plusBtn = document.createElement("button")
// const minusBtn = document.createElement("button")
//
// title.textContent = "Counter"
// countEl.textContent = "0"
// plusBtn.textContent = "+"
// minusBtn.textContent = "-"
//
// body.appendChild(title)
// body.appendChild(countEl)
// body.appendChild(plusBtn)
// body.appendChild(minusBtn)
//
// let count = 0
//
// plusBtn.addEventListener("click", function() {
// count++
// countEl.textContent = count
// })
//
// minusBtn.addEventListener("click", function() {
// count--
// countEl.textContent = count
// })

// const body = document.body

// const p = document.createElement("p")

// p.textContent = "Hello Bro"

// body.appendChild(p)

// const body = document.body

// const btn = document.createElement("button")
// btn.textContent = "CLick"

// const text = document.createElement("p")
// text.textContent = "0"

// body.appendChild(btn)
// body.appendChild(text)

// let count = 0

// btn.addEventListener("click", function() {
//     count++
//     text.textContent = count
// })

// const body = document.body

// const btn = document.createElement("button")
// btn.textContent = "Toggle"

// const box = document.createElement("div")
// box.textContent = "box"

// document.body.appendChild(btn)
// document.body.appendChild(box)

// btn.addEventListener("click", function() {
// box.classList.toggle("active")
// })

// const body = document.body

// const ul = document.createElement("ul")

// for (let i = 1; i <= 5; i++) {
//     const li = document.createElement("li")
//     li.textContent = "Item " + i
//     ul.appendChild(li)
// }

// document.body.appendChild(ul)

// ul.addEventListener("click", function(e) {
//     console.log(e.target.textContent)
// })

// calculator (practice - 3)
// const body = document.body;
// body.classList.add("body");

// const container = document.createElement("section");
// container.classList.add("main-container");

// const display = document.createElement("div");
// display.classList.add("console");
// let representation = "";
// display.textContent = representation;

// const topFourButtons = document.createElement("div");
// topFourButtons.classList.add("top-four-orange-button");

// const buttonsContainer = document.createElement("div");
// buttonsContainer.classList.add("all-buttons");

// const numbers = document.createElement("div");
// numbers.classList.add("numbers");

// const sevenEightNine = document.createElement("div");
// sevenEightNine.classList.add("sevenEightNine");

// const fourFiveSix = document.createElement("div");
// fourFiveSix.classList.add("fourFiveSix");

// const oneTwoThree = document.createElement("div");
// oneTwoThree.classList.add("oneTwoThree");

// const actions = document.createElement("div");
// actions.classList.add("actions");

// const zeroDotEqual = document.createElement("div");
// zeroDotEqual.classList.add("zeroDotEqual");

// const bigZero = document.createElement("div");
// bigZero.classList.add("bigZero");

// const dotContainer = document.createElement("div");
// dotContainer.classList.add("dotContainer");

// const equalContainer = document.createElement("div");
// equalContainer.classList.add("equalContainer");

// document.body.appendChild(container);
// container.append(display, topFourButtons, buttonsContainer, zeroDotEqual);

// buttonsContainer.append(numbers, actions);
// numbers.append(sevenEightNine, fourFiveSix, oneTwoThree);

// zeroDotEqual.append(bigZero, dotContainer, equalContainer);

// // buttons
// const clearButton = document.createElement("button");
// clearButton.textContent = "C";

// const deleteButton = document.createElement("button");
// deleteButton.textContent = "DEL";

// const percentageButton = document.createElement("button");
// percentageButton.textContent = "%";

// const divide = document.createElement("button");
// divide.textContent = "/";

// const seven = document.createElement("button");
// seven.textContent = "7";

// const eight = document.createElement("button");
// eight.textContent = "8";

// const nine = document.createElement("button");
// nine.textContent = "9";

// const four = document.createElement("button");
// four.textContent = "4";

// const five = document.createElement("button");
// five.textContent = "5";

// const six = document.createElement("button");
// six.textContent = "6";

// const one = document.createElement("button");
// one.textContent = "1";

// const two = document.createElement("button");
// two.textContent = "2";

// const three = document.createElement("button");
// three.textContent = "3";

// const zero = document.createElement("button");
// zero.textContent = "0";

// const dot = document.createElement("button");
// dot.textContent = ".";

// const multiply = document.createElement("button");
// multiply.textContent = "*";

// const minusBtn = document.createElement("button");
// minusBtn.textContent = "-";

// const plusButton = document.createElement("button");
// plusButton.textContent = "+";

// const equal = document.createElement("button");
// equal.textContent = "=";

// // appends
// topFourButtons.append(clearButton, deleteButton, percentageButton, divide);
// sevenEightNine.append(seven, eight, nine);
// fourFiveSix.append(four, five, six);
// oneTwoThree.append(one, two, three);
// actions.append(multiply, minusBtn, plusButton);
// bigZero.append(zero);
// dotContainer.append(dot);
// equalContainer.append(equal);

// const allButtons = [one, two, three, four, five, six, seven, eight, nine, zero];

// const actionButtons = [
//   multiply,
//   minusBtn,
//   plusButton,
//   dot,
//   percentageButton,
//   divide,
// ];

// // functions
// allButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     representation += button.textContent;
//     display.textContent = representation;
//   });
// });

// actionButtons.forEach((actionButton) => {
//   actionButton.addEventListener("click", function () {
//     representation += actionButton.textContent;
//     display.textContent = representation;
//   });
// });

// clearButton.addEventListener("click", function () {
//   representation = "";
//   display.textContent = "";
// });

// deleteButton.addEventListener("click", function () {
//   representation = representation.slice(0, -1);
//   display.textContent = representation;
// });

// function calculate() {
//   try {
//     representation = eval(representation).toString();
//   } catch {
//     representation = "Error";
//   }

//   display.textContent = representation;
// }

// equal.addEventListener("click", function () {
//   calculate();
// });
// end of calculator app

// (%) don't know what it does...
// percentageButton.addEventListener("click", function () {});

// Traffic light app
// const body = document.body;

// const trafficLight = document.createElement("div");
// document.body.appendChild(trafficLight);
// trafficLight.classList.add("traffic-light");

// const redCircle = document.createElement("div");
// const yellowCircle = document.createElement("div");
// const greenCircle = document.createElement("div");

// trafficLight.append(redCircle, yellowCircle, greenCircle);

// redCircle.classList.add("red-circle");
// yellowCircle.classList.add("yellow-circle");
// greenCircle.classList.add("green-circle");

// function resetLights() {
//   redCircle.classList.remove("red");
//   yellowCircle.classList.remove("yellow");
//   greenCircle.classList.remove("green");
// }

// function run() {
//   setTimeout(function () {
//     redCircle.classList.add("red");
//   }, 3000);

//   setTimeout(function () {
//     yellowCircle.classList.add("yellow");
//   }, 5000);

//   setTimeout(function () {
//     greenCircle.classList.add("green");
//   }, 7000);

//   setTimeout(function () {
//     resetLights();
//   }, 8000);

//   setTimeout(function () {
//     run();
//   }, 9000);
// }

// // Infinite version
// // let i = 0;
// // while (i < 10) {
// //   run();
// // }

// let i = 1;
// while (i < 100) {
//   run();
//   i++;
// }

// // End of traffic light app

// Password strength checker
// const body = document.body;

// const container = document.createElement("div");
// container.classList.add("container");
// document.body.appendChild(container);

// const label = document.createElement("label");
// label.classList.add("label");
// label.textContent = "Password Strength Checker";

// const userInput = document.createElement("input");
// userInput.classList.add("user-input");

// const strengthContainer = document.createElement("div");
// strengthContainer.classList.add("strength-container");

// container.append(label, userInput, strengthContainer);

// const strengthWord = document.createElement("p");
// strengthWord.classList.add("strength-word");

// strengthContainer.appendChild(strengthWord);
// strengthWord.textContent = "";

// userInput.addEventListener("input", () => {
//   const value = userInput.value;

//   let score = 0;
//   let uniqueElements = ["!", "@", "#", "$", "&", "*", "%"];

//   if (value.length >= 8) score++;
//   if (value !== value.toLowerCase()) score++;
//   if (value !== value.toUpperCase()) score++;
//   if (uniqueElements.some((char) => value.includes(char))) score++;

//   if (score <= 2) {
//     strengthWord.textContent = "Weak";
//     strengthContainer.classList.add("red");
//   } else if (score === 3) {
//     strengthWord.textContent = "Medium";
//     strengthContainer.classList.add("yellow");
//   } else {
//     strengthWord.textContent = "Strong";
//     strengthContainer.classList.add("green");
//   }
// });

// End of Password strength checker

//Interactive to-do list app
// const body = document.body;

// const container = document.createElement("div");
// document.body.appendChild(container);
// container.classList.add("container");

// const title = document.createElement("p");
// title.classList.add("title-of-app");
// title.textContent = "Interactive To-Do List";

// const firstTask = document.createElement("div");
// firstTask.classList.add("task-container");

// container.append(title, firstTask);

// const firstTaskContainer = document.createElement("div");
// firstTaskContainer.classList.add("first-task-container");

// const firstTaskTitle = document.createElement("p");

// firstTaskTitle.classList.add("first-task-title");
// firstTaskTitle.textContent = "Task 1";
// firstTask.append(firstTaskContainer);

// const statusContainer = document.createElement("div");
// statusContainer.classList.add("statusContainer");

// const status = document.createElement("p");
// status.textContent = "pending";
// status.classList.add("status");

// statusContainer.append(status);

// const taskDescription = document.createElement("p");
// taskDescription.classList.add("taskDescription");
// taskDescription.textContent = "Descripton for Task 1";

// firstTaskContainer.append(firstTaskTitle, statusContainer);

// const firstTaskDeleteButton = document.createElement("button");
// firstTaskDeleteButton.classList.add("firstTaskDeleteButton");
// firstTaskDeleteButton.textContent = "Delete";

// firstTask.append(taskDescription, firstTaskDeleteButton);

// firstTaskDeleteButton.addEventListener("click", function () {
//   firstTask.remove(firstTask);
// });

// // -----------------------------------------

// const secondTaskMainContainer = document.createElement("div");
// secondTaskMainContainer.classList.add("secondTaskMainContainer");

// container.append(secondTaskMainContainer);

// const taskTitleAndStatusContainer = document.createElement("div");
// taskTitleAndStatusContainer.classList.add("taskTitleAndStatusContainer");

// const secondTaskTitle = document.createElement("p");
// secondTaskTitle.textContent = "Task 2";
// secondTaskTitle.classList.add("secondTaskTitle");

// const secondTaskStatusContainer = document.createElement("div");
// secondTaskStatusContainer.classList.add("secondTaskStatusContainer");

// const secondTaskStatusDescription = document.createElement("p");
// secondTaskStatusDescription.textContent = "Description for Task 2";
// secondTaskStatusDescription.classList.add("taskDescription");

// const wordInProgress = document.createElement("p");
// wordInProgress.textContent = "in progress";
// wordInProgress.classList.add("secondTaskStatusContainer");

// taskTitleAndStatusContainer.append(secondTaskTitle, secondTaskStatusContainer);

// secondTaskStatusContainer.append(wordInProgress);

// const secondTaskDeleteButton = document.createElement("button");
// secondTaskDeleteButton.classList.add("firstTaskDeleteButton");
// secondTaskDeleteButton.textContent = "Delete";

// secondTaskMainContainer.append(
//   taskTitleAndStatusContainer,
//   secondTaskStatusDescription,
//   secondTaskDeleteButton,
// );

// secondTaskDeleteButton.addEventListener("click", function () {
//   secondTaskMainContainer.remove(secondTaskMainContainer);
// });

// // -----------------------------------------

// const thirdTask = document.createElement("div");
// thirdTask.classList.add("task-container");

// container.append(thirdTask);

// const thirdTaskContainer = document.createElement("div");
// thirdTaskContainer.classList.add("first-task-container");

// const thirdTaskTitle = document.createElement("p");

// thirdTaskTitle.classList.add("first-task-title");
// thirdTaskTitle.textContent = "Task 3";
// thirdTask.append(thirdTaskContainer);

// thirdTaskContainer.append(thirdTaskTitle);

// const thirdstatusContainer = document.createElement("div");
// thirdstatusContainer.classList.add("thirdStatusContainer");

// const thirdStatusWord = document.createElement("p");
// thirdStatusWord.classList.add("thirdStatusWord");
// thirdStatusWord.textContent = "completed";

// thirdTaskContainer.append(thirdstatusContainer);

// const thirdDescription = document.createElement("p");
// thirdDescription.classList.add("thirdDescription");

// thirdstatusContainer.append(thirdStatusWord);

// const thirdtaskDescription = document.createElement("p");
// thirdtaskDescription.classList.add("taskDescription");
// thirdtaskDescription.textContent = "Descripton for Task 3";

// const thirdTaskDeleteButton = document.createElement("button");
// thirdTaskDeleteButton.classList.add("firstTaskDeleteButton");
// thirdTaskDeleteButton.textContent = "Delete";

// thirdTask.append(thirdtaskDescription, thirdTaskDeleteButton);

// thirdTaskDeleteButton.addEventListener("click", function () {
//   thirdTask.remove(thirdTask);
// });

// const addTaskButton = document.createElement("button");
// addTaskButton.classList.add("addTaskButton");
// addTaskButton.textContent = "Add Task";
// container.append(addTaskButton);
// const title = document.getElementById("main-heading");
// console.log(title);

// const listItem = document.getElementsByClassName("list-items");
// console.log(listItem);

// const listItem = document.getElementsByTagName("li");
// console.log(listItem);

// const container = document.querySelector("div");
// console.log(container);

// const secondContainer = document.querySelectorAll("div");
// console.log(secondContainer);

// const title = document.querySelector("#main-heading");
// title.style.color = "red";

// const listItems = document.querySelectorAll(".list-items");
// console.log(listItems);

// // listItems.style.fontSize = "25px"; it does now work.

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "35px";
// }

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// ul.append(li);

// // Modifying
// // const firstListItem = document.querySelector(".list-items");

// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);
// li.innerText = "X-men";
// // li.setAttribute("id", "main-heading");
// // li.removeAttribute("id");

// // const title = document.querySelector("#main-heading");
// // console.log(title.getAttribute("id"));
// li.classList.add("list-items");
// li.classList.remove("list-items");
// console.log(li.classList.contains("list-items"));

// // Removing an element.
// li.remove();
// let ul = document.querySelector("ul");
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);
// const html = document.documentElement;
// console.log(html);
// console.log(html.parentNode);

// ul.childNodes[1].style.backgroundColor = "blue";
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// const div = document.querySelector("div");

// console.log(div.childNodes);

// console.log(ul.nextSibling);
// console.log(ul.previousSibling);
// console.log(ul.previousElementSibling);

// event listener
// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//   alert("I love python more than JavaScript");
// }

// buttonTwo.addEventListener("click", alertBtn);

// const newBackgroundColor = document.querySelector(".box-3");

// function ChangeBg() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }

// newBackgroundColor.addEventListener("mouseover", ChangeBg);
// const revealBtn = document.querySelector(".reveal-btn");

// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent() {
//   if (hiddenContent.classList.contains("reveal-btn")) {
//     hiddenContent.classList.remove("reveal-btn");
//   } else {
//     hiddenContent.classList.add("reveal-btn");
//   }
// }

// revealBtn.addEventListener("click", revealContent);

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("Football is clicked");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "grey";
//   }
// });

// document.querySelector("#sports").addEventListener("click", function (e) {
//   console.log(e.target.getAttribute("id") + " is clicked!");

//   const target = e.target;

//   if (target.matches("li")) {
//     target.style.backgroundColor = "grey";
//   }
// });

// const sports = document.querySelector("#sports");
// const newSport = document.createElement("li");

// newSport.innerText = "Rugby";
// newSport.setAttribute("id", "rugby");

// sports.appendChild(newSport);

// let btn = document.querySelector("#new-quote");
// let quote = document.querySelector(".quote");
// let person = document.querySelector(".person");

// const quotes = [
//   {
//     quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`,
//     person: `Winston Churchill`,
//   },

//   {
//     quote: `"Do not watch the clock. Do what it does. Keep going."`,
//     person: `Sam Levenson`,
//   },

//   {
//     quote: `"In the middle of difficulty lies opportunity."`,
//     person: `Albert Einstein`,
//   },

//   {
//     quote: `"It always seems impossible until it is done."`,
//     person: `Nelson Mandela`,
//   },

//   {
//     quote: `"Discipline is choosing between what you want now and what you want most."`,
//     person: `Abraham Lincoln`,
//   },

//   {
//     quote: `"You miss 100% of the shots you don't take."`,
//     person: `Wayne Gretzky`,
//   },
// ];

// btn.addEventListener("click", function () {
//   let random = Math.floor(Math.random() * quotes.length);

//   quote.innerText = quotes[random].quote;
//   person.innerText = quotes[random].person;
// });

// let openBtn = document.getElementById("#open-btn");
// let modalContainer = document.getElementById("#modal-container");
// let closeBtn = document.getElementById("close-btn");
// let hereIam = document.getElementById("#modal");

// // openBtn.addEventListener("click", function () {
// //   modalContainer.style.display = "block";
// // });

// // closeBtn.addEventListener("click", function () {
// //   modalContainer.style.display = "none";
// // });

// // window.addEventListener("click", function (e) {
// //   if (e.target === modalContainer) {
// //     modalContainer.style.display = "none";
// //   }
// // });

// openBtn.addEventListener("click", function () {
//   hereIam.style.display = "block";
// });

// const question = document.querySelector(".question");
// const answer = document.querySelector(".answer");

// question.addEventListener("click", () => {
//   answer.classList.toggle("hidden");
// });

// const list = document.querySelector("#list");

// list.addEventListener("click", (e) => {
//   if (e.target.matches("li")) {
//     e.target.style.backgroundColor = "grey";
//   }
// });

// const input = document.querySelector("#input");
// const list = document.querySelector("#list");
// const addBtn = document.querySelector("#addBtn");

// addBtn.addEventListener("click", function () {
//   const value = input.value;

//   if (value === "") return;

//   const li = document.createElement("li");
//   li.textContent = value;
//   list.appendChild(li);

//   input.value = "";
// });

const input = document.querySelector("#input");
const addBtn = document.querySelector("#add-btn");
const list = document.querySelector("#list");

addBtn.addEventListener("click", function () {
  const value = input.value;
  if (value === "") return;
  const li = document.createElement("li");
  li.textContent = value;
  list.appendChild(li);
  input.value = "";
});

list.addEventListener("click", function (e) {
  if (e.target.matches("li")) {
    e.target.classList.toggle("done");
  }
});

list.addEventListener("dblclick", function (e) {
  if (e.target.matches("li")) {
    e.target.remove();
  }
});
