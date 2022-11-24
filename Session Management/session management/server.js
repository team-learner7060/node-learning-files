const express = require("express");
const app = express();
const port = 3000;

/*session */
const session = require("express-session");
const cookieParser = require("cookie-parser");

/*middleware */
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(session({
    secret : "123asdwer@#$",
    saveUninitialized : true,
    resave : false,
    cookie : {maxAge : 800000}
}))
app.use(express.urlencoded({extended : false}));
app.use(express.json());



app.get("/", (req, res)=>{
    console.log(req.url);
    res.sendFile(__dirname + "/public/index.html");
    // res.end("Hello");
})
app.get("/dashboard", (req, res)=>{
    console.log(req.url);
    let flag = req.session.userId;
    if(flag)
    res.render("dashboard", {user : req.session.userId})
    else
    res.redirect("/login");
})
app.get("/login", (req, res)=>{
    console.log(req.url);
    res.render("login", {msg : "Hi"});
})
app.post("/login", (req, res)=>{
    console.log(req.body);
    if(req.body.username==req.body.password)
    {
        req.session.userId = req.body.username;
    }
    // res.send(req.body);
    res.redirect("/dashboard");
})

app.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/login");
})


app.listen(port, (err)=>{
    if(err)
    console.log("error in starting server");
    else
        console.log("server started at port : "+port);
})