const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodoverride = require("method-override");
const engine = require('ejs-mate');
const app = express();
const port = 3000;
const listing = require('./Models/listing.js');
const wrapAsync = require('./utils/wrapAsync.js');
const expressError = require('./utils/expressError.js');
const {listingSchema}=require("./schema.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, "/public")));

const validateListing =(req,res,next)=>{
    const {error}=listingSchema.validate(req.body);
    if(error){
        let errorMessage=error.details.map((el)=>el.message).join(",");
        throw new expressError(400,errorMessage);
    }
}

app.get("/", wrapAsync((req, res) => {
    res.render("listings/home.ejs");
}));

app.get("/listing", wrapAsync(async (req, res) => {
    let listings = await listing.find();
    res.render("listings/index.ejs", { listings });
}));

app.get("/listing/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let content = await listing.findById(id);
    res.render("listings/show.ejs", { content });
}));

app.get("/listing/post/new", wrapAsync(async (req, res) => {
    res.render("listings/newpost.ejs");
}));

app.post("/newlist", validateListing,wrapAsync(async (req, res, next) => {
    let result=listingSchema.validate(req.body);
    console.log(result);
    let list = new listing(req.body.listing);
    await list.save();
    res.redirect("/listing");

}));

app.get("/listing/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let data = await listing.findById(id);
    res.render("listings/editlist.ejs", { data });
}));

app.put("/updatelist/:id", validateListing,wrapAsync(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listing/${id}`);

}));

app.delete("/listing/:id/delete", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    res.redirect(`/listing`);
}));

app.all("*", (req, res, next) => {
    next(new expressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "undefined" } = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{err});
})

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
})