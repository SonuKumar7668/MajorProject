const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const listing = require('../Models/listing.js');

router.post("/",wrapAsync(async(req,res)=>{
    let input= req.body.input;
    console.log(input);
    let listings = await listing.find({
        $or: [
            {title : { $regex: new RegExp(`^${input}$`, "i") }},
            {location : { $regex: new RegExp(`^${input}$`, "i") }},
            {Country : { $regex: new RegExp(`^${input}$`, "i") }}
        ]
    })
    // console.log(listings);
    res.render("listings/index.ejs",{listings});
}));

module.exports = router;