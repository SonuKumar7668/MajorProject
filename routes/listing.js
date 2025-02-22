const express= require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const expressError = require('../utils/expressError.js');
const { listingSchema,reviewSchema } = require("../schema.js");
const listing = require('../Models/listing.js');
const review = require('../Models/review.js');
// const mongoose = require('mongoose');
// const expressError = require('../utils/expressError.js');

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    }else{
        next();
    }
}

const validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    }else{
        next();
    }
}

router.get("/", wrapAsync(async (req, res) => {
    let listings = await listing.find();
    res.render("listings/index.ejs", { listings });
}));

router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let content = await listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { content });
}));

router.get("/post/new", wrapAsync(async (req, res) => {
    res.render("listings/newpost.ejs");
}));

router.post("/newlist", validateListing, wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    let list = new listing(req.body.listing);
    await list.save();
    res.redirect("/listing");

}));

router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let data = await listing.findById(id);
    res.render("listings/editlist.ejs", { data });
}));

router.put("/updatelist/:id", validateListing, wrapAsync(async (req, res) => {
    console.log("hello");
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listing/${id}`);

}));

router.delete("/:id/delete", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    res.redirect(`/listing`);
}));

// for review

module.exports=router;