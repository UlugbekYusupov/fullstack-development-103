// Lesson 5 Functions
// challenge 1

function sayHello (name) {
    return `hello ${name}`;
}

function outer(outerName) {
    function inner(name) {
        return `hello ${name}`;
    }
    inner(outerName)
}

let func = function (name) {
    return `hello ${name}`;
}

let func2 = (name) => { return `Hello ${name}`}

let func3 = new Function("name", "return `Hello ${name}`");

console.log(func3("Name"));

// // Challenge 2 - Write a function isPrime(n) that returns true if n is prime, otherwise false.

function isPrime(num) {
    if (num <= 1) return false
    if (num === 2) return true 
    if (num % 2 === 0) return false

    let checker = Math.floor(Math.sqrt(num))
    for (let i = 3; i <= checker; i += 2) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true;
}

console.log(isPrime(36)); 

// Challenge 3 - Write a function countDigits(n) that counts the number of digits in a given number.
function countDigits (n) {
    counter = 0
    while (n > 0) {
        counter += 1
        n = Math.floor(n / 10)
    }
    return counter
}

console.log(countDigits(1));

// Challenge 4 - Write a function isPalindrome(n) that checks if a number reads the same forward and backward.

function isPalindrome(n) {
    let origNum = n
    let reversed = 0
    while (n > 0) {
        let lastDigit = n % 10
        reversed = reversed * 10 + lastDigit
        n = Math.floor(n / 10 )
    }

    return origNum === reversed
}

console.log(isPalindrome(323)); 


// Challenge 5 - Write a function isArmstrong(n) that checks if a number is an Armstrong number.
// (An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.)

function isArmstrong (n) {
    let numStore = 0
    let sum = 0

    while (n > 0) {
        let lastDigit = n % 10
        numStore += Math.pow(lastDigit, 3)
        n = Math.floor(n / 10)
    }

    return numStore
}

console.log(isArmstrong(153));

// Challenge 6 - Create a function createCounter(start) that returns an object with three methods:
// increment() ➝ Increases the count
// decrement() ➝ Decreases the count
// getCount() ➝ Returns the current count

function createCounter(n) {
    let count = n

    return {
        increment: function () {
            count += 1
            console.log('increment +1');
        },
        decrement: function () {
            count -= 1
            console.log('decrement -1');
        },
        getCount: function () {
            console.log('current count', count);
        }
    }
}

const counter = createCounter(7)
counter.increment()
counter.decrement()
counter.getCount()


// Challenge 7 – Create a function that order food, the program asks for name, address and what do 	you want to order, then the output should be “Dear (name), your ordered food (food you 	entered) will be ready in 15 minuts and will be delivered to your address(address you 		entered)”

function foodDelivery() {
    name = prompt('What is ur name?')
    adress = prompt('What is ur adress?')
    order = prompt('what is ur order?')

    console.warn(`Dear ${name}, your ordered food (${order}) will be ready in 15 minuts and will be delivered to ${adress}`);
}

foodDelivery()


// Challenge 8 - Create a function lazyAdder(a) that returns another function that adds b when called.
// const add5 = lazyAdder(5); 
// console.log(add5(10));  - > 15
// console.log(add5(20));  -> 25

function lazyAdder (a) {
    numStore = a
    return function inAdd (b) {
        console.log(numStore + b);
    }
}

console.log(parseFloat(totalBudget));

// Challenge 1 - Dynamic Pricing Calculation
// Scenario: Create a function that calculates the total price of an online shopping cart, applying discounts based on quantity.
// Example: If a user buys 3+ items, apply a 10% discount; if 5+, apply 20%.

function shoppingCart(items) {

    if (item_quantity >= 3) {
        items * 0.10
    } else {
        items * 0.20
    }
}

console.log(object);


// Challenge 2 - Password Strength Checker
// Scenario: Build a function to check password strength based on conditions:
// Minimum 8 characters
// At least one uppercase letter
// At least one number
// At least one special character
// Return "Weak", "Medium", or "Strong" based on conditions.


