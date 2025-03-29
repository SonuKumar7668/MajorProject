const mongoose = require('mongoose');
const listing = require('../Models/listing.js');
const initdata = require('./data.js');

const MONGO_URL = "mongodb+srv://sonu108rp:kMIC3jGUfDBz8cxI@cluster0.iafrosl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    initdata.data=initdata.data.map((obj)=>({...obj,owner: "67e7dab986a3913a116eb875"}));
    await listing.insertMany(initdata.data);
    console.log("data was initialised");
}

initdb();