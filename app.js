const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})