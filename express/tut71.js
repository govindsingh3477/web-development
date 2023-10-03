const express = require('express');
const path = require('path');
const app = express()
const port = 80;
app.get('/' ,(req,res)=>{
    res.status(200).send('this is home page');
})
app.get('/about' ,(req,res)=>{
    res.status(200).send('this is about page');
})
app.get('/contact' ,(req,res)=>{
    res.status(200).send('this is conatact page');
})
app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
