const express = require('express');

const app =  express();


//routes
app.get('/',(req,res) => {
    res.send('Olá caramba!!!');
});

//how to we start lsitening to the server 
app.listen(3000);