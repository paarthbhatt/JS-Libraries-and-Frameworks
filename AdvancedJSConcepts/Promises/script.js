const myPromise = new Promise((resolve, reject) => {
    // Do something async, then either...
    resolve("Success!"); // ...resolve with a value
    // or
    reject("Failure!"); // ...reject with a value

});


// IRL Example:

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Fetch user data from the server
        // If successful, resolve with the user data
        // If unsuccessful, reject with an error
        setTimeout() => {
            const user = { id: userId, name: "John Doe" };
            if (user) {
            resolve(user);
        } else {
            reject("User not found");
        }
    }, 1000);
});