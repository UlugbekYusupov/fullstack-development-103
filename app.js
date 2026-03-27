
//Challange 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * 2);
// console.log("10" / 2);
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 - null);
// console.log(5 + undefined);

// //Challange 2
// let num = Number("200") + 50
// console.log(num);
// let age = 25 + " years old"
// console.log(age);
// var checking = Boolean("false")
// console.log(checking)
// console.log("10"-true);

// //Challange 3
// const C = 13;
// //C = 30; // TypeError: Assignment to constant variable
// const F = (C * 9/5)+32;
// console.log("Celsius:", C);
// console.log("Faranheit:", F);
// //Bonus
// const userInput = prompt("Enter temperature in Celsius:")
// const convertedF = (Number(userInput)*9/5)+32;
// console.log("Celsius:" + userInput);
// console.log("Farenheit:" + convertedF);

// //Challange 4
// let totalBudget = prompt("Enter your overall budget:(UZS)");
// totalBudget = Number(totalBudget);
// //Expenses
// let exp1 = prompt("Expense 1:(UZS)");
// let exp2 = prompt("Expense 2:(UZS)");
// let exp3 = prompt("Expense 3:(UZS)");
// //Budget - Expenses
// let totalExp = Number(exp1) + Number(exp2) + Number(exp3);
// let remaining = totalBudget - totalExp;
// //Checking Budget
// if(remaining < 0 ){
//     console.log("Warning: You spent too much money!")
// }
// console.log("Remaining: " + remaining.toFixed(2) + " UZS")
//============================================================================================================

//LECTURE 3 
// // Challenge 1
// let number = +prompt("Enter number:");

// let evens = parseInt(number / 2); 
// let odds = number - evens;

// console.log("Evens:", evens);
// console.log("Odds:", odds);

// //Challenge 2 
// let nuM = +prompt("Enter a number:");
// let reversed = 0;

// while (nuM > 0) {
//     let lastDigit = nuM % 10; 
//     reversed = (reversed * 10) + lastDigit; 
//     nuM = Math.floor(nuM / 10); 
// }

// console.log("Reversed number: " + reversed);

// //Challenge 3
// let nUm = +prompt("Enter a number:");
// let maxDigit = 0;

// while (nUm > 0) {
//     let digit = nUm % 10;
//     if (digit > maxDigit) {
//         maxDigit = digit; 
//     }
//     nUm = Math.floor(nUm / 10);
// }

// console.log("The biggest number: " + maxDigit);

// //Challenge 4
// let Num = +prompt("To get sum of numbers:");
// let sum = 0;

// while (Num > 0) {
//     sum += Num % 10;
//     Num = Math.floor(Num / 10);
// }

// console.log("Sum of numbers: " + sum);

// //Challenge 5
// let numBer = +prompt("Enter number:");
// let count = 0;

// if (numBer === 0) count = 1; 

// while (numBer > 0) {
//     numBer = Math.floor(num / 10);
//     count++; 
// }

// console.log("Amout of digits: " + count);

// ==================================================================================================================
// //PRACTICE 1

// const style = document.createElement('style');
// style.textContent = `
//   body { font-family: sans-serif; background-color: #f4f4f4; display: flex; justify-content: center; padding: 20px; }
//   .container { background: white; width: 400px; padding: 20px; border-radius: 8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
//   h2 { text-align: center; }
//   .task-card { border: 1px solid #ddd; padding: 10px; margin-bottom: 10px; border-radius: 5px; position: relative; }
//   .btn-delete { background: red; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px; }
//   .status { position: absolute; top: 10px; right: 10px; padding: 2px 8px; border-radius: 10px; font-size: 12px; color: white; }
//   .pending { background: orange; }
//   .in-progress { background: blue; }
//   .completed { background: green; }
//   .add-btn { width: 100%; background: #007bff; color: white; border: none; padding: 10px; cursor: pointer; border-radius: 5px; margin-top: 10px; }
  
//   /* Modal oynasi */
//   .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); justify-content: center; align-items: center; }
//   .modal-content { background: white; padding: 20px; border-radius: 8px; width: 300px; display: flex; flex-direction: column; gap: 10px; }
// `;
// document.head.appendChild(style);

//PRACTICE 2

// const styleElement = document.createElement('style');
// styleElement.textContent = `
//     body {
//         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         background-color: #f0f2f5;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//     }

//     .card {
//         background-color: white;
//         padding: 30px;
//         border-radius: 12px;
//         box-shadow: 0 4px 15px rgba(0,0,0,0.1);
//         width: 350px;
//         text-align: center;
//         transition: all 0.3s ease;
//     }

