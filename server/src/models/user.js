//Ovo imamo prethodno definirano
const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  surname: String,
  email: { type: String, required: true },
  password: String
});


module.exports = mongoose.model('user', userSchema);