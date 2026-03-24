// Challenge 1
// console.log("5" + 5);
// console.log("5" - 5);
// console.log("5" * "2");
// console.log("10" / "2");
// console.log(5 + true);
// console.log("10" - true);
// console.log("5" + true);
// console.log(5 + null);
// console.log(5 + undefined);

// Challenge 2
// console.log("200" + 50);
// console.log("25" + "", "years old")
// console.log("false")
// console.log("10" - true)

// Challenge 3
// const celsius = Number(prompt("Enter temperature in Celsius:"));

// let fahrenheit = (celsius * 9/5) + 32;

// console.log("Celsius:", celsius);
// console.log("Fahrenheit:", fahrenheit);

// Challenge 4
// let budget = Number(prompt("Enter your total budget:"));
// let expense1 = Number(prompt("Enter expense 1:"));
// let expense2 = Number(prompt("Enter expens 2:"));
// let expense3 = Number(prompt("Enter expense 3:"));
// let totalExpenses = expense1 + expense2 + expense3;

// let remaining = budget - totalExpenses;

// if (remaining < 0) {
//     console.log("Warning! You have overspent!");
// } else {
//     console.log("You are within your budget.");
// }
// console.log("Remaining money:", remaining);

// Challenge 1
// let number = 11;
// let evenCount = 0;
// let oddCount = 0;
// for (let i = 1; i<= number; i++) {
//     if (i % 2 == 0) {
//         evenCount++;
//     } else {
//         oddCount++;
//     }
// }
// console.log("Even numbers:", evenCount);
// console.log("Odd number;", oddCount);

// Challenge 2
// let number = 1234;   
// let reversed = 0;

// while (number > 0) {

//     let digit = number % 10;   
//     reversed = reversed * 10 + digit;   
//     number = Math.floor(number / 10);   
// }

// console.log(reversed);

// Challenge 3
// let number = 4321;
// let largest = 0;
// while (number > 0) {
//     let digit = number % 10;
//     if (digit > largest) {
//         largest = digit;
//     }
//     number = Math.floor(number / 10)
// }
// console.log("Largest digit:", largest)

// Challeng 4
// let number = 1234;   
// let sum = 0;         
// while (number > 0) {
//     let digit = number % 10;
//     sum = sum + digit;
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits:", sum);

// Challenge 5
// let number = 12345;
// let count = 0;
// while (number > 0) {
//     let digit = number % 10;
//     number = Math.floor(number / 10);
//     count = count + 1;
// }
// console.log("Number of digits:", count);


// Practice
// let number1 = 10;
// let number2 = 25;
// if (number1 > number2) {
//     console.log("Eng katta son:", number1);
// } else if (number2 > number1) {
//     console.log("Eng katta son:", number2);
// } else {
//     console.log("Ikkala son teng");
// }

    

// let a = 3;
// let b = 7;
// let c = 2;

// let product = a * b * c;

// if (product > 0) {
//     alert("The sign is +");
// } else if  (product < 0) {
//     alert("The sign is -");
// } else {
//     alert("The product is 0");
// }

// let numbers = [0, -1, 4];

// numbers.sort(function(a,b) {
//     return b - a;
// });

// alert(numbers.join(","));


// for (let i = 0; i <= 15; i++) {

//     if (i % 2 == 0) {
//         console.log(i + " is even");
//     } else {
//         console.log(i + " is odd ");
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } 
//     else if (i % 3 == 0) {
//         console.log("Fizz");
//     }
//     else if (i % 5 == 0) {
//         console.log("Buzz");
//     } 
//     else {
//         console.log(i ++);
//     }
// }

// for (let num = 100; num <= 999; num++) {

//     let hundreds = Math.floor(num / 100);
//     let tens = Math.floor((num % 100) / 10);
//     let units = num % 10;

//     let sumOfCubes = Math.pow(hundreds, 3) + Math.pow(tens, 3) + Math.pow(units, 3);

//     if (sumOfCubes == num) {
//         console.log(num++)
//     }
// }


