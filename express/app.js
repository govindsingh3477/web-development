const express = require("express");
const path = require('path');
const app = express();
const port = 80
app.use('/static' , express.static('static'));
app.set('view engine' ,'pug')
app.set('views',path.join(__dirname,'views'))
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});
app.get('/' ,(req,res)=>{
    res.status(200).send('this is home page');
})
app.get('/about' ,(req,res)=>{
    res.status(200).send('this is about page');
})
app.get('/contact' ,(req,res)=>{
    res.status(200).send('this is contact page');
})
app.post('/about' ,(req,res)=>{
    res.status(200).send('this is post about page');
})
app.listen(port ,()=>{
    console.log(`the app is started on post ${port}`);
})