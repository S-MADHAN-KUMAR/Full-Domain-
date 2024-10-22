let promise1 = Promise.resolve("Success 1");
let promise2 = Promise.resolve("Success 2");
let promise3 = Promise.reject("Failure 3");


Promise.all([promise1, promise2,promise3])
    .then(res => console.log(res)) 
    .catch(err => console.log(err));


    // if any  one fail promis.all show fail ! , If all of pass on show pass ....