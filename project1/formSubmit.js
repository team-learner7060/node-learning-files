const express = require("express");
const url = require("url");
const app = express();
const port = 3000;
const arr = [];
console.log(arr);
app.use(express.static("public"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get('/login', (req, res)=>{
    // console.log(arr);
    let user = req.query;
    let userData = arr.filter((item)=>{
        if(item.email==user.email)
            return true;
    })
    if(userData.length==0)
    {
        res.end("user not found");
    }
    else
    {
        userData = userData[0];
        if((user.uname == userData.uname) && (user.email==userData.email) && (user.password==userData.password))
        {
            res.send(`hello ${user.uname}`);
            res.end("login successful");
        }
        else
            res.end("login failed");
    }
})

app.get('/signup', (req, res)=>{
    // console.log(req.query);
    let user = req.query;
    let userData = arr.filter((item)=>{
        if(item.email==user.email)
            return true;
    })
    if(userData.length>0)
        res.end("user already exists");
    else
    {
        arr.push(user);
        // console.log(arr);
        res.end('signup form submitted');
    }
})

app.listen(port, (err)=>{
    if(err)
    {
        console.log("server error");
    }
    else
    {
        console.log("server started");
    }
})