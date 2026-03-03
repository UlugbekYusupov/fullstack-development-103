// ----------Functions---------------
// challange 1

function greet(name) {
    return "Hello, " + name;
}

// challamge 2

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Challange 3

function countDigits(n) {
  let count = 0;

  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count;
}

// challange 4

function isPalindrome(n) {
  let str = n.toString();
  let reversed = str.split("").reverse().join("");

  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

// Challange 5

function isArmstrong(n) {
  let str = n.toString();
  let power = str.length;
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum = sum + Number(str[i]) ** power;
  }

  if (sum === n) {
    return true;
  } else {
    return false;
  }
}