//     .card-title {
//         font-size: 22px;
//         font-weight: 700;
//         color: #1c1e21;
//         margin-bottom: 20px;
//     }

//     .input-field {
//         width: 100%;
//         padding: 12px;
//         font-size: 16px;
//         border: 2px solid #ddd;
//         border-radius: 8px;
//         box-sizing: border-box; /* Padding ichida qoladi */
//         transition: border-color 0.3s ease;
//         margin-bottom: 15px;
//     }

//     .input-field:focus {
//         outline: none;
//         border-color: #1877f2; /* Moviy rang fikus bo'lganda */
//     }

//     /* Kuchlilik darajasi tugmasi */
//     .strength-badge {
//         display: inline-block;
//         padding: 8px 20px;
//         font-size: 14px;
//         font-weight: bold;
//         color: white;
//         border-radius: 6px;
//         margin-top: 5px;
//         opacity: 0; /* Boshida ko'rinmaydi */
//         transition: opacity 0.3s ease, background-color 0.3s ease;
//     }

//     /* Darajalar uchun klasslar */
//     .weak {
//         background-color: #dc3545; /* Qizil */
//         opacity: 1;
//     }

//     .medium {
//         background-color: #ffc107; /* Sariq */
//         color: black;
//         opacity: 1;
//     }

//     .strong {
//         background-color: #198754; /* Yashil */
//         opacity: 1;
//     }
// `;
// document.head.appendChild(styleElement);

// const card = document.createElement('div');
// card.className = 'card';

// const title = document.createElement('h2');
// title.className = 'card-title';
// title.textContent = 'Password Strength Checker';
// card.appendChild(title);

// const passwordInput = document.createElement('input');
// passwordInput.type = 'password';
// passwordInput.className = 'input-field';
// passwordInput.placeholder = 'Enter password';
// card.appendChild(passwordInput);

// const strengthBadge = document.createElement('span');
// strengthBadge.className = 'strength-badge';
// strengthBadge.textContent = 'Weak'; // Boshlang'ich matn
// card.appendChild(strengthBadge);

// document.body.appendChild(card);

// function checkPasswordStrength(password) {
//     let score = 0;

//     if (password.length === 0) return 0;

//     if (password.length >= 8) score++;

//     if (/[a-zA-Z]/.test(password)) score++;

//     if (/\d/.test(password)) score++;

//     return score; 
// }

// passwordInput.addEventListener('input', function() {
//     const password = this.value;
//     const strength = checkPasswordStrength(password);

//     strengthBadge.classList.remove('weak', 'medium', 'strong');
    
//     if (password.length === 0) {
//         strengthBadge.style.opacity = '0';
//         return;
//     }

//     if (strength === 0 || strength === 1) {
//         strengthBadge.textContent = 'Weak';
//         strengthBadge.classList.add('weak');
//     } else if (strength === 2) {
//         strengthBadge.textContent = 'Medium';
//         strengthBadge.classList.add('medium');
//     } else if (strength === 3) {
//         strengthBadge.textContent = 'Strong';
//         strengthBadge.classList.add('strong');
//     }
// });

// //PRACTICE 3
// const style = document.createElement('style');
// style.textContent = `
//   body { display: flex; justify-content: space-around; align-items: center; height: 100vh; background-color: #f5f5f5; font-family: sans-serif; }
  
//   /* Calculator sytle */
//   .calc-container { background: white; padding: 20px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); width: 280px; }
//   .display { width: 100%; height: 50px; background: #f9f9f9; border-radius: 8px; margin-bottom: 20px; text-align: right; padding: 10px; box-sizing: border-box; font-size: 24px; border: 1px solid #eee; }
//   .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
//   button { padding: 15px; font-size: 18px; border: none; border-radius: 8px; cursor: pointer; transition: 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
//   .btn-num { background: white; color: #333; }
//   .btn-op { background: #ff9500; color: white; }
//   .btn-func { background: #ff9500; color: white; }
//   .btn-equal { background: #28a745; color: white; grid-column: span 1; }
//   .btn-zero { grid-column: span 2; background: white; }
//   button:active { transform: scale(0.95); }

//   /* Svetofor stillari */
//   .traffic-light { background: #111; padding: 15px; border-radius: 20px; display: flex; flex-direction: column; gap: 15px; }
//   .light { width: 60px; height: 60px; border-radius: 50%; background: #333; transition: 0.3s; }
//   .red-active { background: #ff3b30; box-shadow: 0 0 20px #ff3b30; }
//   .yellow-active { background: #ffcc00; box-shadow: 0 0 20px #ffcc00; }
//   .green-active { background: #4cd964; box-shadow: 0 0 20px #4cd964; }
// `;
// document.head.appendChild(style);

