const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const review = require("./review.js");

const listSchema = new Schema({
    title: String,
    description: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => v === "" ? "https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v,
    },
    price: Number,
    location: String,
    Country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }]
});

listSchema.post("findOneAndDelete", async (listings) => {
    if (listings) {
        await review.deleteMany({ _id: { $in: listings.reviews } });
    }
});

const listing = mongoose.model("Listing", listSchema);
module.exports = listing;