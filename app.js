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

// Challenge 6
function createCounter(start) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

// Challenge 7
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

// Challenge 8
function lazyAdder(a) {
  return function(b) {
    return a + b;
  };


// Challenge 1
function calculateCartTotal(prices) {
    const totalBeforeDiscount = prices.reduce((sum, price) => sum + price, 0);
    const count = prices.length;
    let discount = 0;

    if (count >= 5) {
        discount = 0.20; // 20%
    } else if (count >= 3) {
        discount = 0.10; // 10%
    }

    const finalTotal = totalBeforeDiscount * (1 - discount);
    return Number(finalTotal.toFixed(2));
}
}

// Challenge 2
function checkPasswordStrength(password) {
    const hasMinLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const score = [hasMinLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

    if (score === 4) return "Strong";
    if (score >= 2) return "Medium";
    return "Weak";
}

// Challenge 3 
function atmWithdrawal(amount) {
    if (amount % 10 !== 0) {
        return "Error: Amount must be a multiple of 10.";
    }

    const bills = [100, 50, 20, 10];
    const result = {};
    let remaining = amount;

    for (let bill of bills) {
        const count = Math.floor(remaining / bill);
        if (count > 0) {
            result[`$${bill}`] = count;
            remaining %= bill;
        }
    }

    return result;
}

// JS Array
// 1
function first(arr, n) {
  if (arr == null || arr.length === 0) return [];
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}


console.log(first([7, 9, 0, -2]));      
console.log(first([], 3));              
console.log(first([7, 9, 0, -2], 3));   
console.log(first([7, 9, 0, -2], 6));   
console.log(first([7, 9, 0, -2], -3));  


// 2
function last(arr, n) {
  if (arr == null || arr.length === 0) return [];
  if (n == null) return arr[arr.length - 1];
  return arr.slice(Math.max(arr.length - n, 0));
}


console.log(last([7, 9, 0, -2]));       
console.log(last([7, 9, 0, -2], 3));    
console.log(last([7, 9, 0, -2], 6));    

// 3
const myColor = ["Red", "Green", "White", "Black"];


const result = myColor.join(","); 

console.log(result);

// 4
function insertDashes(input) {
  
  return input.toString().split('').join('-');
}

console.log(insertDashes('025468')); 

// 5
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];


arr1.sort(function(a, b) {
  return a - b;
});

console.log(arr1.join(',')); 

// 6
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mostFrequent(arr) {
  const counts = {};
  let maxCount = 0;
  let maxItem = null;

  for (let item of arr) {
    counts[item] = (counts[item] || 0) + 1;
    
    if (counts[item] > maxCount) {
      maxCount = counts[item];
      maxItem = item;
    }
  }
  
  return `${maxItem} ( ${maxCount} times )`;
}

console.log(mostFrequent(arr1)); // Output: a ( 5 times )

// 7
function swapCase(str) {
  let swapped = '';
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Check if the character is uppercase
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  
  return swapped;
}

console.log(swapCase('The Quick Brown Fox')); // Output: tHE qUICK bROWN fOX

