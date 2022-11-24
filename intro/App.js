const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url=='/')
    {
        fs.readFile('index.html', (err, data)=>{
            res.end(data);
        })
    }
    else if(req.url == '/aboutus')
    {
        fs.readFile('aboutus.html', (err, data)=>{
            res.end(data);
        })
    }
    else
        res.end('no end point found for url : '+req.url);
}).listen(8080, (error)=>{
    if(error)
        console.log("server issue");
    else 
        console.log("server started");
});