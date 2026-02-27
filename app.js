// Challenge 1
console.log("5" + 5)
console.log("5" - 5)
console.log("5" * 5)
console.log("5" * 5)
console.log("10" / 2)
console.log(5 + true)
console.log("10" - true)
console.log("10" + true)
console.log(5 + null)
console.log(5 + undefined)

// Challenge 3
const celsius = 25;
const fahrenheit = (celsius * 9/5) + 32;
console.log(`Temperature: ${celsius}°C`);
console.log(`Converted: ${fahrenheit}°F`);

// Challenge 4
function countEvenOdd(targetNumber) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 1; i <= targetNumber; i++) {
        if (i % 2 === 0) {  
            evenCount++;
        } else {            
            oddCount++;
        }
    }
            
    console.log(`Even numbers: ${evenCount}`);
    console.log(`Odd numbers: ${oddCount}`);
}

// Challenge 5
function reverseNumber(n) {
    let reversedNum = 0;
    
    while (n > 0) {
        let lastDigit = n % 10; 
        
        reversedNum = (reversedNum * 10) + lastDigit; 
        
        n = Math.floor(n / 10); 
    }
        
    return reversedNum;
}

// Challenge 6
function find_largest_digit(n) {
    let largest = 0;
    
    while (n > 0) {
        let currentDigit = n % 10; 
        
        if (currentDigit > largest) {
            largest = currentDigit;
        }
            
        n = Math.floor(n / 10); 
    }
        
    return largest;
}


// Challenge 7
let num1 = 15;
let num2 = 25;

if (num1 > num2) {
  console.log(num1 + " is the largest integer.");
} else if (num2 > num1) {
  console.log(num2 + " is the largest integer.");
} else {
  console.log("Both integers are equal.");
}

// Challenge 8
let x = 3;
let y = -7;
let z = 2;

if (x * y * z < 0) {
  alert("The sign is -");
} else {
  alert("The sign is +");
}



// Lecture 5
// Challenge 2
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Challenge 3
function countDigits(n) {
  return Math.abs(n).toString().length;
}


// Challenge 4
function isPalindrome(n) {
  const str = n.toString();
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


// Challenge 5
function isArmstrong(n) {
  const digits = n.toString().split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
  
  return sum === n;
}
