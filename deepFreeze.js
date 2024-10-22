function deepFreeze(obj) {
    if (obj && typeof obj === 'object') {
        Object.freeze(obj); // Freeze the object

        // Recursively freeze each property
        Object.keys(obj).forEach(key => {
            deepFreeze(obj[key]);
        });
    }
    return obj; // Return the frozen object
}

// Define a nested object
const simpleObject = {
    name: 'Alice',
    age: 25,
    hobbies: {
        sport: 'soccer',
        music: 'guitar'
    }
};

// Deep freeze the object
deepFreeze(simpleObject);

console.log(Object.isFrozen(simpleObject));