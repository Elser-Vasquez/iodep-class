
const express = require('express');

const morgan = require('morgan')    //middlewares 

//inicializar 
const app = express();

//database
require('./connectDatabase')


//configuraciones 
app.set('port', 3000);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));   
app.use(express.json());      //express entiende formato json


//rutas del servidor 
//http://localhost:3000/api

app.use('/api', require('./api/routes'));


module.exports = app;

