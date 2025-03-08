const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const expressError = require('../utils/expressError.js');
const { listingSchema, reviewSchema } = require("../schema.js");
const listing = require('../Models/listing.js');
const review = require('../Models/review.js');
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
// const mongoose = require('mongoose');
// const expressError = require('../utils/expressError.js');

router.get("/", wrapAsync(async (req, res) => {
    let listings = await listing.find();
    res.render("listings/index.ejs", { listings });
}));

router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let content = await listing.findById(id).populate({path: "reviews",populate:{path: "author"}}).populate("owner");
    if (!content) {
        req.flash("error", "listing you searched for does not exist");
        res.redirect("/listing");
    }
    res.render("listings/show.ejs", { content });
}));

router.get("/post/new", isLoggedIn, wrapAsync(async (req, res) => {
    res.render("listings/newpost.ejs");
}));

router.post("/newlist", isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {
    let result = listingSchema.validate(req.body);
    console.log(result);
    let list = new listing(req.body.listing);
    list.owner = req.user._id;
    await list.save();
    req.flash("success", "registered sucessfully");
    res.redirect("/listing");

}));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let data = await listing.findById(id);
    if (!data) {
        req.flash("error", "listing you searched for does not exist");
        res.redirect("/listing");
    }
    res.render("listings/editlist.ejs", { data });
}));

router.put("/updatelist/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success", "List updated");
    res.redirect(`/listing/${id}`);

}));

router.delete("/:id/delete", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success", "List deleted");
    res.redirect(`/listing`);
}));

// for review

module.exports = router;