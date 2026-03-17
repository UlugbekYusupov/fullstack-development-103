// // // // const user = {
// // // //   name: "Ulugbek",
// // // // };

// // // // const userr = user;

// // // // console.log(user === userr);

// // // // const user = {
// // // //   username: "Ulugbek",
// // // //   age: 20,
// // // //   country: "Uzbekistan",
// // // // };

// // // // const keys = Object.keys(user);
// // // // const values = Object.values(user);

// // // // console.log(values);

// // // // for (const key in user) {
// // // //   const element = user[key];
// // // //   console.log(element);
// // // // }

// // // // for (const element of user) {
// // // //   console.log(element);
// // // // }

// // // // let number = Number(prompt("Sonni kiriting :"));
// // // // let res = 0;
// // // // while (number > 0){
// // // //     let lastDigit = number % 10;
// // // //     res = res * 10 + lastDigit;
// // // //     number = Math.floor(number / 10);

// // // // }
// // // // console.log(res)

// // // // let usrNum = Number(prompt("give a num: "));
// // // // let maxNum = 0;

// // // // while (usrNum > 0) {
// // // //   let lastDigit = usrNum % 10;
// // // //   if (maxNum < lastDigit) {
// // // //     maxNum = lastDigit;
// // // //   }
// // // //   usrNum = Math.floor(usrNum / 10);
// // // // }

// // // // console.log(maxNum);

// // // // function outer() {
// // // //   let username = "Ulugbek";

// // // //   function inner() {
// // // //     let fullname = username + "Yusupov";
// // // //     console.log(fullname);
// // // //   }
// // // //   inner();
// // // // }

// // // // outer();

// // // // sum();

// // // // function sum(a, b) {
// // // //   return a + b;
// // // // }

// // // // let express = function () {};

// // // // express();

// // // // let arrow = () => {};

// // // // (function (a, b) {
// // // //   console.log(a + b);
// // // // })(3, 4);

// // // // console.log(Array(2));

// // // // let s = new Function("a", "b", "return a + b");

// // // // console.log(s(10, 20));

// // // // let colors = ["Greem", "Blue", "Red"];
// // // // console.log(colors[0], colors[1], colors[2]);

// // // // let nums = new Array(5);
// // // // console.log(nums.length);
// // // // let names = new Array("Bob", "Alice");
// // // // console.log(names);

// // // // let original = [1, 2, 3];
// // // // let copy = [...original];
// // // // console.log(copy);

// // // // let numbers = Array.of(5);
// // // // console.log(numbers);

// // // // function sum(...rest) {
// // // //   console.log(rest[0] + rest[1]);
// // // // }

// // // // sum(3, 4);

// // // // const users = {
// // // //   name: "Ulugbek",
// // // //   email: "nimadir@gmail.com",
// // // // };

// // // // const { name: nimadir, email: buyamnimadir } = { ...users };

// // // // console.log(nimadir);

// // // // let prices = ["100", "200", "700"];

// // // // const updatedPrices = prices.map(function (value, index) {
// // // //   return value > 5;
// // // // });

// // // // console.log(updatedPrices);

// // // // const words = ["spray", "elite", "exuberant", "destruction", "present"];

// // // // const result = words.filter((word) => word.length > 6);

// // // // console.log(result);

// // // // const array = [1, 4, 9, 16];

// // // // // Pass a function to map
// // // // const mapped = array.map((x) => x * 2);

// // // // console.log(mapped);

// // // // const array = [1, 2, 3, 4];

// // // // const initialValue = 0;

// // // // const sumWithInitial = array.reduce(
// // // //   (accumulator, currentValue) => accumulator + currentValue,
// // // //   initialValue,
// // // // );

// // // // console.log(sumWithInitial);

// // // // const animals = ["ant", "bison", "camel", "duck", "elephant"];

// // // // console.log(animals.slice(2));
// // // // console.log(animals.slice(2, 4));
// // // // console.log(animals.slice(1, 5));
// // // // console.log(animals.slice(-2));
// // // // console.log(animals.slice(2, -1));
// // // // console.log(animals.slice());

