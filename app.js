// Task1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10"/2);
// console.log( 5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);
// // Task2
// console.log("200" + 50);
// const age = 25
// console.log(age + " " + "years old")
// console.log("false")
// console.log("10" - true)
// // Task 3 
// const celsius = Number(prompt("Enter temperature in Celsius:"));
// const fahrenheit = (celsius * 9/5) + 32;
// console.log("celsius" +" "+ "fahrenheit")
// // We cannot change const 
// const name = prompt("Enter a number")
// console.log(name)
// Task4
// let budget = prompt("Enter your total budget")
// let a = prompt("Enter first amount:")
// let b = prompt("Enter second amount:")
// let d = prompt("Enter third amount:")
// let result = budget = a + b + d
// let = remaining = budget - result
// console.log(result)

// let n = parseInt(prompt("Enter a number:"))

// let evenCount = 0;
// let oddCount = 0;

// for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {  
//         evenCount++;
//     } else {             
//         oddCount++;
//     }
// }

// console.log("Even numbers",evenCount)
// console.log("Odd numbers",oddCount)

// let number = Number(prompt("Sonni kiriting :"));
// let res = 0;
// while (number > 0) {
//     let lastDigit = number % 10;
//     res = res * 10 + lastDigit;
//     number  = Math.floor(number/10);
// }
// console.log(res)

// let number = Number(prompt("Give a number :"))
// let maxNumber = 0 

// while(number > 0) {
//     let lastDigit =  number % 10
//     if (maxNumber < lastDigit) {
//         maxNumber = lastDigit
//     }
//     number = Math.floor(number/10)
// }
// console.log(maxNumber)


// 1
function greet1(name) {
  return "Hello, " + name + "!";
}
// 2
const greet2 = function(name) {
  return "Hello, " + name + "!";
};
// 3
const greet3 = (name) => {
  return "Hello, " + name + "!";
};
// 4
const greet4 = name => "Hello, " + name + "!";
// 5
const greet5 = name => `Hello, ${name}!`;

// Challenge 2
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// Challenge 3
function countDigits(n) {
  return Math.abs(n).toString().length;
}
// Challenge 4
function isPalindrome(n) {
  let str = n.toString();
  return str === str.split('').reverse().join('');
}
// Challenge 5
function isArmstrong(n) {
  let str = n.toString();
  let power = str.length;
  let sum = 0;

  for (let digit of str) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === n;
}
// Challenge 6

function createCounter(start) {
  let count = start;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    getCount() {
      return count;
    }
  };
}


const counter = createCounter(10);
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());

// Challenge 7 
function once(fn) {
  let called = false;
  let result;

  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

const sayHi = once(() => {
  console.log("Hello!");
  return "Done";
});

sayHi(); 
sayHi(); 

// Challenge 8
function lazyAdder(a) {
  return function(b) {
    return a + b;
  };
}


const add5 = lazyAdder(5);

console.log(add5(10)); 
console.log(add5(20)); 

// BONUS

// 1
function debounce(fn, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
// 2
function throttle(fn, interval) {
  let lastTime = 0;

  return function(...args) {
    const now = Date.now();

    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
// 3
function taskScheduler() {
  let tasks = [];

  return {
    schedule(task, delay) {
      const id = setTimeout(() => {
        task();
        tasks = tasks.filter(t => t !== id);
      }, delay);

      tasks.push(id);
    },

    cancelAll() {
      tasks.forEach(id => clearTimeout(id));
      tasks = [];
    }
  };
}


