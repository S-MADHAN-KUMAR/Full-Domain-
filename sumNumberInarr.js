function checkSum(s){
    let ans = s.reduce((a,c)=>{
        if(typeof(c) === 'number'){
           return a+c
        }
        return a
    })
    
    return ans
 }
 
 let s=[1,'3',obj={},function(){},5]
 
 console.log(checkSum(s))