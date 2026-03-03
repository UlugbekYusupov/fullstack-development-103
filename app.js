                                        // Praktist3

// // chalamge1
// let n = 10;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= n; i++) {
//   if (i % 2 == 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }

// console.log("Even:", even);
// console.log("Odd:", odd);

// chalamge2

// let num = 1234;
// let reverse = 0;

// while (num > 0) {
//   let digit = num % 10;
//   reverse = reverse * 10 + digit;
//   num = Math.floor(num / 10);
// }

// console.log("Reverse:", reverse);

// // chalamge3
// let number = 907251;
// let largest = 0;

// while (number > 0) {
//   let digit = number % 10;

//   if (digit > largest) {
//     largest = digit;
//   }

//   number = Math.floor(number / 10);
// }

// console.log("Largest digit:", largest);

// // chalamge4

// let num2 = 1234;
// let sum = 0;

// while (num2 > 0) {
//   let digit = num2 % 10;
//   sum = sum + digit;
//   num2 = Math.floor(num2 / 10);
// }

// console.log("Sum of digits:", sum);

// // chalamge5

// let num3 = 12345;
// let count = 0;

// while (num3 > 0) {
//   num3 = Math.floor(num3 / 10);
//   count++;
// }

// console.log("Number of digits:", count);



//                                           Lecture4
// challange1
function greet(name) {
  return "Hello, " + name + "!";
}

// challenge2

function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// challenge3
function countDigits(n) {
  return Math.abs(n).toString().length;
}

// challenge4
function isPalindrome(n) {
  let str = n.toString();
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

// challenge5
function isArmstrong(n) {
  let str = n.toString();
  let power = str.length;
  let sum = 0;

  for (let digit of str) {
    sum += Math.pow(Number(digit), power);
  }

  return sum === n;
}

// challenge6
function createCounter(start) {
  let count = start;

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

// challenge7

function orderFood(name, address, food) {
  return `Dear ${name}, your ordered food (${food}) will be ready in 15 minutes and will be delivered to your address (${address}).`;
}

// challenge8
function lazyAdder(a) {
  return function(b) {
    return a + b;
  };
}

                                    // ASSIGNMENT
function calculateTotal(price, quantity) {
  let total = price * quantity;

  if (quantity >= 5) {
    total = total * 0.8;
  } else if (quantity >= 3) {
    total = total * 0.9;
  }

  return total;
}
// CHALLENGE2
function checkPassword(password) {
  let hasUpper = false;
  let hasNumber = false;
  let hasSpecial = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];

    if (char >= "A" && char <= "Z") {
      hasUpper = true;
    } else if (char >= "0" && char <= "9") {
      hasNumber = true;
    } else if (!((char >= "a" && char <= "z"))) {
      hasSpecial = true;
    }
  }

  if (password.length >= 8 && hasUpper && hasNumber && hasSpecial) {
    return "Strong";
  } else if (password.length >= 6 && (hasUpper || hasNumber)) {
    return "Medium";
  } else {
    return "Weak";
  }
}
// CHALLENGE3

function withdraw(amount) {
  if (amount % 10 !== 0) {
    return "Error: Amount must be multiple of 10";
  }

  let result = "";

  let hundreds = Math.floor(amount / 100);
  amount = amount % 100;

  let twenties = Math.floor(amount / 20);
  amount = amount % 20;

  let tens = Math.floor(amount / 10);

  if (hundreds > 0) result += hundreds + "x $100 ";
  if (twenties > 0) result += twenties + "x $20 ";
  if (tens > 0) result += tens + "x $10 ";

  return result;
}

// CHALLENGE6
function bankAccount(startBalance) {
  let balance = startBalance;

  return {
    deposit: function(amount) {
      if (amount <= 0) return "Deposit amount must be positive";
      balance += amount;
      return "Deposited: $" + amount;
    },

    withdraw: function(amount) {
      if (amount <= 0) return "Withdraw amount must be positive";
      if (amount > balance) return "Not enough balance";
      balance -= amount;
      return "Withdrew: $" + amount;
    },

    viewBalance: function() {
      return "Balance: $" + balance;
    }
  };
}

// CHALLENGE7

function createUser(name, role) {
  return {
    name: name,
    role: role,

    canAdd: function() {
      return role === "admin";
    },

    canEdit: function() {
      return role === "admin" || role === "editor";
    },

    canDelete: function() {
      return role === "admin";
    },

    canView: function() {
      return role === "admin" || role === "editor" || role === "viewer";
    }
  };
}

// CHALLENGE8
function calculateTax(income) {
  if (income < 10000) {
    return 0;
  } else if (income <= 50000) {
    return income * 0.10;
  } else {
    return income * 0.20;
  }
}
