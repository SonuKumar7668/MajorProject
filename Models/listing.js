const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const review = require("./review.js");

const listSchema = new Schema({
    title: String,
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: Number,
    location: String,
    Country: String,
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

listSchema.post("findOneAndDelete", async (listings) => {
    if (listings) {
        await review.deleteMany({ _id: { $in: listings.reviews } });
    }
});

const listing = mongoose.model("Listing", listSchema);
module.exports = listing;