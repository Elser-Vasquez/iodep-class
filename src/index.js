require('dotenv').config()

const app = require('./app');

async function initServer() {
    await app.listen(app.get('port'));
    console.log('server on port 3000');
}

const Server = initServer();


