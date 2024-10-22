let arr = [1,2,3,4]

// reverse Array..................


// Using loop..................

let narr =[]
for(let i = arr.length-1; i>=0  ; i--){
    narr.push(arr[i])
}

console.log(narr)


// Using sort()..................


console.log(arr.sort((a,b)=>b-a))

// reverse String using recursion ...................................

function reverseString(s) {
  if (s.length === 0) return "";
  return s[s.length - 1] + reverseString(s.slice(0, -1));
}

console.log(reverseString("mav"));


// reverse String..................


let s ='hello'
    var r = ''
for(let i = s.length-1; i>=0  ; i--){

  r += s[i]
}


console.log(r)

console.log(s.split('').reverse().join(''))
