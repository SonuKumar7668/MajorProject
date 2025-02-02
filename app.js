const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodoverride= require("method-override")
const app = express();
const port = 3000;
const listing = require('./Models/listing.js');

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/listing",async (req,res)=>{
    let listings = await listing.find();
    // console.log(listings);
    res.render("listings/index.ejs",{listings});
});

app.get("/listing/:id", async (req,res)=>{
    let {id}= req.params;
    let content = await listing.findById(id);
    res.render("listings/show.ejs",{content});
});

app.get("/listing/post/new", async(req,res)=>{
    res.render("listings/newpost.ejs");
});

app.post("/newlist",async(req,res)=>{
    let list =new listing(req.body.listing);
    await list.save();
    res.redirect("/listing");

});

app.get("/listing/:id/edit",async(req,res)=>{
    let {id}= req.params;
    // console.log(id);
    let data=await listing.findById(id);
    res.render("listings/editlist.ejs",{data});
});

app.put("/updatelist/:id",async(req,res)=>{
    let {id}= req.params;
    await listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listing");

})

app.delete("/listing/:id/delete", async(req,res)=>{
    let {id}= req.params;
    await listing.findByIdAndDelete(id);
    res.redirect(`/listing`);
})

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})