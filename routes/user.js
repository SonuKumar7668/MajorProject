const express= require("express");
const router = express.Router();
const User = require("../Models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl}=require("../middleware.js");

router.get("/signup",(req,res)=>{
    res.render("Users/signup.ejs");
});

router.get("/login",(req,res)=>{
    res.render("Users/login.ejs");
});

router.post("/signup",wrapAsync(async(req,res,next)=>{
    try{
        let {username,email,password}= req.body;
        const newUser= new User({email,username});
        const registerUser=await User.register(newUser,password);
        console.log(registerUser);
        req.login(registerUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to Wanderlust");
            res.redirect("/listing");
        })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }
}));

router.post("/login",saveRedirectUrl,passport.authenticate('local', { failureRedirect: '/login',failureFlash: true }),async(req,res)=>{
    req.flash("success","Welcome to Wanderlust, You are logged In");
    let redirectlink= res.locals.redirectUrl || "/listing";
    res.redirect(redirectlink);
});

router.get("/logout",(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Logout sucessfull!");
        res.redirect("/listing");
    })
})

module.exports= router;