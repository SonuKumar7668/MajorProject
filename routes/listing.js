const express = require("express");
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.submitnewlist))

router.get("/:id", wrapAsync(listingController.showlist));

router.get("/post/new", isLoggedIn, wrapAsync(listingController.createnewlist));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.editlist));

router.put("/updatelist/:id", isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.submitEditList));

router.delete("/:id/delete", isLoggedIn, isOwner, wrapAsync(listingController.deleteList));

module.exports = router;