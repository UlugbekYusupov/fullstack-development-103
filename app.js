
// Challange 1

function first(arr, n) {
  if (arr.length === 0) return [];

  if (n == null) {
    return arr[0];
  }

  if (n < 0) {
    return n;
  }

  return arr.slice(0, n);
}

// Test
console.log(first([7, 9, 0, -2]));       // 7
console.log(first([],3));                // []
console.log(first([7, 9, 0, -2],3));     // [7,9,0]
console.log(first([7, 9, 0, -2],6));     // [7,9,0,-2]
console.log(first([7, 9, 0, -2],-3));    // -3


// Challange 2

function last(arr, n) {
  if (n == null) {
    return arr[arr.length - 1];
  }

  return arr.slice(Math.max(arr.length - n, 0));
}

// Test
console.log(last([7, 9, 0, -2]));       // -2
console.log(last([7, 9, 0, -2],3));     // [9,0,-2]
console.log(last([7, 9, 0, -2],6));     // [7,9,0,-2]


// Challane 3

let myColor = ["Red", "Green", "White", "Black"];

let result = myColor.join(",");

console.log(result);


// Challane 4

function addDash(num) {
  let str = num.toString();
  return str.split("").join("-");
}

console.log(addDash(25468));

// Challange 5

let numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);

// Challange 6


let items = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let counter = {};
let mostItem;
let mostCount = 0;

for (let i = 0; i < items.length; i++) {

  let element = items[i];

  if (counter[element] == null) {
    counter[element] = 1;
  } else {
    counter[element]++;
  }

  if (counter[element] > mostCount) {
    mostCount = counter[element];
    mostItem = element;
  }
}

console.log(mostItem + " (" + mostCount + " times)");


// Challane 7


let text = "The Quick Brown Fox";
let resulttt = "";

for (let i = 0; i < text.length; i++) {

  let letter = text[i];

  if (letter === letter.toUpperCase()) {
    resulttt += letter.toLowerCase();
  } else {
    resulttt += letter.toUpperCase();
  }

}

console.log(result);


// Challange 8

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let suffix = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {

  let number = i + 1;
  let ending;

  if (number == 1) {
    ending = suffix[1];
  } else if (number == 2) {
    ending = suffix[2];
  } else if (number == 3) {
    ending = suffix[3];
  } else {
    ending = suffix[0];
  }

  console.log(number + ending + " choice is " + colors[i]);
}


// Challane 9


let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];

let resultt = [];

let maxLength = Math.max(array1.length, array2.length);

for (let i = 0; i < maxLength; i++) {

  let value1 = array1[i] || 0;
  let value2 = array2[i] || 0;

  resultt.push(value1 + value2);
}

console.log(result);