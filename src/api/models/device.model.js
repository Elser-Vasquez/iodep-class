const { Schema, model } = require('mongoose')

const deviceSchema = new Schema({
    name: { type: String, require: true},
    description: { type: String, require: true}
}, {
    timestamps: true
});

module.exports= model('Device', deviceSchema)