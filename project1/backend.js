const express = require('express');
const url = require("url");
let app = express();
app.use(express.static("public"));
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/aboutus.html");
})
app.get("/submit", (req, res)=>{
    console.log(req.query); // returns object
    /*
    let query = url.parse(req.url).query;
    query = query.split("\&");
    console.log(typeof query);
    console.log(query);
    query = query.map((item)=>{
        let arr = item.split("\=");
        let obj = {};
        obj[arr[0]] = arr[1];
        return obj;
    })
    */
    // console.log(req.query);
    res.end("form submitted");
})
app.listen(3000, (error)=>{
    if(error)
        console.log("error in starting the server");
    else 
        console.log("server started");
})