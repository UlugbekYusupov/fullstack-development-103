// 1) Largest of two numbers
function largestOfTwo(a, b) {
    // Explain the logic clearly for a junior developer
    if (a === b) {
        console.log(`Both numbers are equal: ${a}`);
        return a;
    }

    if (a > b) {
        console.log(`Largest of ${a} and ${b} is ${a}`);
        return a;
    }

    console.log(`Largest of ${a} and ${b} is ${b}`);
    return b;
}

// 2) Sign of three numbers
function signOfThree(a, b, c) {
    // If any number is zero, the overall sign is 0
    if (a === 0 || b === 0 || c === 0) {
        console.log(`Numbers: ${a}, ${b}, ${c} -> The sign is 0`);
        return '0';
    }

    // Count how many negatives there are
    let negativeCount = 0;
    if (a < 0) negativeCount += 1;
    if (b < 0) negativeCount += 1;
    if (c < 0) negativeCount += 1;

    // If there's an odd number of negatives, the product is negative
    let sign;
    if (negativeCount % 2 === 1) {
        sign = '-';
    } else {
        sign = '+';
    }

    console.log(`Numbers: ${a}, ${b}, ${c} -> The sign is ${sign}`);
    return sign;
}

// 3) Sort three numbers in descending order
function sortThreeDescending(a, b, c) {
    // Use an array and the built-in sort with a compare function
    const numbers = [a, b, c];
    numbers.sort(function (x, y) {
        return y - x; // sort descending
    });

    console.log(`Sorted (desc): ${numbers.join(', ')}`);
    return numbers;
}

// 4) Loop from 0 to 15 and log whether each number is odd or even
function evenOddUpTo15() {
    for (let i = 0; i <= 15; i += 1) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

// 5) Loop from 1 to 100
function loopOneToHundred() {
    for (let i = 1; i <= 100; i++) {

        // If number is divisible by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }

        // If number is divisible by 3
        else if (i % 3 === 0) {
            console.log("Fizz");
        }

        // If number is divisible by 5
        else if (i % 5 === 0) {
            console.log("Buzz");
        }

        // Otherwise print the number
        else {
            console.log(i);
        }
    }
}


// 6) Loop through all 3-digit numbers
function loopThreeDigitNumbers() {
    for (let number = 100; number <= 999; number++) {

        let sum = 0;
        let temp = number;

        // Get each digit and calculate cube
        while (temp > 0) {
            let digit = temp % 10;      // Get last digit
            sum += digit * digit * digit; // Cube and add
            temp = Math.floor(temp / 10); // Remove last digit
        }

        // Check if Armstrong
        if (sum === number) {
            console.log(number);
        }
    }
}


largestOfTwo(5, 9);             // Largest of two
signOfThree(3, -7, 2);          // The sign is - (sample from prompt)
sortThreeDescending(0, -1, 4);  // 4, 0, -1 (sample from prompt)
evenOddUpTo15();                // 0..15 odd/even
loopOneToHundred();             // 1..100 Fizz/Buzz/FizzBuzz
loopThreeDigitNumbers();        // 3-digit Armstrong numbers