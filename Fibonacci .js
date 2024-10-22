


function fibinacci(n) {
    if (n <= 1) return 1;  // Base case
    return fibinacci(n - 2) + fibinacci(n - 1);  // Recursive case based on n-2 and n-1
}

console.log(fibinacci(5));  // Output: 8



// -------------------------------------------------------------------//



function fibonacci(n, memo = {}) {
    if (n <= 1) return 1;  // Base case: fibonacci(0) = 0, fibonacci(1) = 1
    if (memo[n]) return memo[n];  // Check if result is already memoized

    // Store and return the result of recursive call
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

    return memo[n];
}

console.log(fibonacci(5));  // Output: 8


