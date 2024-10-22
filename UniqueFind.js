let arr = [1,2,3,1,2,3,5,6,8,6]

// useing SET() ......

let seen = new Set()

for(let i of arr){
    if(seen.has(i)){
        seen.delete(i)
    }
    else{
        seen.add(i)
    }
}

console.log(...seen);


// using LOOP().......

let narr=[]

for(let i =0 ;i < arr.length ; i++){
    let isU = true;
  for(let j =0 ;j < arr.length ; j++){
    if(arr[i] === arr[j]  && i !== j){
    isU = false;
    break;
    }
   
}  
 if(isU){
        narr.push(arr[i])
    }
}

console.log(narr)