// CHALLANGE 1

// task 1

let num = "200"
num = num * 1
console.log(num + 50)

// task 2

console.log(25 + "years old")

// task 3

console.log(Boolean("False"))

// task 4

console.log("10" -true) // tushuntirish: minus amali ishlaganda stringni ham num deb hisoblab amal bajaradi shunda 10 dan 1 ni ayirib 9 chqarad. true bizda 1 ga teng buani uchun.

//_______________________________________________________________________________________________________________________________________________________________________________________

/// CHALLANGE 3

// task 1

const temperaturasi = 25
console.log(temperaturasi)

// selsiy funksiyasini ishlatouz

const fahrenheit = (temperaturasi * 9/5) + 32
console.log(fahrenheit)

// ikkalasini ham chiqarish: 

console.log(fahrenheit,temperaturasi)

// task 4

//temperaturasi = 30 // uzgartirib bulmaydi, uncaught typeerror berdi

// yana birmarta ishlatouz faqat bunda userdan sorouz

// const temperaturasi2 = Number(prompt("Haroratni kiriting:")) // 25
// const fahrenheit2 = (temperaturasi2 *  9/5) + 32
// console.log(fahrenheit2)

//_______________________________________________________________________________________________________________________________________________________________________________________

// CHALLANGE 4

const budjet = Number(prompt("budjetingizni kiriting:"))

let ex1 = Number(prompt("budjet miqdorini kiriting"))
let ex2 = Number(prompt("ikkinchi miqdorini kiriting"))
let ex3 = Number(prompt("uchinchi miqdorini kiriting"))
let totalEx = ex1 + ex2 + ex3 - budjet
if (totalEx < 0) {
    console.log("Balansingiz yetmaydi birodar!")
    alert("Balansingiz yetmaydi birodar!")
}
// console.log(totalEx)
