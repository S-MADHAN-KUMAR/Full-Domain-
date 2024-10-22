function* naturalNumbers(n) {
    while (true) { // Create an infinite loop
        yield n+n; // Yield n and increment it
    }
}

const numbers = naturalNumbers(1);
console.log(numbers.next().value); // Output: 1
console.log(numbers.next().value); // Output: 2
console.log(numbers.next().value); // Output: 3
console.log(numbers.next().value); // Output: 4
// This can continue indefinitely...







