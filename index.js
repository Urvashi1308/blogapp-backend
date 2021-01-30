const express=require('express');

//create express app
const app=express();

const PORT=process.env.PORT||3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${PORT}`);
});
