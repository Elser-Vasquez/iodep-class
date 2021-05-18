const { Schema, model } = require('mongoose');          // requerimos la funcion de creacion de schema y model


const userSchema = new Schema({               
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  created: { type: Date, default: Date.now } 
}, {
  timestamps: false
});


module.exports = model('User', userSchema)  //exportamos el modelo ... con el nombre (User) -- en singular
