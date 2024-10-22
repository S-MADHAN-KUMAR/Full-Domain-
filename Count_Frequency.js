const arr = [4,5,6,4,3,66,44,9]

let obj = new Object

for(let i of arr){
    if(obj[i]){
        obj[i]++
    }
    else{
        obj[i]=1
    }
}

console.log(obj)