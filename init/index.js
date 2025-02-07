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
    // await listing.deleteMany({});
    await listing.insertMany(initdata.data);
    console.log("data was initialised");
}

initdb();