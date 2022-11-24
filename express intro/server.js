const express = require ('express');

const app = express();
app.use(express.static("public"));

app.get('/', (req, res)=>{
    // res.end("home page");
    res.sendFile(__dirname +'/public/home.html');
});

app.get('/aboutus', (req, res)=>{
    res.end("about us page");
    // res.sendFile(__dirname +'/public/aboutus.html');
});

app.listen(3000, (err)=>{
    if(err)
        console.log('server issue');
    else
        console.log("server started");
});