// Lesson 6: Array
// function first(arr, n) {
//     if (n < 0) {
//         return n;
//     }
//     if (arr.length === 0) {
//         return [];
//     }
//     if (n === undefined) {
//         return arr[0];
//     }
//     return arr.slice(0, n)
// }
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// function last(arr, n) {
//     if (n === undefined) {
//         return arr[arr.length - 1];
//     }
//     return arr.slice(-n);
// }
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// var myColor = ["Red", "Green", "White", "Black"];
// var result = myColor.join(",");
// console.log(result);


// var num = "025468";
// var result = "";
// for (var i = 0; i < num.length; i++) {
//   result += num[i];
//   if (num[i] % 2 === 0 && num[i+1] % 2 === 0) {
//     result += "-";
//   }

// }

// console.log(result);

// let num = "025468";
// let result = num.split("").join("-");
// console.log(result);

// let arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
// arr1.sort(function(a,b){
//     return a - b;
// })
// console.log(arr1.join(","));

// let str = "The Quick Brown Fox";
// let result = "";
// for (let i = 0; i< str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         result += str[i].toLowerCase();
//     } else {
//         result += str[i].toUpperCase();
//     }
// }
// console.log(result);


// let arr1 = [1, 0, 2, 3, 4];
// let arr2 = [3, 5, 6, 7, 8, 13];
// let result = [];
// let maxLength = Math.max(arr1.length, arr2.lenth);
// for (let i = 0; i < maxLength; i++) {
//     let num1 = arr1[i] || 0;
//     let num2 = arr2[i] || 0;

//     result.push(num1 + num2);
// }
// console.log(result);


// Lecture 7 Object in JS
// let car = {
//     brand: "BMW",
//     model: "Model G",
//     year: 2026,
//     start: function() {
//         console.log("Car is starting now....");
        
//     }
// };
// console.log(car.brand);
// car.start();


// let person = new Object();

// person.name = "Jake";
// person.age = 18;
// person.greet = function() {
//     return `Hi, my name is ${this.name}`;
// };

// console.log(person.greet());

