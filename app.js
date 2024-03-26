const http = require("http");
const url = require("url")
const PORT = 8000;

http.createServer((req, res)=>{
    console.log("Server is running on", PORT)
    
    if(req.method === "GET" && req.url === "/books"){
        console.log("This is where we display books")
        res.write("This is where we display books")
        res.end()
    }

    if(req.method === "GET" && req.url === "/books/authors"){
        console.log("This is where we display authors")
        res.write("This is where we display authors")
        res.end()
    }

    if(req.method === "PUT" && req.url === "/books"){
        console.log("This is where we update books")
        res.write("This is where we update books")
        res.end()
    }

    if(req.method === "PUT" && req.url === "/books/authors"){
        console.log("This is where we update authots")
        res.write("This is where we update authors")
        res.end()
    }

    if(req.method === "POST" && req.url === "/books/authors"){
        console.log("This is where we send authors")
        res.write("This is where we send authors")
        res.end()
    }

    if(req.method === "DELETE" && req.url === "/books"){
        console.log("This is where we delete books")
        res.write("This is where we delete books")
        res.end()
    }
  

    
    
    res.end()

}).listen(PORT)