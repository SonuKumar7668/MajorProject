const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodoverride = require("method-override");
const engine = require('ejs-mate');
const app = express();
const port = 3000;
// const listing = require('./Models/listing.js');
const wrapAsync = require('./utils/wrapAsync.js');
const expressError = require('./utils/expressError.js');
const { listingSchema, reviewSchema } = require("./schema.js");
// const review = require('./Models/review.js');
const reviews = require("./routes/review.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const LocalStrategy = require("passport-local");
const User = require("./Models/user.js");
const userRoute = require("./routes/user.js");
const sessionOption = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
}

const listings = require("./routes/listing.js");
const passport = require('passport');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(session(sessionOption));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.engine('ejs', engine);


const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    } else {
        next();
    }
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    } else {
        next();
    }
}

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.user = req.user;
    next();
})

app.get("/", wrapAsync((req, res) => {
    res.render(`listings/home.ejs`);
}));

app.get("/demouser", async (req, res) => {
    let fakeuser = new User({
        email: "sonu@gmail.com",
        username: "sonu"
    });
    let newuser = await User.register(fakeuser, "password");
    console.log(newuser);
    res.send(newuser);
});

// app.get("/getcookies",(req,res)=>{
//     res.cookie("name","sonu");
//     // res.cookie("greet","hello");
//     res.send("cookie found");
// });

app.use("/listing", listings);
app.use("/listing/:id/review", reviews);
app.use("/", userRoute);

app.all("*", (req, res, next) => {
    next(new expressError(404, "page not found"));
});


app.use((err, req, res, next) => {
    let { statusCode = 500, message = "undefined" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", { message });
});


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.listen(port, (req, res) => {
    console.log(`server is running on port ${port}`);
});