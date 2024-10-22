let promise1 = new Promise(resolve,reject => setTimeout(() => reject("reject first"), 100));
let promise2 = new Promise(resolve,reject => setTimeout(() => resolve("Resolved second"), 200));

Promise.race([promise1, promise2])
    .then(res => console.log(res)); // Output: Resolved first


    // It show only first out , Which promise will enter first , Will be a Final result ..