const Blog=require('../models/model');

exports.getall=async(req,res)=>{
    let data;
    try{
         data=await Blog.find();
         //console.log(data);
    }catch(error){
        if(err) res.status(500).json(err); 
    }
    res.status(200).json(data);
}
exports.getone=async(req,res)=>{
    let data;
    try{
    data = await Blog.findById(req.params.blogID);
    //console.log(data);
    }catch(error){
            if(err) res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg":"Blog not found"});
    res.status(200).json(data);

}
//get one blog by title
exports.getoneTitle=(req,res)=>{

    var query = Blog.where({ title :req.params.title});
    query.findOne(function(err, Blog){
        if (err)
          return res.send(err)
        res.json(Blog);
    })
 
 }
 //get one blog by author
 exports.getoneAuthor=(req,res)=>{
 
     var query = Blog.where({ author :req.params.author});
     query.findOne(function(err, Blog){
         if (err)
           return res.send(err)
         res.json(Blog);
     })
  
 }
 //get one blog by description
  exports.getoneDesc=(req,res)=>{
 
     var query = Blog.where({ desc :req.params.desc});
     query.findOne(function(err, Blog){
         if (err)
           return res.send(err)
         res.json(Blog);
     })
  
  }
// exports.create=(req,res)=>{
//     const newblog=new Blog({
//         title:req.body.title,
//         author:req.body.author,
//         desc:req.body.desc
//     });
//     newblog.save().then((blog)=>{
//         res.status(201).json({"msg":"created","blog":blog});
//     }).catch((err)=>{
//         if(err) return res.status(500).json(err);
//     });
    
// }

exports.create= async(req,res)=>{
    const newblog= new Blog({
        title:req.body.title,
        author:req.body.author,
        desc:req.body.desc
    });
    let data;
    try{
        data= await newblog.save();
    }
    //console.log(newblog);
    catch(error)
    {
        if(err) return res.status(500).json(err);
    }
    
    res.status(201).json({"msg":"created","blog":data});
    
}

exports.updateone=async(req,res)=>{
    if(!req.body.title||!req.body.desc||!req.body.author)
    return res.status(500).json({"msg":"fill all the fields"});
    let data;
    try{
    data = await Blog.findByIdAndUpdate(req.params.blogID,{
        title: req.body.title,
       // author:req.body.author,
        desc:req.body.desc
        //$set:req.body does the same work in three statements
    },{new: true, useFindAndModify: false})}
    catch(error){
            if(err) res.status(500).json(err);
        }
        if(!data) return res.status(404).json({"msg":"Not found"});
            res.status(202).json({
                "msg":"updated",
                "doc":data
            });   
}

exports.deleteone=async(req,res)=>{
    let data;
    try{
    data = await Blog.findByIdAndDelete(req.params.blogID)
    }catch(error){
      if(err) res.status(500).json(err);
    }
    if(!data) return res.status(404).json({"msg":"Blog not found"});
         res.status(202).json({
          "msg":"deleted",
          "doc":data
         });

  }