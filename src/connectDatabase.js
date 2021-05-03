const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('db is connected.....'))
    .catch(error => console.log(error))