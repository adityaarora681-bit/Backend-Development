// let and const
let counter = 1;
const course = "Backend Development";
counter++;
console.log(`${course} | Counter: ${counter}`);

// Arrow functions & default parameters
const add = (a, b) => a + b;
const greet = (name = "Guest", greeting = "Hello") => `${greeting}, ${name}!`;
console.log("Add (3 + 4):", add(3, 4));
console.log(greet("Student"));

// Destructuring & Spread/Rest
const student = { name: "Aarav", age: 21, city: "Dehradun" };
const { name, city } = student;
const arr1 = [1, 2, 3];
const combined = [...arr1, 4, 5];
console.log("Destructured:", name, city);
console.log("Spread array:", combined);

// Classes & Inheritance
class Animal {
    constructor(animalName, sound) {
        this.animalName = animalName;
        this.sound = sound;
    }
    speak() {
        return `${this.animalName} says ${this.sound}`;
    }
}

class Dog extends Animal {
    constructor(animalName) {
        super(animalName, "Woof");
    }
}

const dog = new Dog("Rex");
console.log(dog.speak());
