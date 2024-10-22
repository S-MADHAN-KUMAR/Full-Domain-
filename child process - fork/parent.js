const {fork} = require("child_process")
const child = fork('child')

child.on('message',(message)=>{
    console.log("message form child is  -" + message)
})

child.on('exit',()=>{
    console.log("Parent is terminated !")
})

child.emit("Hello form parent !!")

