




const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const cors = require('cors');

//var indexRouter = require();
//var usersRouter = require();

//Import Routes
const getanimals = require('./getAnimals');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use('/test', getanimals);


module.exports = app;