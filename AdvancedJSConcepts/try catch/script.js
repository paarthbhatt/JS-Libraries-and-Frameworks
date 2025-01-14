// Safety net for my code --> helps in handling errors gracefully

// BASIC STRUCTURE
try{
    //code that might cause an error
    riskyOperation();
} catch(error) {
    //handle errors gracefully
    console.log('Something went wrong:', error.message);
} finally {
    // code that will always run
    cleanup();
}

// API Calls
try{
    const response = await fetch('https://api.example.com');
    const data = await response.json();
} catch(error) {
    console.log('Error fetching data:', error.message);
}

// File Operations
try{
    const fileData = readFile('config.json');
} catch(error){
    console.log('Error reading file:', error.message);
}