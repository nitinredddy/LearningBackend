require('dotenv').config()
const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello world");
})
app.get('/twitter',(req,res)=>{
    res.send("twitter")
})

app.get('/youtube',(req,res)=>{
    res.send("Hello world")
})
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
})