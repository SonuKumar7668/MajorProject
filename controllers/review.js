const listing = require('../Models/listing.js');
const review = require('../Models/review.js');

module.exports.postReview = async (req, res) => {
    let listings = await listing.findById(req.params.id);
    let newreview = new review(req.body.review);
    newreview.author = req.user._id;
    console.log(newreview);
    listings.reviews.push(newreview);
    await newreview.save();
    await listings.save();
    res.redirect(`/listing/${listings._id}`);
}

module.exports.deleteReview = async (req, res) => {
    let { id, reviewid } = req.params;
    await listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await review.findByIdAndDelete(reviewid);
    res.redirect(`/listing/${id}`);
}