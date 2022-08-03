const express=require('express');
const path=require('path');
const app=express();
const ejs=require('ejs');
const mainRouter=require('./routers/index')
require('./db/mongoose')

const port=3000;


const viewsPath=path.join(__dirname,'./views');
const publicPath=path.join(__dirname,'./public')

app.set('view engine','ejs');
app.set('views',viewsPath);
app.use(express.static('publicPath'))
app.use(express.json());
app.use(mainRouter)

app.listen(port,()=>{
    console.log("Server is up and running on port",port)
})