// // // // const months = ["Jan", "March", "April", "June"];

// // // // months.splice(1, 100, "Feb");

// // // // console.log(months);

// // // // months.splice(4, 1, "May");
// // // // console.log(months);

// // // // challenge 1 (Abdulloh)
// // // // function first(arr, n = 1) {
// // // //   if (arr.length === 0) {
// // // //     return arr;
// // // //   }

// // // //   if (n < 0) {
// // // //     return n;
// // // //   } else if (n == 1) {
// // // //     return arr[0];
// // // //   }

// // // //   return arr.slice(0, n);
// // // // }
// // // // console.log(first([7, 9, 0, -2]));
// // // // console.log(first([], 3));
// // // // console.log(first([7, 9, 0, -2], 3));
// // // // console.log(first([7, 9, 0, -2], 6));
// // // // console.log(first([7, 9, 0, -2], -3));

// // // // function SecondElements(array, n = 1) {
// // // //   return array.slice(-n);
// // // // }
// // // // const arr = [1, 2, 3, 4, 5];
// // // // console.log(SecondElements(arr));
// // // // console.log(SecondElements(arr, 3));
// // // // // challenge 3
// // // // let myсolor = ["Red", "Green", "White", "Black"];
// // // // let results = myсolor.join(",");
// // // // console.log(results);

// // // // // let num = String(+prompt("Enter numbers: "));
// // // // // let result = num.split("").join("-");
// // // // // console.log(result);

// // // // // let arr1=[-3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// // // // // let result=arr1.sort((a, b)=> a-b)
// // // // // console.log(result)

// // // // let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// // // // function mostFrequentItem(arr) {
// // // //   let mostCommon = 0;
// // // //   let commonVal;

// // // //   for (let i = 0; i < arr.length; i++) {
// // // //     let count = 0;

// // // //     for (let j = 1; j < arr.length; j++) {
// // // //       if (arr[i] === arr[j]) {
// // // //         count += 1;
// // // //       }
// // // //       if (count > mostCommon) {
// // // //         mostCommon = count;
// // // //         commonVal = arr[i];
// // // //       }
// // // //     }
// // // //   }
// // // //   return `Most common value is: ${commonVal}, it repeated: ${mostCommon} times`
// // // // }

// // // // console.log(mostFrequentItem(arr1));

// // // // let InputString = prompt("Enter str: ")
// // // // function ChangeText() {
// // // //   let result = ''
// // // //   for (let letter of InputString) {
// // // //     if (letter === letter.toLowerCase()) {
// // // //       result += letter.toUpperCase()
// // // //     }
// // // //     else {
// // // //       result += letter.toLowerCase()
// // // //     }

// // // //   }
// // // //   return result
// // // // }
// // // // console.log(ChangeText(InputString));

// // // let car = {
// // //   brand: "Tesla",
// // //   model: "Model Y",
// // //   year: 2026,
// // //   start: function () {
// // //     console.log("Starting...");
// // //   },
// // // };

// // // console.log(car.brand);

// // // car.start();

// // // let person = new Object();

// // // person.name = "Ulugbek";
// // // person.age = 30;

// // // person.greet = function () {
// // //   return `Hello my name is ${this.name}, and i am ${this.age} years old!`;
// // // };

// // // console.log(person.greet());

// // // function createPerson(name, age) {
// // //   return {
// // //     name,
// // //     age,
// // //     greet() {
// // //       return `Hello my name is ${this.name}, and i am ${this.age} years old!`;
// // //     },
// // //   };
// // // }

// // // let person1 = createPerson("Abdulloh", 23);
// // // console.log(person1.greet());

// // // function Person(age, name) {
// // //   this.age = age;
// // //   this.name = name;

// // //   this.greet = function () {
// // //     return `Hello my name is ${this.name}, and i am ${this.age} years old!`;
// // //   };
// // // }

// // // let p = new Person(40, "kimdir");
// // // console.log(p.greet());

