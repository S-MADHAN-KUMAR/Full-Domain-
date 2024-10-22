const fs = require('fs')

const path =require('path')

const rs = fs.createReadStream(path.join(__dirname,"Data.txt"),"utf-8")
const ws = fs.createWriteStream(path.join(__dirname,"Bata.txt"))



rs.pipe(ws)




rs.on('data',(chunk)=>{
    ws.write(chunk)
    console.log("File succussfully created !!")
})
