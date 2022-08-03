const express=require('express');
const router=express.Router();
const info=require('../models/info');

router.get('/',async(req,res)=>{
  try{
    const studentmarks=await info.find();
    //res.json(studentmarks);
    res.render('index.ejs',{data:studentmarks}); 
  }
  catch(err){
    res.json({message:err});
  }
});


router.post('/',(req,res)=>{
  var data=new info(req.body);
  data.save()
  .then(item=>{
      res.send("Item Saved successfully")
  })
  .catch(err => {
      res.status(400).send("unable to save to database");
  })
});

router.get('/dsbda',async (req,res)=>{
  var y=await info.find({"DSBSA":{$gt:20}}).select("Name")
  res.json(y);
})


//get more than 25 marks in all subjects
router.get('/allsub',async (req,res)=>{
  var y=await info.find({$and:[
      {"DSBSA":{$gt:25}},
      {"WAD":{$gt:25}},
      {"CC":{$gt:25}},
      {"CNS":{$gt:25}},
      {"AI":{$gt:25}}
  ]})
  .select("Name")
  res.json(y);
})
router.delete('/:postId',async(req,res)=>{
  try{
      const removedPost=await info.remove({'_id':req.params.postId});
      res.json(removedPost);
  }
  catch{
      res.json({message:err});
  }
})

router.patch('/:postId',async(req,res)=>{
  try{
     const updated=await info.updateOne({'_id':req.params.postId},{ $set:{DSBDA:req.body.DSBDA}});
     res.json(updated);
  }
  catch{
    res.json({message:err});
  }
})


module.exports=router;