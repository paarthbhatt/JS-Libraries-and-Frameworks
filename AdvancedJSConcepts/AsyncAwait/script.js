//Async-Await helps handle operations that take time(like API Calls)
async function getUserData() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    return data;    
}

// Error Handling
async function fetchData() {
    try{
        const data = await fetch('https://api.github.com/users');
        return data.json();
    } catch (error) {
        console.log('Something went wrong',error);
        return null;
    }
}

// Running tasks in parallel

// sequential (slower)
const userData = await fetchUser();
const postsData = await fetchPosts();

// parallel (faster)
const [userData, postsData] = await Promise.all([fetchUser(), fetchPosts()]);

// API Calls
async function getUser(id) {
    const user = await fetch(`https://api.github.com/users/${id}`);
    return user.json();
}

// Database Operations
async function saveUser(userData) {
    const result = await db.collection('users').insertOne(userData);
    return result;
}