var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function(req, res){
    res.send('hello world');
});

app.use(function(req, res){
    res.status(404).send('404');
});

app.listen(3000);