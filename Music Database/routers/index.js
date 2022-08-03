const express=require('express');
const { route } = require('express/lib/application');
const res = require('express/lib/response');
const router=express.Router();
const Song=require("../models/song");

router.post('/addSong',async (req,res)=>{
    const {songName,filmName,musicDirector,singer,actor,actress}=req.body;
    const song=new Song({songName,filmName,musicDirector,singer,actor,actress});
    await song.save();
})

router.get('/getAllSongs',async (req,res)=>{
    const songs=await Song.find();
    console.log("Total number of documents are",songs.length)
    console.log(songs)
    res.render('index.ejs',{data:songs})
})

router.post('/getSongsByDirector',async (req,res)=>{
    const {musicDirector}=req.body
    const songs=await Song.find({musicDirector});
    console.log(songs)
})

router.post('/getSongsByDirectorAndSinger',async (req,res)=>{
    const {musicDirector,singer}=req.body
    const songs=await Song.find({musicDirector,singer});
    console.log(songs)
})

router.post('/getSongsBySingerAndFilm',async (req,res)=>{
    const {film,singer}=req.body
    const songs=await Song.find({film,singer});
    console.log(songs)
})

//Delete , UPDATE
router.post('/updateActorActressBySong',async(req,res)=>{
    const {actor,actress,songName}=req.body
    const songs=await Song.findOneAndUpdate({songName},{actor,actress});
    console.log(songs)
})

router.post('/deleteSong',async(req,res)=>{
    const {songName}=req.body
    const songs=await Song.findOneAndDelete({songName});
    console.log(songs)
})

//34845


module.exports=router;