function pwdChecker () {
    const usrPwd = prompt('enter a password')
    const specChar = '@!#$%^&*~'

    let pwdStrength = 0

    let is8Char = false
    let hasUpperCase = false
    let hasNumber = false
    let hasSpecChar = false

    if (usrPwd.length >= 8) {
        is8Char = true
    } else {
        alert('minimum 8 characters!')
        return pwdChecker()
    }

    for (i in usrPwd) {
        let char = usrPwd[i]

        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true

        }

        if (char >= '0' && char <= '9') {
            hasNumber = true       
        }

        if (specChar.includes(char)) {
            hasSpecChar = true
        }
    }

    if (is8Char === true) pwdStrength++
    if (hasNumber === true) pwdStrength++
    if (hasUpperCase === true) pwdStrength++
    if (hasSpecChar === true) pwdStrength++

    if (pwdStrength == 4) {
        alert('password strength: Strong')
    } else if (pwdStrength == 3 ) {
        alert('password strength: Medium')
    } else {
        alert('password strength: Weak')
    }
}
    
pwdChecker()
    

// Challenge 3 - ATM Cash Withdrawal System
// Scenario: Simulate an ATM that dispenses the least number of bills for a given amount (e.g., $130 → 1x $100, 1x $20, 1x $10).
// if the requested amount is not in multiples of 10, return an error.

let amount = 459

function ATM_Simulator (num) {
    let hundreds = Math.floor(num / 100)
    num %= 100
    let twentys = Math.floor(num / 20)
    num %= 20
    let tens = Math.floor(num / 10)
    num %= 10
    let remainder = num

    return [hundreds, twentys, tens, remainder]
}

dispensed = ATM_Simulator(amount)

console.log(`$100 -> x${dispensed[0]}, $20 -> x${dispensed[1]}, $10 -> x${dispensed[2]}`);
console.log(`remainder: ${dispensed[3]}`);

// Challenge 4 - Traffic Light Simulation
// Scenario: Create a traffic light system that cycles through "Red" → "Green" → "Yellow" using setTimeout().
// Each light stays for a different duration
// Red: 5 seconds
// Green: 3 seconds
// Yellow: 2 seconds

let red = () => {console.log('red');}
let yellow = () => {console.log('yellow');}
let green = () => {console.log('green');}

function trafficLight () {
    setTimeout(red, 1000)
    setTimeout(yellow, 4000)
    setTimeout(green, 6000)
}

trafficLight()

// Challenge 6 - Closures in Banking System
// Scenario: Create a bankAccount function that returns an object with methods to:
// Deposit money
// Withdraw money (only if sufficient balance)
// View balance
// Ensure balance is private using closures.

function bankAccount () {
    
    let balance = 434;

    return {
        deposit: function (add){
            balance += add
        },
        withdraw: function (remove){
            if (remove > balance) {
                alert('insufficient balance');
            } else {
                balance -= remove
            }
        },
        balance: function (){

            function innerBalance () {
                return balance
            }

            return innerBalance()
        }
    }
}

const profile = bankAccount()

console.log(profile.balance()); 
profile.deposit(20)
console.log(profile.balance()); 
profile.withdraw(3)

// Challenge 7 - Role-Based Access System 
// Scenario: Create a function that assigns user roles (admin, editor, viewer) and allows certain actions based on role.
// Admin can add, edit, delete content
// Editor can edit, view
// Viewer can only view

const permissions = {
    admin: ['add', 'edit', 'delete', 'view'],
    editor: ['edit', 'view'],
    viewer: ['view']
};


function checkAccess(userRole, requestedAction) {

    if (permissions[userRole]?.includes(requestedAction)) {
        console.log('access granted');
    } else {
        console.log('access denied');
    }
}


checkAccess('admin', 'view')
checkAccess('viewer', 'delete')



// Challenge 8 - Dynamic Tax Calculator
// Scenario: Build a function that calculates income tax based on salary.
// Income < $10,000 → No tax
// $10,000 - $50,000 → 10% tax
// $50,000+ → 20% tax


function taxCalculator (num) {
    if (num > 50000) {
        let tax = num * 0.20
        console.log(`your tax amount: ${tax}`);
    } else if (num >= 10000) {
        let tax = num * 0.10
        console.log(`your tax amount: ${tax}`);
    } else {
        console.log('no tax for u');
    }
}

taxCalculator(60000)
