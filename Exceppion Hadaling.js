let jsonString = '{"name": "John", "age": 30}'; // Valid JSON
let invalidJsonString = '{"name": "John", "age": 30'; // Invalid JSON (missing closing brace)

try {
    let user = JSON.parse(jsonString);
    console.log(user); // Output: { name: 'John', age: 30 }
    
    // Attempting to parse invalid JSON
    let invalidUser = JSON.parse(invalidJsonString);
    console.log(invalidUser);
} catch (error) {
    console.error("An error occurred while parsing JSON:", error.message);
} finally {
    console.log("JSON parsing attempt completed.");
}
