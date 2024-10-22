let outerVar = "I am outside!";

function example() {
    let outerVar = "I am inside!"; // This variable shadows the outerVar
    console.log(outerVar); // Output: "I am inside!"
}

example();
console.log(outerVar); // Output: "I am outside!"


// -------------------illegal shadowing----------------------------------------

let x = 10;

function illegalShadowing() {
    let x = 20; // Legal shadowing
    console.log(x); // Output: 20

    let x = 30; // Illegal shadowing
    console.log(x);
}

illegalShadowing();

//.................  Illegal shadowing typically occurs when you try to declare a variable in the same scope using let or const after it has already been declared in that scope...................
