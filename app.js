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
const review = require('./Models/review.js');
const reviews = require("./routes/review.js");
const cookieParser= require("cookie-parser");

const listings = require("./routes/listing.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));

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


app.get("/", wrapAsync((req, res) => {
    console.dir(req.cookies);
    let {name="no-one"}=req.cookies;
    // res.render("listings/home.ejs");
    res.send(`hello ${name}`);
}));

app.get("/getcookies",(req,res)=>{
    res.cookie("name","sonu");
    // res.cookie("greet","hello");
    res.send("cookie found");
});

app.use("/listing", listings);
app.use("/listing/:id/review", reviews);

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