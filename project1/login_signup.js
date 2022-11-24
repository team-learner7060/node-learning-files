const express = require("express");
const bodyparser = require("body-parser");
const port = 3000;

const app = express();

app.use(express.static('form-files'));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/form_files/index.html");
})


app.listen(port, (err)=>{
    if(err)
    {
        console.log("error occurred");
    }
    else
    {
        console.log("server started");
    }
})