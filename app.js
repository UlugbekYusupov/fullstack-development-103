// lecture 6
// challenge 1

function first(arr, n) {
  if (arr.length === 0) return [];

  if (n === undefined) {
    return arr[0];
  }

  if (n < 0) {
    return [];
  }

  return arr.slice(0, n);
}
console.log(first([7, 9, 0, -2]));      // 7
console.log(first([], 3));              // []
console.log(first([7, 9, 0, -2], 3));   // [7,9,0]
console.log(first([7, 9, 0, -2], 6));   // [7,9,0,-2]
console.log(first([7, 9, 0, -2], -3));  // []

// challenge2
function last(arr, n) {
  if (arr.length === 0) return [];

  if (n === undefined) {
    return arr[arr.length - 1];
  }

  return arr.slice(Math.max(arr.length - n, 0));
}
console.log(last([7, 9, 0, -2]));      // -2
console.log(last([7, 9, 0, -2], 3));   // [9,0,-2]
console.log(last([7, 9, 0, -2], 6));   // [7,9,0,-2]

// challenge3
let myColor = ["Red", "Green", "White", "Black"];

let result = myColor.join(",");

console.log(result);

// challenge4
function insertDash(num) {
  let str = num.toString();
  let result = str.split("").join("-");
  return result;
}

console.log(insertDash(25468));

// challenge 5
var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

arr1.sort(function(a, b){
  return a - b;
});

console.log(arr1);

// challenge 6
var arr1 = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];

let count = {};
let max = 0;
let mostFrequent;

for(let i = 0; i < arr1.length; i++){

  let item = arr1[i];

  if(count[item] == null){
    count[item] = 1;
  }else{
    count[item]++;
  }

  if(count[item] > max){
    max = count[item];
    mostFrequent = item;
  }
}

console.log(mostFrequent + " (" + max + " times)");

// challenge 7
function swapCase(str){

  let result = "";

  for(let i = 0; i < str.length; i++){

    let char = str[i];

    if(char === char.toUpperCase()){
      result += char.toLowerCase();
    }else{
      result += char.toUpperCase();
    }

  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));
