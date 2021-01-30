require('dotenv').config();
const express=require('express');
const routes= require('./routes/routes');
const bodyparser=require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
//create express app
const app=express();

//parse application/ x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended : false}));
//parse application json
app.use(bodyparser.json());
app.use('/api',routes);
app.use(cors());

mongoose.Promise=global.Promise;
const db = process.env.MONGO_URI;
mongoose.connect(db,{useUnifiedTopology: true, useNewUrlParser: true }).then(()=>
    {console.log("DB is connected");
}    
).catch((err)=>{
    console.log(err);
    process.exit();
})

app.get('/',function(req,res){
    res.json({"message": "welcome to crud api's"});
});
app.use('*',(req,res,next)=>
{
res.status(404).json({"mssg":"not found"});
});

const PORT=process.env.PORT||3000;
app.listen(PORT,(err)=>{
    if(err) console.log(err);
    else console.log(`port is live at ${PORT}`);
});
