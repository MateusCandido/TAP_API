
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

//MongoDB

const mongoose = require('mongoose');
mongoose.connect(
'mongodb+srv://mateus:preto.preto@cluster0-uypf5.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Mongo Ligado")
});

