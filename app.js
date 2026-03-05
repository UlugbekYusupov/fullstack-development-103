function first(arr, n) {

  if (arr.length === 0) return [];

  if (n == null) return arr[0];

  if (n < 0) return n;

  return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2]));      
console.log(first([], 3));              
console.log(first([7, 9, 0, -2], 6));   
console.log(first([7, 9, 0, -2], -3));  

//2
function last(arr, n) {

  if (n == null) return arr[arr.length - 1];

  if (n > arr.length) return arr;

  return arr.slice(arr.length - n);
}


console.log(last([7, 9, 0, -2]));      
console.log(last([7, 9, 0, -2], 3));   
console.log(last([7, 9, 0, -2], 6));

//3
let myColor = ["Red", "Green", "White", "Black"];

let result = myColor.join(",");

console.log(result); 

//4
function addDash(num) {

  let str = num.toString();   
  let result = "";

  for (let i = 0; i < str.length; i++) {

    result += str[i];

    if (i !== str.length - 1) {
      result += "-";
    }

  }

  return result;
}

console.log(addDash(25468)); 

//5
function sortArray(arr) {

  return arr.sort(function(a, b) {
    return a - b;
  });

}
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

console.log(sortArray(arr1));

//6
function mostFrequent(arr) {

  let count = {};
  let max = 0;
  let result;

  for (let i = 0; i < arr.length; i++) {

    let item = arr[i];

    count[item] = (count[item] || 0) + 1;

    if (count[item] > max) {
      max = count[item];
      result = item;
    }

  }

  return result + " ( " + max + " times )";
}

var arr1=[3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

console.log(mostFrequent(arr1));

//7
function swapCase(str) {

  let result = "";

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } 
    else {
      result += str[i].toUpperCase();
    }

  }

  return result;
}
console.log(swapCase("The Quick Brown Fox"));

//8
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th","st","nd","rd"];

for (let i = 0; i < color.length; i++) {

  let num = i + 1;
  let ordinal;

  if (num === 1) {
    ordinal = num + o[1];
  } 
  else if (num === 2) {
    ordinal = num + o[2];
  } 
  else if (num === 3) {
    ordinal = num + o[3];
  } 
  else {
    ordinal = num + o[0];
  }

  console.log(ordinal + " choice is " + color[i]);
}

//9
function sumArrays(a1, a2) {

  let result = [];
  let maxLength = Math.max(a1.length, a2.length);

  for (let i = 0; i < maxLength; i++) {

    let val1 = a1[i] || 0;
    let val2 = a2[i] || 0;

    result.push(val1 + val2);
  }

  return result;
}

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

console.log(sumArrays(array1, array2));
function greet(name) {
    return "Hello, " + name + "!";
}

let greet2 = function(name) {
    return "Hello, " + name + "!";
};

let greet3 = (name) => {
    return "Hello, " + name + "!";
};

let greet4 = name => "Hello, " + name + "!";

function greet5(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Ali"));
console.log(greet2("Ali"));
console.log(greet3("Ali"));
console.log(greet4("Ali"));
console.log(greet5("Ali"));

//2
function isPrime(n) {
    if (n <= 1) return false;

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;

//3
function countDigits(n) {
    let count = 0;

    if (n === 0) return 1;

    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

//4
function isPalindrome(n) {
    let original = n;
    let reversed = 0;

    while (n > 0) {
        let digit = n % 10;
        reversed = reversed * 10 + digit;
        n = Math.floor(n / 10);
    }

    if (original === reversed) {
        return true;
    } else {
        return false;
    }
}

//5
function isArmstrong(n) {
    let original = n;
    let sum = 0;
    let digits = 0;
    let temp = n;

    while (temp > 0) {
        temp = Math.floor(temp / 10);
        digits++;
    }

    temp = n;

    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    if (sum === original) {
        return true;
    } else {
        return false;
    }
}
//6
function createCounter(start) {
  let count = start;   

  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount
  };
}

const counter = createCounter(10);

counter.increment();
counter.increment();
console.log(counter.getCount()); 

counter.decrement();
console.log(counter.getCount()); 
//7
function once(fn) {
  let called = false;

  return function() {
    if (!called) {
      called = true;
      return fn();
    }
  };
}

function greet() {
  console.log("Hello!");
}

const run = once(greet);

run(); 
run(); 
run(); 
//8
function lazyAdder(a) {
  return function(b) {
    return a + b;
  };
}


const add5 = lazyAdder(5);

console.log(add5(10)); 
console.log(add5(20))