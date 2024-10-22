const fs = require("fs");

process.on('message',(message)=>{
    console.log(message)
})

let count =0;

const InterVal = setInterval(()=>{
    count++
    let date = new Date()
    if(count <=5){
        fs.writeFile(`day-${count}.txt`,`${date.toDateString()}`,(err)=>{
            if(err){
                console.error(err)
            }
            else{
                process.send(`Day - ${count} , is created !!!`)
            }
        })
        
    }
    else{
        clearInterval(InterVal)
        process.exit(1)
    }
},2000)