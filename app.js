// const user = {
//   name: "Ulugbek",
// };

// const userr = user;

// console.log(user === userr);

const user = {
  username: "Ulugbek",
  age: 20,
  country: "Uzbekistan",
};

const keys = Object.keys(user);
const values = Object.values(user);

// console.log(values);

// for (const key in user) {
//   const element = user[key];
//   console.log(element);
// }

// for (const element of user) {
//   console.log(element);
// }

// let number = Number(prompt("Sonni kiriting :"));
// let res = 0;
// while (number > 0){
//     let lastDigit = number % 10;
//     res = res * 10 + lastDigit;
//     number = Math.floor(number / 10);

// }
// console.log(res)

// let usrNum = Number(prompt("give a num: "));
// let maxNum = 0;

// while (usrNum > 0) {
//   let lastDigit = usrNum % 10;
//   if (maxNum < lastDigit) {
//     maxNum = lastDigit;
//   }
//   usrNum = Math.floor(usrNum / 10);
// }

// console.log(maxNum);

function outer() {
  let username = "Ulugbek";

  function inner() {
    let fullname = username + "Yusupov";
    console.log(fullname);
  }
  inner();
}

outer();

sum();

function sum(a, b) {
  return a + b;
}

let express = function () {};

express();

let arrow = () => {};

(function (a, b) {
  console.log(a + b);
})(3, 4);

console.log(Array(2));

let s = new Function("a", "b", "return a + b");

console.log(s(10, 20));

