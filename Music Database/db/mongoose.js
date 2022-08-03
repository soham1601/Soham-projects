const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://soham:<password>@cluster0.lrkgw.mongodb.net/test',(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("database connected!")
})