const myPromise = new Promise((resolve, reject) => {
    // Do something async, then either...
    resolve("Success!"); // ...resolve with a value
    // or
    reject("Failure!"); // ...reject with a value

});


// IRL Example:

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  // Fixed: Added parentheses after setTimeout
            const user = { id: userId, name: "John Doe" };
            if (user) {
                resolve(user);  // Fixed: Proper indentation
            } else {
                reject("User not found");
            }
        }, 1000);
    });  // Fixed: Added missing closing parenthesis
}