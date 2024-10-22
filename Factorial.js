function factorial(n) {
    if (n <= 1) return 1;  // Base case: factorial of 1 or 0 is 1
    return n * factorial(n - 1);  // Recursive case: n * (n-1)!
}

console.log(factorial(5));  // Output: 120



// ----------------------------- Memoisation----------------------------------------------//


function factorial(n, memo = {}) {
    if (n <= 1) return 1;  // Base case: 0! = 1! = 1
    if (memo[n]) return memo[n];  // Check if result is already memoized

    // Store and return the result of the recursive call
    memo[n] = n * factorial(n - 1, memo); 

    return memo[n];
}

console.log(factorial(5));  // Output: 120
