const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require('../utils/wrapAsync.js');
const expressError = require('../utils/expressError.js');
const { listingSchema, reviewSchema } = require("../schema.js");
const listing = require('../Models/listing.js');
const review = require('../Models/review.js');
const {validateReview,isLoggedIn,isReviewAuthor}=require("../middleware.js");

router.post("/", validateReview, wrapAsync(async (req, res) => {
    let listings = await listing.findById(req.params.id);
    let newreview = new review(req.body.review);
    newreview.author= req.user._id;
    console.log(newreview);
    listings.reviews.push(newreview);
    await newreview.save();
    await listings.save();
    res.redirect(`/listing/${listings._id}`);
}));

router.delete("/:reviewid",isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
    let { id, reviewid } = req.params;
    await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await review.findByIdAndDelete(reviewid);
    res.redirect(`/listing/${id}`);
}));

module.exports = router;