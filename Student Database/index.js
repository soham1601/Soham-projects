const express=require('express');
const mongoose=require('mongoose');
const app=express();
const ejs=require('ejs');
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const studentRoute=require('./routes/students');
app.use('/students',studentRoute);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.render("index");
})


mongoose.connect('mongodb+srv://soham:123@cluster0.lrkgw.mongodb.net/student?retryWrites=true&w=majority',()=>{
    console.log('Database ');
})
app.listen(3000);