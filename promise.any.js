let promise1 = new Promise((resolve,reject) => {
    let success = true
    
    if(success){
        setTimeout(() => {
        resolve("Resolved after 3 seconds");
    }, 3000);
    }
    else{
       reject("Rejected") 
    }
});

let promise2 = Promise.reject("Rejected");

Promise.any([promise1, promise2])
    .then(res => console.log(res)) 
    .catch(err => console.log(err));



    // It only show soon reolve promise ...