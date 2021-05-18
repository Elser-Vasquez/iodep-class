require('dotenv').config()

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;

const app = require('./app');

async function initServer() {
    await app.listen(app.get('port'));
    console.log('server on port ', app.get('port'));
}

mongoose.connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then( function( db ){
        console.log('database in connected...');
    })
         
    .catch( function( error ){
        console.log('error connecting to database...', error)
    }) 

const Server = initServer();