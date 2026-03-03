// Challane 1
// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Ali"));

//  Function Expression
const greet2 = function(name) {
  return "Hello, " + name + "!";
};
console.log(greet2("Vali"));

//  Arrow Function
const greet3 = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet3("Hasan"));

//  IIFE
const greet4 = (function() {
  return function(name) {
    return "Hello, " + name + "!";
  };
})();
console.log(greet4("Husan"));

//  Function Constructor
const greet5 = new Function("name", "return 'Hello, ' + name + '!';");
console.log(greet5("Aziza"));

// Challang2 2
function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));  
console.log(isPrime(10));


// Challane 3

function countDigits(n) {
  var num = Math.abs(n);
  var str = num.toString();
  return str.length;
}

console.log(countDigits(12345));
console.log(countDigits(-9876));

// Challange 4

function isPalindrome(n) {
  var str = n.toString();
  var reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));

// Challange 5

function isArmstrong(n) {
  var str = n.toString();
  var power = str.length;
  var sum = 0;

  for (var i = 0; i < str.length; i++) {
    var digit = Number(str[i]);
    sum = sum + Math.pow(digit, power);
  }

  return sum === n;
}

console.log(isArmstrong(153));
console.log(isArmstrong(123));


// Challane 6

function createCounter(start) {
  var count = start;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

var counter = createCounter(5);

counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());