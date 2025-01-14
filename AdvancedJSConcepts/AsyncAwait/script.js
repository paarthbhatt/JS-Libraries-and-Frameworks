//Async-Await helps handle operations that take time(like API Calls)
async function getUserData() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;    
}