// 1
// function greet(name) {
//     return "Hello " + name;
// }

// console.log(greet("Ali")); 




// 2
// function isPrime(n) {

//     if (n <= 1) {
//         return false;
//     }

//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }



// 3
// function countDigits(n) {
//     return n.toString().length;
// }




// 4
// function isPalindrome(n) {

//     let number = n.toString();
//     let reversed = "";

//     for (let i = number.length - 1; i >= 0; i--) {
//         reversed = reversed + number[i];
//     }

//     return number === reversed;
// }




// 5
function isArmstrong(n) {

    let number = n.toString();
    let sum = 0;

    for (let i = 0; i < number.length; i++) {
        let digit = Number(number[i]);
        sum = sum + digit * digit * digit;
    }

    return sum === n;
}
