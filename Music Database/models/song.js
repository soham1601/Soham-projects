const mongoose=require('mongoose');

const songSchema=new mongoose.Schema({
    songName:{
        type:String,
        required:true
    },
    filmName:{
        type:String,
        required:true
    },
    musicDirector:{
        type:String,
        required:true
    },
    singer:{
        type:String,
        required:true
    },
    actor:{
        type:String,
        required:true
    },
    actress:{
        type:String,
        required:true
    },
})

const Song=mongoose.model('song',songSchema);

module.exports=Song;