// const calcContainer = document.createElement('div');
// calcContainer.className = 'calc-container';

// const display = document.createElement('div');
// display.className = 'display';
// display.innerText = '0';
// calcContainer.appendChild(display);

// const grid = document.createElement('div');
// grid.className = 'grid';

// const buttons = [
//   'C', 'DEL', '%', '÷',
//   '7', '8', '9', '×',
//   '4', '5', '6', '-',
//   '1', '2', '3', '+',
//   '0', '.', '='
// ];

// buttons.forEach(text => {
//   const btn = document.createElement('button');
//   btn.innerText = text;
  
//   if (text === '0') btn.className = 'btn-zero btn-num';
//   else if (text === '=') btn.className = 'btn-equal';
//   else if (['÷', '×', '-', '+'].includes(text)) btn.className = 'btn-op';
//   else if (['C', 'DEL', '%'].includes(text)) btn.className = 'btn-func';
//   else btn.className = 'btn-num';

//   btn.onclick = () => {
//     if (text === 'C') display.innerText = '0';
//     else if (display.innerText === '0') display.innerText = text;
//     else display.innerText += text;
//   };

//   grid.appendChild(btn);
// });

// calcContainer.appendChild(grid);
// document.body.appendChild(calcContainer);

// //Practice 4

// const trafficLight = document.createElement('div');
// trafficLight.className = 'traffic-light';

// const red = document.createElement('div');
// red.className = 'light';
// const yellow = document.createElement('div');
// yellow.className = 'light';
// const green = document.createElement('div');
// green.className = 'light';

// trafficLight.append(red, yellow, green);
// document.body.appendChild(trafficLight);

// let step = 0;
// function changeLight() {
//   red.classList.remove('red-active');
//   yellow.classList.remove('yellow-active');
//   green.classList.remove('green-active');

//   if (step === 0) {
//     red.classList.add('red-active');
//     step = 1;
//   } else if (step === 1) {
//     yellow.classList.add('yellow-active');
//     step = 2;
//   } else {
//     green.classList.add('green-active');
//     step = 0;
//   }
// }

// setInterval(changeLight, 2000); 
// changeLight();


// const style = document.createElement('style');
// style.textContent = `
//     body {
//         font-family: 'Arial', sans-serif;
//         background-color: #f0f2f5;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//     }
//     .form-card {
//         background: white;
//         padding: 40px;
//         border-radius: 12px;
//         box-shadow: 0 4px 20px rgba(0,0,0,0.08);
//         width: 380px;
//         text-align: center;
//     }
//     h2 {
//         font-size: 28px;
//         margin-bottom: 25px;
//         color: #000;
//     }
//     input {
//         width: 100%;
//         padding: 12px 15px;
//         margin-bottom: 15px;
//         border: 1px solid #ccc;
//         border-radius: 6px;
//         font-size: 14px;
//         box-sizing: border-box;
//     }
//     .submit-btn {
//         width: 100%;
//         padding: 12px;
//         background-color: #007bff;
//         color: white;
//         border: none;
//         border-radius: 6px;
//         font-size: 16px;
//         font-weight: bold;
//         cursor: pointer;
//         margin-top: 10px;
//     }
//     .toggle-link {
//         color: #007bff;
//         text-decoration: none;
//         display: block;
//         margin-top: 20px;
//         font-size: 14px;
//         cursor: pointer;
//     }
//     .login-outline-btn {
//         width: 100%;
//         padding: 10px;
//         background: white;
//         color: #007bff;
//         border: 1px solid #007bff;
//         border-radius: 6px;
//         margin-top: 15px;
//         cursor: pointer;
//         font-size: 14px;
//     }
// `;
// document.head.appendChild(style);


// const container = document.createElement('div');
// document.body.appendChild(container);

// function renderSignUp() {
//     container.innerHTML = `
//         <div class="form-card">
//             <h2>Sign Up</h2>
//             <input type="text" placeholder="Username">
//             <input type="email" placeholder="Email">
//             <input type="password" placeholder="Password">
//             <button class="submit-btn">Submit</button>
//             <a class="toggle-link" id="toLogin">Already have an account? Login</a>
//         </div>
//     `;
//     document.getElementById('toLogin').onclick = renderLogin;
// }

// function renderLogin() {
//     container.innerHTML = `
//         <div class="form-card">
//             <h2>Login</h2>
//             <input type="email" placeholder="Email">
//             <input type="password" placeholder="Password">
//             <button class="submit-btn">Submit</button>
//             <button class="login-outline-btn" id="toSignUp">Don't have an account? Sign Up</button>
//         </div>
//     `;
//     document.getElementById('toSignUp').onclick = renderSignUp;
// }

