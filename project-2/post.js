const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/', express.static('spider.html'))
app.get('/' ,(req,res)=>{
    res.status(200).send('this is contact page');
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});