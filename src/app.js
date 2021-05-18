const express = require('express');
const morgan = require('morgan')    //middlewares
const path = require('path');      // modulo incluido en Node por defecto (para concatenar direcciones archivos) 
import cors from 'cors';
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

app.use(cors()); 
//configuracion de graphql
import { ApolloServer } from 'apollo-server-express';

import { schema_apiVue } from './graphql';

const serverApiVue = new ApolloServer({
  schema: schema_apiVue,
  playground: true,
  introspection: true
});   

serverApiVue.applyMiddleware({ app, path: '/apiVue' });   // al servidor de apollo enlazamos el servidor de express


module.exports = app;

