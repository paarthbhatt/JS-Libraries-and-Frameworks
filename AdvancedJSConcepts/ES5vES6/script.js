// Variable Declaration:

var name = "John";  //ES5
let name = "John";
const age = 25;  //ES6

// Template Literals:

var greeting = "Hello, my name is " + name + " and I am " + age + " years old.";  //ES5

let greeting = `Hello, my name is ${name} and I am ${age} years old.`;  //ES6

// Arrow Functions:

function add(a, b) {
    return a + b;
}  //ES5

const add = (a, b) => a + b;  //ES6

// Default Parameters:
function greet(name) {
    name = name || "John";
    return "Hello, my name is " + name;
}                                               //ES5

const greet = (name = "Guest") => `Hello, my name is ${name}`; //ES6

// Object Property Shorthand:

var name = "John";
var person = {name:name} //ES5

const name = "John";
const person = {name}; //ES6

// Destructuring :
var person = {name: "John", age: 25};
var name = person.name;
var age = person.age ;                          //ES5

const person = {name: "John", age: 25};
const {name, age} = person;                     //ES6

// Array Functions:                 
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(num => num > 3);
const hasTwo = numbers.includes(2);
const doubled = numbers.map(num => num * 2);

// Classes:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    return "Hello, my name is " + this.name;
}                                                   //ES5

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name}`;
    }
}                                                   //ES6

// Promises

orderPizza()
    .then(pizza ==> {
        console.log("yay, i got me a pizza")
    })
    .catch(error => {
        console.log("oh no, i have no pizza")
    });

// Modules

export const helper = () => {...Person.name.replace.}
import {helper} from './helper.js';

// Spread / Rest Operator

const numbers = [1, 2, 3, 4, 5];
const morenums = [...numbers, 6, 7, 8];

const [first, second, ...others] = numbers;

// Key benefits of ES6:-

// ==> More concise and readable code
// ==> Better scoping with let and const
// ==> Enhanced object literals improved string manipulation
// ==> Simpler function syntax with arrow functions
// ==> Better object and array manipulation
// ==> Native promises and modules support
// ==> Promises for async operations