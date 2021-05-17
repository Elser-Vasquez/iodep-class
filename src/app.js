const express = require('express');
const morgan = require('morgan')    //middlewares
const path = require('path');      // modulo incluido en Node por defecto (para concatenar direcciones archivos) 

//inicializar 
const app = express();
var expressWs = require('express-ws')(app);

//configuraciones 
app.set('port', 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));   
app.use(express.json());      //express entiende formato json



app.use('/api', require('./routes'));


module.exports = app;

