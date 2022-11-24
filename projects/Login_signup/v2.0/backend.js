const express = require("express");
const bodyparser = require("body-parser");
const fs = require("fs");
const port = 3000;
const userFile = "/public/user.txt";
const parser = bodyparser.urlencoded({extended:false});
const app = express();

app.use(express.static("public"));

app.post('/signup', parser,async(req, res)=>{
    // console.log(req.body);
    let user = req.body;
    let arr =await fileRead(userFile);
    let exists = arr.filter((item)=>{
        return item.email== user.email;
    })
    if(exists.length>0)
    {
        res.send("User already exists");
    }
    else
    {
        arr.push(user);
        fileWrite(userFile, JSON.stringify(arr));
        console.log(arr);
        res.send("signup successful");
    }
    res.end();
})

app.post('/login', parser, async (req, res)=>{
    // console.log(req.body);
    let user = req.body;
    let users = await fileRead(userFile);
    let exists = users.filter((item)=>{
        return (item.email == user.email) && (item.password == user.password);
    })
    if(exists.length>0)
        res.send("Login success");
    else
        res.send("login failure");
    res.end();
})

app.get('/users', (req, res)=>{ // get all users list

    res.sendFile(__dirname + userFile,);
})

function fileRead(userFile)
{
    let arr = [];
    data=fs.readFileSync(__dirname+userFile, "utf8");
    arr = data?JSON.parse(data):[];
    return arr;
}

function  fileWrite(userFile, txt)
{
    fs.writeFile(__dirname + userFile, txt, (err)=>{
        if(err)
            console.log("error occurred while writing in file");
        else
            console.log("file updated successfully");
    })
}


app.listen(port, (err)=>{
    if(err)
        console.log("error in starting server");
    else
        console.log("server started");
})
