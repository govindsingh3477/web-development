const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 80;
app.use('/static', express.static('static'))
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/' , (req,res)=>{
    res.sendStatus('200').render()
})


app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});