// renderSignUp();

// const style = document.createElement('style');
// style.textContent = `
//     body { font-family: 'Segoe UI', sans-serif; background-color: #f8f9fa; display: flex; justify-content: center; gap: 30px; padding: 50px; }
//     .card { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); width: 400px; }
//     .leaderboard-card { width: 500px; }
//     h3 { text-align: center; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; gap: 10px; }
//     input { width: 100%; padding: 10px; margin-bottom: 12px; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; }
//     .btn { width: 100%; padding: 12px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; margin-bottom: 10px; color: white; background-color: #007bff; }
//     table { width: 100%; border-collapse: collapse; margin-top: 15px; font-size: 14px; }
//     th { background-color: #007bff; color: white; padding: 10px; border: 1px solid #ddd; }
//     td { padding: 10px; border: 1px solid #ddd; text-align: center; }
//     .best-team { background-color: #d4edda !important; font-weight: bold; }
// `;
// document.head.appendChild(style);


// const addTeamCard = document.createElement('div');
// addTeamCard.className = 'card';
// addTeamCard.innerHTML = `
//     <h3>🏆 Add New Team</h3>
//     <input type="text" id="tName" placeholder="Team Name">
//     <input type="number" id="tWins" placeholder="Wins">
//     <input type="number" id="tLosses" placeholder="Losses">
//     <input type="number" id="tScored" placeholder="Goals Scored">
//     <input type="number" id="tConceded" placeholder="Goals Conceded">
//     <button class="btn" id="addBtn">Add Team</button>
// `;
// document.body.appendChild(addTeamCard);


// const boardCard = document.createElement('div');
// boardCard.className = 'card leaderboard-card';
// boardCard.innerHTML = `
//     <h3>🏆 Sports Tournament Leaderboard</h3>
//     <button class="btn" id="sortBtn">Sort by Ranking</button>
//     <button class="btn" id="highlightBtn">Highlight Best Team</button>
//     <table id="teamTable">
//         <thead>
//             <tr>
//                 <th>Rank</th>
//                 <th>Team</th>
//                 <th>Wins</th>
//                 <th>Losses</th>
//                 <th>Points</th>
//                 <th>Goal Diff</th>
//             </tr>
//         </thead>
//         <tbody></tbody>
//     </table>
// `;
// document.body.appendChild(boardCard);

// // ==========================================
// // 3. Mantiq va Ma'lumotlar
// // ==========================================
// let teams = [
//     { name: "Team A", wins: 5, losses: 2, scored: 15, conceded: 8 },
//     { name: "Team B", wins: 3, losses: 4, scored: 10, conceded: 12 },
//     { name: "Team C", wins: 7, losses: 1, scored: 20, conceded: 7 }
// ];

// function updateTable() {
//     const tbody = document.querySelector('#teamTable tbody');
//     tbody.innerHTML = '';

//     teams.forEach((team, index) => {
//         const points = team.wins * 3;
//         const goalDiff = team.scored - team.conceded;
//         const tr = document.createElement('tr');
//         tr.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${team.name}</td>
//             <td>${team.wins}</td>
//             <td>${team.losses}</td>
//             <td>${points}</td>
//             <td>${goalDiff}</td>
//         `;
//         tbody.appendChild(tr);
//     });
// }

// // Jamoa qo'shish
// document.getElementById('addBtn').onclick = () => {
//     const name = document.getElementById('tName').value;
//     const wins = +document.getElementById('tWins').value;
//     const losses = +document.getElementById('tLosses').value;
//     const scored = +document.getElementById('tScored').value;
//     const conceded = +document.getElementById('tConceded').value;

//     if (name) {
//         teams.push({ name, wins, losses, scored, conceded });
//         updateTable();
//         // Inputlarni tozalash
//         document.querySelectorAll('input').forEach(i => i.value = '');
//     }
// };

// // Saralash (Ochko bo'yicha)
// document.getElementById('sortBtn').onclick = () => {
//     teams.sort((a, b) => (b.wins * 3) - (a.wins * 3));
//     updateTable();
// };

// // Eng yaxshi jamoani ajratib ko'rsatish
// document.getElementById('highlightBtn').onclick = () => {
//     updateTable();
//     const rows = document.querySelectorAll('#teamTable tbody tr');
//     let bestIdx = 0;
//     let maxPoints = -1;

//     teams.forEach((team, i) => {
//         let p = team.wins * 3;
//         if (p > maxPoints) {
//             maxPoints = p;
//             bestIdx = i;
//         }
//     });
//     rows[bestIdx].classList.add('best-team');
// };

// // Boshlang'ich jadvalni yuklash
// updateTable();

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

