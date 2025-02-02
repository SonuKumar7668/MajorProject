const mongoose = require('mongoose');
const listing = require('../Models/listing.js');
const initdata = require('./data.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initdb= async()=>{
    await listing.deleteMany({});
    await listing.insertMany(initdata.data);
    console.log("data was initialised");
}

initdb();
const l2=new listing(
    {
        title:"newone",
        description: "temp description",
        image:"https://images.unsplash.com/photo-1738230077816-fbab6232c545?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:10000,
        location: "Delhi",
        Country: "India"
    }
)
l2.save();