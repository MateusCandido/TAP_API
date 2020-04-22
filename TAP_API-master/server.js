const express = require('express')
const bodyParser = require('body-parser')

const cursoRotas = require('./routes/curso-routes.js');

const app = express(); 
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/cursos', cursoRotas);

const port = process.env.PORT || 3000

app.listen(port, () => { console.log('Server Ligado') });