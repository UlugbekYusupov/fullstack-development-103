// const students = [
//     {name: "Alice", scores: [80,90,100]},
//     {name: "Bob", scores: [50,60,70]},
//     {name: "Charlie", scores: [30,40,20]},
// ]

// function sumAndAverage(arr) {
//     let res = 0
//     for (let i = 0; i < arr.length; i++) {
//         lengthOfArr = arr.length
//         res += i

//     }
// }

// function gradeCalcuator(id,scores) {
//     let grades = students[id].scores;
//     let total = 0;
//     let lengthOf = grades.length
//     scores.forEach(element => {
//         total += element
//     });

//     return total / lengthOf
// }

// let aliceA = gradeCalcuator(students[0].scores)
// let bobA = gradeCalcuator(students[1].scores)
// let charlieA = gradeCalcuator(students[2].scores)

// let obj = {
//     Alice: aliceA,
//     Bob:  bobA,
//     Charlie: charlieA
// }

// if (aliceA >= 50) {
//     console.log("Grade of the Alice is high");
                                                                                           
// }


// task-2
// function bankingAccount(banking) {
//     let balance = 0;

//     // deposit
//     function depositMoney(amount) {
//         balance += amount
//         console.log("You got money !");
//     }

//     // Output
//     function outputMoney(amount) {
//         if (balance >= amount) {
//             balance -= amount
//         }
//         else {
//             console.log("Balance has no enough money for output !!!");
//         }
//     }

//     // Viev balance
//     function seeBalance() {
//         console.log("Your baance:",balance);
//     }

//     return {
//         depositMoney,
//         outputMoney,
//         seeBalance
//     }
// }

// const banking = bankingAccount()
// banking.depositMoney()
// banking.seeBalance()


// task-2
function roleBased() {
    let roles = ["Admin","Editor","Viewer"]
    let permissions = ["edit","create","delete","view"]
    let ask = prompt("Enter your role")
    // function ask() {
    //     let message = prompt("Your role ?")
    //     roles.map(function () {
    //         if (message === roles[0]) {
    //             console.log("You can:");
    //             for (let i = 0; i < permissions.length; i++) {
    //                 console.log(permissions.join(","));
    //             }
    //         }
    //     })

    // }
    if (ask === roles[0]) {
        console.log("You can");
        for (let i = 0; i < permissions.length; i++) {
            console.log(permissions[i]);
        }
    }
    else if (ask === roles[1]) {
        console.log("You can");
        console.log(permissions[0],permissions[permissions.length - 1]);
    }
    else if (ask === roles[2]) {
        console.log("You can");
        console.log(permissions[permissions.length - 1]);   
    }
    
}

roleBased()