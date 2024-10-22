function greet(name,callback){
    let data = `Hello this is ${name}....`
    callback(data)
}

function callback(data){
    console.log(data)
}

greet("Ejaz",callback)