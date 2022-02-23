const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;
 

//var indexRouter = require();
//var usersRouter = require();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json());

//Connect to DB
mongoose.connect('mongodb+srv://mkieffer:Aspenparks12@cluster0.t6jua.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true},
    () => console.log("Connected")
);

//Import Routes
const getanimals = require('./getAnimals');

app.use('/test', getanimals);




//app.use(express.static(__dirname));
//app.use(express.json());
app.listen(process.env.PORT ?? 8080);
//app.listen(port, ()=>console.log('Application Started'));
