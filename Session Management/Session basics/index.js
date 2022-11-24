const express = require("express");
const port = 3000;
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
const session = require("express-session");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(session({
    secret: "@#$MQ123*+₹",
    saveUninitialized : true,
    resave : false,
    cookie : {maxAge : 800000}
}))
app.get("/dashboard", (req, res)=>{
    if(req.session.userid)
    {
        res.sendFile(__dirname + "/public/dashboard.html");
    }
    else
        res.redirect("/login");
})
app.get("/logout", (req, res)=>{
    req.session.destroy();
    res.redirect("/");
})
app.get("/login", (req, res)=>{
    res.sendFile(__dirname + "/public/login.html");
})
app.post("/login", (req, res)=>{
    if(req.body.username==req.body.password)
    {
        req.session.userid = req.body.username;
        res.redirect("/dashboard")
    }
})
app.listen(port, (err)=>{
    if(err)
    {
        console.log("err in starting server");
    }
    else
    {
        console.log(`server started http://localhost:${port}`);
    }
})