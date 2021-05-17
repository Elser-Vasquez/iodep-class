const { Schema, model } = require('mongoose');          // requerimos la funcion de creacion de schema y model
const bcrypt = require('bcryptjs');

const userSchema = new Schema({               
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  created: { type: Date, default: Date.now } 
}, {
  timestamps: false
});

//agregamos el uso de bcrypt al esquema de mongoose
userSchema.methods.encryptPassword = async (password) => {    // creamos un metodo llamado (encryptPassword)
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);                         // retorna una contraseña cifrada
};

userSchema.methods.matchPassword = async function(password) {    // creamos un metodo llamado (matchPassword) para compara contraseñas cifradas
  return await bcrypt.compare(password, this.password);
};

module.exports = model('user', userSchema)  //exportamos el modelo ... con el nombre (User) -- en singular
