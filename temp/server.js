const express= require("express");
const app= express();
const cookieParser= require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/",(req,res)=>{
    console.dir(req.cookies);
    res.send("hello");
});

app.get("/cookie",(req,res)=>{
    res.cookie("made-in","india",{signed:true});
    res.send("cookie sent");
});

app.get("/verified",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verified");
})

app.listen(3000,()=>{
    console.log("listening at 3000");
})