// function createPeople(name,age) {
//     return {
//         name,
//         age,
//         greet() {
//             return `Hi, I am ${this.name}, and I am ${this.age} years old`;
//         }
//     };
// }
// let person1 = createPeople("Tom", 19);
// let person2 = createPeople("Jak", 20)
// console.log(person1.greet());
// console.log(person2.greet());

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function () {
//         return `Hi, I am ${this.name}, and I am ${this.age} years old`;

//     };
// }
// let person1 = new Person("Akmal", 23);
// let person2 = new Person("Islom", 22);
// console.log(person1.greet());
// console.log(person2.greet());

// let animal = {
//     type: "Mammal",
//     makeSound() {
//         console.log("Some animalk sound");
        
//     }
// };
// let dog = Object.create(animal);
// dog.breed = "Golden Retriever";
// dog.makeSound();
// console.log(dog.type);

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     greet() {
//         return `Hello, my name is ${this.name}`;
//     }
// }
// let person1 = new Person("Akmal", 25)
// console.log(person1.greet());

// const config = Object.freeze({
//     theme: "dark",
//     version: "1.0.0"
// });
// config.theme = "light";
// console.log(config.theme);




<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List - DOM Mashqi</title>
    <style>
        /* Oddiy dizayn */
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f5f5f5;
        }

        h2 {
            text-align: center;
            color: #333;
        }

        /* Har bir vazifa kartasi */
        .task {
            background: white;
            border: 1px solid #ddd;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            position: relative;
        }

        .task strong {
            display: block;
            font-size: 18px;
            margin-bottom: 5px;
        }

        .task p {
            color: #666;
            margin: 5px 0;
        }

        /* Status belgilari (rangli) */
        .badge {
            position: absolute;
            top: 15px;
            right: 15px;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: bold;
            color: white;
        }

        .pending { background-color: #ff9800; }
        .in-progress { background-color: #2196f3; }
        .completed { background-color: #4caf50; }

        /* Tugmalar */
        .delete-btn {
            background-color: #f44336;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }

        .delete-btn:hover {
            background-color: #d32f2f;
        }

        .add-btn {
            width: 100%;
            padding: 12px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 20px;
        }

        .add-btn:hover {
            background-color: #1565c0;
        }

        /* Modal oyna (darsdagi oyna) */
        .modal {
            display: none; /* Boshida yashirin */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Qoramtir fon */
        }

        .modal-content {
            background: white;
            width: 90%;
            max-width: 400px;
            margin: 100px auto;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .modal h3 {
            margin-top: 0;
            text-align: center;
        }

        input, textarea, select {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .save-btn {
            width: 100%;
            padding: 10px;
            background-color: #1976d2;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }

        .close-btn {
            width: 100%;
            padding: 10px;
            background-color: #f44336;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 5px;
        }
    </style>
</head>
<body>

    <!-- Asosiy sarlavha -->
    <h2>Interactive To-Do List</h2>

    <!-- Bu yerda barcha vazifalar ko'rsatiladi -->
    <!-- Darsda o'rganganimizdek, bu Container (ota element) -->
    <div id="taskList">
        <!-- Mavjud vazifa namunasi -->
        <div class="task">
            <strong>Task 1</strong>
            <span class="badge pending">pending</span>
            <p>Description for Task 1</p>
            <button class="delete-btn">Delete</button>
        </div>
    </div>

    <!-- Yangi vazifa qo'shish tugmasi -->
    <button id="addTaskBtn" class="add-btn">Add Task</button>

    <!-- Modal oyna (darsdagi rasmdagi oyna) -->
    <div id="taskModal" class="modal">
        <div class="modal-content">
            <h3>Add Task</h3>
            
            <!-- Input maydonlari -->
            <input type="text" id="taskTitle" placeholder="Task Title">
            <textarea id="taskDesc" placeholder="Task Description" rows="3"></textarea>
            
            <!-- Status tanlash -->
            <select id="taskStatus">
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
            </select>
            
            <button id="saveTask" class="save-btn">Save Task</button>
            <button id="closeModal" class="close-btn">Close</button>
        </div>
    </div>

    <script>
        // ============================================================
        // QADAM 1: ELEMENTLARNI TANLASH (DOM Access)
        // Darsda o'rgangan getElementById va querySelector larni ishlatamiz
        // ============================================================
        
        // getElementById() - ID bo'yicha elementni tanlaydi
        const addTaskBtn = document.getElementById('addTaskBtn');
        const modal = document.getElementById('taskModal');
        const taskList = document.getElementById('taskList');
        const saveTaskBtn = document.getElementById('saveTask');
        const closeModalBtn = document.getElementById('closeModal');
        
        // Input maydonlarini tanlaymiz
        const titleInput = document.getElementById('taskTitle');
        const descInput = document.getElementById('taskDesc');
        const statusInput = document.getElementById('taskStatus');

        // ============================================================
        // QADAM 2: MODAL OYNANI BOSHQARISH (Show/Hide)
        // CSS ni JavaScript orqali o'zgartirish
        // ============================================================
        
        // Add Task tugmasiga bosilganda modal ni ko'rsatish
        // addEventListener() - darsda o'rgangan hodisalar bilan ishlash usuli
        addTaskBtn.addEventListener('click', function() {
            // style.property - elementning CSS xususiyatini o'zgartirish
            modal.style.display = 'block';
        });

        // Close tugmasiga bosilganda modal ni yashirish
        closeModalBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        // Modal tashqarisiga (qoramtir fonga) bosilganda yopish
        // Bu Event Bubbling misoli - click hodiasi window gacha tarqaladi
        window.addEventListener('click', function(event) {
            // event.target - bosilgan element
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // ============================================================
        // QADAM 3: YANGI VAZIFA YARATISH (Creating Elements)
        // Darsdagi document.createElement() dan foydalanamiz
        // ============================================================
        
        saveTaskBtn.addEventListener('click', function() {
            // Inputlardan qiymatlarni olish
            const title = titleInput.value;
            const description = descInput.value;
            const status = statusInput.value;
            
            // Tekshirish: sarlavha bo'sh bo'lmasligi kerak
            if (title === '') {
                alert('Iltimos, sarlavha kiriting!');
                return; // Funksiyani to'xtatish
            }
            
            // --------------------------------------------------------
            // 3.1 Yangi element yaratish
            // document.createElement(tagName) - yangi HTML element yaratadi
            // --------------------------------------------------------
            const taskDiv = document.createElement('div');
            
            // --------------------------------------------------------
            // 3.2 Class qo'shish
            // classList.add() - darsda o'rgangan usul
            // Bu elementga "task" classini qo'shadi
            // --------------------------------------------------------
            taskDiv.classList.add('task');
            
            // --------------------------------------------------------
            // 3.3 Status classini aniqlash
            // pending, in-progress, yoki completed
            // --------------------------------------------------------
            let statusClass = '';
            if (status === 'pending') statusClass = 'pending';
            else if (status === 'in-progress') statusClass = 'in-progress';
            else if (status === 'completed') statusClass = 'completed';
            
            // --------------------------------------------------------
            // 3.4 Element ichini to'ldirish
            // innerHTML - darsda o'rgatilgan, HTML ichiga kod yozish
            // Eslatma: xavfsizlik uchun real loyihalarda textContent ham ishlatiladi
            // --------------------------------------------------------
            taskDiv.innerHTML = `
                <strong>${title}</strong>
                <span class="badge ${statusClass}">${status}</span>
                <p>${description}</p>
                <button class="delete-btn">Delete</button>
            `;
            
            // --------------------------------------------------------
            // 3.5 Elementni DOM ga qo'shish
            // appendChild() - elementni oxiriga qo'shadi
            // Bu yerda taskList (ota element) ga taskDiv (bola) qo'shiladi
            // --------------------------------------------------------
            taskList.appendChild(taskDiv);
            
            // --------------------------------------------------------
            // 3.6 Inputlarni tozalash
            // value = '' - maydonni bo'shatish
            // --------------------------------------------------------
            titleInput.value = '';
            descInput.value = '';
            
            // Modal ni yopish
            modal.style.display = 'none';
        });

        // ============================================================
        // QADAM 4: VAZIFANI O'CHIRISH (Deleting Elements)
        // Darsdagi Event Delegation usulini qo'llaymiz
        // ============================================================
        
        // ----------------------------------------------------------------
        // Event Delegation nima?
        // Darsda aytib o'tilgan: o'rniga har bir delete tugmasiga alohida
        // event qo'shish, bitta ota elementga qo'shamiz va target ni tekshiramiz
        // ----------------------------------------------------------------
        
        taskList.addEventListener('click', function(event) {
            // event.target - bosilgan element
            // classList.contains() - bu elementda "delete-btn" classi bormi?
            if (event.target.classList.contains('delete-btn')) {
                
                // parentElement - ota elementni olish
                // Yani <button> ning otasi <div class="task">
                const taskElement = event.target.parentElement;
                
                // --------------------------------------------------------
                // O'chirish usullari (darsda ikkisi ham ko'rsatilgan):
                // 1. remove() - elementni o'zini o'chiradi (zamonaviy usul)
                // 2. removeChild() - ota elementdan bola elementni o'chiradi
                // --------------------------------------------------------
                
                // Usul 1: remove()
                taskElement.remove();
                
                // Usul 2: removeChild() - agar kerak bo'lsa
                // taskList.removeChild(taskElement);
            }
        });

        // ============================================================
        // QO'SHIMCHA: Event Propagation ni to'xtatish (Stop Propagation)
        // Darsda o'rgangan event.stopPropagation()
        // ============================================================
        
        // Agar biz modal ichidagi click lar tashqariga chiqmasligini xohlasak:
        document.querySelector('.modal-content').addEventListener('click', function(e) {
            // Bu modal ichiga bosilganda oynaning tashqarisi bosilmagandek bo'ladi
            e.stopPropagation();
        });

        // ============================================================
        // XULOSA: Darsda o'rgangan narsalarni qo'lladik:
        // 1. getElementById() - elementlarni tanlash
        // 2. addEventListener() - hodisalar bilan ishlash (click, etc)
        // 3. createElement() - yangi element yaratish
        // 4. classList.add() - class qo'shish
        // 5. innerHTML - element ichini o'zgartirish
        // 6. appendChild() - element qo'shish
        // 7. remove() / removeChild() - element o'chirish
        // 8. Event Delegation - samarali event boshqaruvi
        // 9. stopPropagation() - hodisa tarqalishini to'xtatish
        // 10. parentElement - ota elementga murojaat
        // ============================================================
    </script>

</body>
</html>


