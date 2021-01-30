require('dotenv').config();
const express=require('express');
const mongoose = require('mongoose');

//create express app
const app=express();


mongoose.Promise=global.Promise;
const db = process.env.MONGO_URI;
mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true }).then(()=>
    {console.log("DB is connected");
}    
).catch((err)=>{
    console.log(err);
    process.exit();
})

const PORT=process.env.PORT||3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${PORT}`);
});
