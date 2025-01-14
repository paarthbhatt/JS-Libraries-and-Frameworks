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