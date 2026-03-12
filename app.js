// 1: object literal

let car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  start: function () {
    console.log("Car is starting..")
  }

};
console.log(car.brand); // Tesla
car.start(); // "Car is starting"


// 2: using new object

let person = new Object();
person.name = "Alice"
person.age = 25;
person.greet  = function(){
  return `Hello, my name is ${this.name}`;
};
console.log(person.greet()); //hello my,  

// 3: factory function

function CreatePerson (name, age) {
  return {
    name,
    age,
    greet(){
      return `hi, im ${this.name}, and I'm ${this.age} years old `;

    }
  }
}

let person1 = createPearson("Alice", 25);
let person2 = createPearson("Javohir", 30)
console.log(person1.greet()); // "Hi, I'm Alive, and I`m 25 years old"
console.log(person2.greet()); // "Hi, I'm Alive, and I`m 30 years old"
