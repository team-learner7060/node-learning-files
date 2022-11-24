const express = require("express");
const fs = require("fs");
const bodyparser = require("body-parser");
const parser = bodyparser.urlencoded({extended:false});
const port = 3000;
const filepath = "/database/tasks.txt";
const app = express();

app.use(express.static("public"));


app.post("/addtask",parser,async (req, res)=>{
    console.log("inside add task");
    let request = await req.body;
    console.log(request);
    res.json({status : "successfull"});
    res.end();
})

app.get('/dummy', (req, res)=>{
    console.log(req.url);
    res.send("successful");
    res.end();
})
app.listen(port, (err)=>{
    if(err)
        console.log("error in starting server");
    else
        console.log("server started");
})