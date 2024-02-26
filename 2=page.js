const http = require("http");
console.log(http)

const server = http.createServer((req, res) =>{
    if(req.url === "/"){
        res.end("welcome to home page");
    }
    else if(req.url === "/about"){
        res.end("welcome to landing page");
    }
    else{
        res.end(
            `<h1>Oops</h1>
            <p>You have enter a wrong link Address</p>
            <a href="/">Back Home</a>
            `
        )
    }
  
})
server.listen(5000)