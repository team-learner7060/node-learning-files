const express = require("express");
const bodyparser = require("body-parser");
const parser = bodyparser.json();
const fs = require("fs");
const port = 3000;
const filepath = "/database/data.txt";
const app = new express();
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("database"));
app.post("/submit",parser, async (req, res)=>{
    let obj =await req.body;
    fs.readFile(__dirname + filepath, (err, txt)=>{
        if(txt)
        {
            let data = [];
            if(txt!="")
                data = JSON.parse(txt);
            data.push(obj);
            fs.writeFile(__dirname + filepath, JSON.stringify(data), (err)=>{
                if(err)
                {
                    res.json({status : false});
                }
                else
                    res.json({status : true});
            })
        }
    })
    res.end();
})


app.get("/getData", (req, res)=>{
    fs.readFile(__dirname + filepath, (err, data)=>{
        if(data)
            res.json(JSON.parse(data));
        else
            res.json([]);
        res.end();
    })
})

app.get("/changeTaskStatus", (req, res)=>{
    //TODO
})

app.listen(port, (err)=>{
    if(err)
        console.log("err in starting server");
    else
        console.log("server started");
})

