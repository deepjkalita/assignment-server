
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');



//sql database file require
var mysqldb = require('./mysql.db.service');

// Connect to MySQL on start
mysqldb.connect(mysqldb.MODE_PRODUCTION, function(err){
    if(!err){
        console.log('mySql is connected');
    }
});


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS error handler
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', true);
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests

// Error handler
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});







module.exports = app;
