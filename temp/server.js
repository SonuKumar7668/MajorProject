const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash= require("connect-flash");
const path= require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieParser("secretcode"));

const sessionoptions= { secret: "supersecretsession", resave: false, saveUninitialized: true }
app.use(session(sessionoptions));
app.use(flash());

app.get("/", (req, res) => {
    // console.dir(req.cookies);
    res.send("hello");
});

app.get("/register",(req,res)=>{
    let {name="anonymous"}=req.query;
    if(name==="anonymous"){
        req.flash("failed","user not registered");
    }else{
        req.flash("sucess","registered sucessfully");
    }
    console.log(req.session);
    req.session.name=name;
    req.session.two=3;
    // res.send(`hello ${req.session.name} -> ${req.session.two}`);
    res.redirect("/hello");
});

app.get("/hello",(req,res)=>{
    // console.log(req.flash("sucess"));
    res.locals.sucess=req.flash("sucess");
    res.locals.err=req.flash("failed");
    res.render("index.ejs",{name:req.session.name });
})

// app.get("/count",(req,res)=>{
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count=1;
//     }
//     res.send(`session count ${req.session.count}`);
// })

// app.get("/cookie",(req,res)=>{
//     res.cookie("made-in","india",{signed:true});
//     res.send("cookie sent");
// });

// app.get("/verified",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })

app.listen(3000, () => {
    console.log("listening at 3000");
})