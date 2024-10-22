function greet(name,callback){
    let data = `Hello this is ${name}....`
    callback(data)
}

function callback(data){
    console.log(data)
}

greet("Ejaz",(data1)=>{
    callback(data1)
    greet("Madhan",(data2)=>{
        callback(data2)
        greet("siva",(data3)=>{
            callback(data3)
            
        })
    })
})