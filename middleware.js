const listing = require("./Models/listing.js");
const Review = require('./Models/review.js');
const expressError = require('./utils/expressError.js');
const { listingSchema,reviewSchema } = require("./schema.js");

module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You must be logged in!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        req.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner= async(req,res,next)=>{
    let { id } = req.params;
    let listings=await listing.findById(id);
    if(!listings.owner._id.equals(res.locals.user._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listing/${id}`);
    }
    next();
}

module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    }else{
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        let errorMessage = error.details.map((el) => el.message).join(",");
        throw new expressError(400, errorMessage);
    }else{
        next();
    }
}

module.exports.isReviewAuthor= async(req,res,next)=>{
    let { id,reviewid } = req.params;
    console.log(reviewid);
    let review=await Review.findById(reviewid);
    console.log(review);
    if(!review.author.equals(res.locals.user._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listing/${id}`);
    }
    next();
}