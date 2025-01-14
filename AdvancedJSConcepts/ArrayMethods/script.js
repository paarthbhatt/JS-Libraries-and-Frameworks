// Combining Methods

// Define users array first
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 32 },
    { name: 'Bob', age: 28 },
    { name: 'Alice', age: 25 }
];

const youngUserNames = users  // Changed 'user' to 'users'
    .filter(user => user.age < 30)
    .map(user => user.name);
console.log(youngUserNames);

// Complex Data Transformations

const result = users
    .filter(user => user.age >= 30)
    .map(user => ({
        fullName:user.name,
        birthYear:2024-user.age
    }))
    .reduce((acc, user) => {
        acc[user.fullName] = user.birthYear;
        return acc;
    }, {});
    