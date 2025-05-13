const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  surname: String,
  email: { type: String, required: true },
  password: String,
  role: { type: String, default: "user" },
});


module.exports = mongoose.model('User', userSchema);