let value1 = null;
let value2 = 42;

let result = value1 ?? value2;
console.log(result);     // Output: 42 (value1 is null, so value2 is returned)


/// Use as a Default Values ..................

let username;

let displayName = username ?? 'Guest';
console.log(displayName); // Output: 'Guest' (username is undefined)
