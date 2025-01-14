// 1) Object Destructuring

// BASIC OD

const person = {
    name: 'John',
    age: 30,
    city: 'New York', 
    occupation: 'Software Engineer',
};

// Old Way

const firstName = person.firstName;
const lastName = person.lastName;

// Destructuring Way

const {firstName, lastName} = person;
console.log(firstName, lastName);

// Renaming variables while destructuring

const {firstName:fName, lastName: lName} = person;
console.log(fName, lName);

// Default Values
const {age, country = 'USA'} = person;
console.log(age, country);


// NESTED OD

const user = {
    id: 1,
    name: 'John',
    age: 30,
    education: {
        degree: 'Masters',
        school: 'MIT'
    }
};

// Destructuring Nested Objects
const {education: {degree, school}} = user;
console.log(degree, school);

// ARRAY DESTRUCTURING

const numbers = [1, 2, 3, 4, 5];

// BASIC AD
const [first, second] = numbers;
console.log(first, second);
const [first, , third] = numbers;
console.log(first, third);

// Rest Operator with Arrays
const [first, second, ...rest] = numbers;
console.log(first, second, rest);


 // SWAPPING VARIABLES

 let a = 5;
 let b = 10;

 // Old Way
 let temp = a;
    a = b;
    b = temp;

// Destructuring Way
[a, b] = [b, a];
console.log(a, b);


// FUNCTION PARAMETER DESTRUCTURING

function printUserInfo({name, age, city='Unknown'}) {
    console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const user = {
    name: 'John',
    age: 30
    country: 'USA'
};
printUserInfo(user);

// Array Parameter Destructuring

function getFirstTwo([first, second]) {
    return 'First: ${first}, Second: ${second}';
}
console.log(getFirstTwo([1,2,3]))
