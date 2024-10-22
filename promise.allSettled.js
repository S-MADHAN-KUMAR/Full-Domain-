let promise1 = Promise.resolve("Resolved");
let promise2 = Promise.reject("Rejected");

Promise.allSettled([promise1, promise2])
    .then(res => console.log(res));
// Output: [{ status: 'fulfilled', value: 'Resolved' }, { status: 'rejected', reason: 'Rejected' }]



// It show all promise detail pass OR fail , it wait for all promise completed...