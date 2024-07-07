const http = require('http')
const fs = require('fs')

const port = 80;
const hostname = "127.0.0.1" 

const home = fs.readFileSync('./home.html')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"application/json"});
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/html')
    // res.write("Hello Roshan Pawar")
    // res.write(home) 
    // res.write(JSON.stringify({name: "Roshan", company: "SSI", employeeNo: 251}))
    res.end()
}); 
  
server.listen(port, hostname, ()=>{
    console.log(`server listen on ${port} post and host ${hostname}`) 
});