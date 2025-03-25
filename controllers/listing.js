const listing = require('../Models/listing.js');
const { listingSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
    let listings = await listing.find();
    res.render("listings/index.ejs", { listings });
}

module.exports.showlist = async (req, res) => {
    let { id } = req.params;
    let content = await listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!content) {
        req.flash("error", "listing you searched for does not exist");
        res.redirect("/listing");
    }
    res.render("listings/show.ejs", { content });
}

module.exports.createnewlist = async (req, res) => {
    res.render("listings/newpost.ejs");
}

module.exports.submitnewlist = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let result = listingSchema.validate(req.body);
    let list = new listing(req.body.listing);
    list.owner = req.user._id;
    list.image = { url, filename };
    await list.save();
    req.flash("success", "registered sucessfully");
    res.redirect("/listing");
}

module.exports.editlist = async (req, res) => {
    let { id } = req.params;
    // console.log(id);
    let data = await listing.findById(id);
    if (!data) {
        req.flash("error", "listing you searched for does not exist");
        res.redirect("/listing");
    }
    let originalimg = data.image.url;
    originalimg = originalimg.replace("/upload", "/upload/h_300,w_250")
    res.render("listings/editlist.ejs", { data, originalimg });
}

module.exports.submitEditList = async (req, res) => {
    let { id } = req.params;
    let Listing = await listing.findByIdAndUpdate(id, { ...req.body.listing });
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        Listing.image = { url, filename };
        await Listing.save();
    }
    req.flash("success", "List updated");
    res.redirect(`/listing/${id}`);
}

module.exports.deleteList = async (req, res) => {
    let { id } = req.params;
    await listing.findByIdAndDelete(id);
    req.flash("success", "List deleted");
    res.redirect(`/listing`);
}