// // // let animal = {
// // //   type: "mammals",
// // //   makeSound() {
// // //     console.log("making sound loud out");
// // //   },
// // // };

// // // let dog = Object.create(animal);

// // // console.log(dog.type);

// // // class People {
// // //   constructor(name, age) {
// // //     ((this.name = name), (this.age = age));
// // //   }
// // //   greet() {
// // //     return `Hello my name is ${this.name}, and i am ${this.age} years old!`;
// // //   }
// // // }

// // // let p2 = new People("kimdirov", 50);

// // // console.log(p2.greet());

// // // let config = Object.freeze({
// // //   theme: "dark",
// // //   version: "1.0.0",
// // // });
// // // config.theme = "light";

// // // config = 12;

// // // console.log(config["theme"]);

// // // let key = "score";

// // // let student = {
// // //   [key]: 95,
// // // };

// // // let products = [
// // //   {
// // //     id: 1,
// // //     name: "Laptop",
// // //     price: "400$",
// // //     description: "lorem epsum",
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "Laptop",
// // //     price: "400$",
// // //     description: "lorem epsum",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Laptop",
// // //     price: "400$",
// // //     description: "lorem epsum",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Laptop",
// // //     price: "400$",
// // //     description: "lorem epsum",
// // //   },
// // // ];

// // // console.log(Object.keys(products[0]));
// // // console.log(Object.values(products[0]));
// // // console.log(Object.entries(products[0]));

// // // // [[], [], []];

// // // let targetObj = {
// // //   name: "string",
// // // };

// // // let sourceObj = {
// // //   lastname: "string",
// // // };

// // // Object.assign(targetObj, sourceObj);

// // // console.log(targetObj);

// // function pwdChecker() {
// //   let usrPassword = "Ulugbek9939392@!";
// //   let chars = ",-#$%@*";

// //   let hasChars = false;
// //   let is8len = false;
// //   let isUpperCase = false;
// //   let hasNum = false;
// //   let pwdStrength = 0;

// //   if (usrPassword.length >= 8) {
// //     is8len = true;
// //   }

// //   for (let i in usrPassword) {
// //     let letter = usrPassword[i]
// //     if (letter >= "A" && letter <= "Z") {
// //       isUpperCase = true;
// //     }

// //     if (letter >= "0" && letter <= "9") {
// //       hasNum = true;
// //     }

// //     if (chars.includes(letter)) {
// //       hasChars = true;
// //     }

// //     if (is8len == true) {
// //       pwdStrength++;
// //     }

// //     if (hasChars == true) {
// //       pwdStrength++;
// //     }

// //     if (hasNum == true) {
// //       pwdStrength++;
// //     }

// //     if (isUpperCase == true) {
// //       pwdStrength++;
// //     }
// //   }

// //   console.log(pwdStrength);

// //   if (pwdStrength === 4) {
// //     console.log("Strong");
// //   } else if (pwdStrength == 3) {
// //     alert("medium");
// //   } else {
// //     alert("weak");
// //   }
// // }

// // pwdChecker();

// // chalange 4

// function traficlight(){
//  setTimeout(function(){
//   console.log("Red")
//  }, 2000)

//  setTimeout(function(){
//   console.log("Green")
//  }, 5000)

//  setTimeout(function(){
//   console.log("Yellow")
//  }, 3000)
// }

// traficlight()

// const paragraph = document.createElement("p");

// paragraph.innerHTML = "htmlni ozgartiradi";
// paragraph.textContent = "faqat textni ozgartiradi";

// document.body.appendChild(paragraph);

// const arr = document.getElementsByTagName("h1");

// const h1 = document.getElementById("heading");

// // console.log(arr)

const heading = document.createElement("h1");
heading.textContent = "Bu h1 elementini texti";
document.body.appendChild(heading);

const button = document.createElement("button");
button.textContent = "Click Me!";

button.classList.add("btn");

button.addEventListener("click", function () {
  heading.classList.toggle("heading");
});

document.body.appendChild(button);
