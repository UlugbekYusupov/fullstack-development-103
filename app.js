//1
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
