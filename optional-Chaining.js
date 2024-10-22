const obj ={
    name:"Ejaz",
    job:"developer"
}

//without optional chaining shows error TYPEERROR.....

console.log(obj.address.name)

// Now shoe UNDEFIND instead for TYPE ERROR........

  console.log(obj?.addrees?.name) 