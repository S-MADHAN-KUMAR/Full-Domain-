const eventEmitter = require("events")
const emitter = new eventEmitter()

emitter.on('pizza',(size,top)=>{
    console.log(`Ordering : ${size} with ${top}`)
})

emitter.on('pizza',(size)=>{
    if(size==='large'){
        console.log('Free cocacola !')
    }
})

emitter.emit('pizza','large','Cheese')

