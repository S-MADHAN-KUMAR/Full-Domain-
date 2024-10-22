//------CALL------------------//

function greet(greeting) {
    console.log(`${greeting}, ${this.name}!`);
}

const person = {
    name: "Alice"
};

// Using call to invoke greet with person as this
greet.call(person, "Hello"); // Output: "Hello, Alice!"

//-----------------APPLY-----------------//

function introduce(city, country) {
    console.log(`My name is ${this.name}, and I live in ${city}, ${country}.`);
}

const user = {
    name: "Bob"
};

// Using apply to invoke introduce with user as this and passing an array of arguments
introduce.apply(user, ["New York", "USA"]); // Output: "My name is Bob, and I live in New York, USA."


//------------------BIND------------------//

function sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
}

const person1 = {
    name: "Charlie"
};

const person2 = {
    name: "Diana"
};

// Binding the sayHi function to person1
const greetCharlie = sayHi.bind(person1);
greetCharlie(); // Output: "Hi, I'm Charlie!"

// Binding the sayHi function to person2
const greetDiana = sayHi.bind(person2);
greetDiana(); // Output: "Hi, I'm Diana!"
