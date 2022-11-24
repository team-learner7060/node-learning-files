const http = require('http');
const fs = require('fs');

http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url=='/')
    {
        fs.readFile('./public/home.html', (err, data)=>{
            if(!err)
            {
                res.writeHead(200, {'Content-type':'text/html'});
                res.end(data);
            }
        })
    }
    else if(req.url=='/style.css')
    {
        fs.readFile('./public/style.css', (err, data)=>{
            if(!err)
            {
                res.end(data);
            }
        })
    }
}).listen(3000, (err)=>{
    if(err)
        console.log("error in starting server");
    else
        console.log("server started");
});