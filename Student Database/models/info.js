const mongoose=require('mongoose');

const student_info=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Roll_No:{
        type:Number,
        required:true
    },
    WAD:{
        type:Number,
        required:true
    },
    DSBDA:{
        type:Number,
        required:true
    },
    CNS:{
        type:Number,
        required:true
    },
    CC:{
        type:Number,
        required:true
    },
    AI:{
        type:Number,
        required:true
    }
});

module.exports=mongoose.model('info',student_info);