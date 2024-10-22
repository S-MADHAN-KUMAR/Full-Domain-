const http =require('http')
const app =http.createServer((req,res)=>{
    if(req.url === '/' || req.url === '/dashboard'){
        res.setHeader('200',{'content-type':'text/plain'})
        // res.statusCode = 200
        res.write("Hello !!!")
        res.end()
    }
    else{
        res.setHeader('404',{'content-type':'text/plain'})
        res.write("404 Page Not Found !")
        res.end()
    }
})

app.listen(5000,()=>{
    console.log("Server running on 5000 Port !")
})