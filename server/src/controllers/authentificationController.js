const bcrypt = require('bcrypt');
const User = require('../models/user');

require('dotenv').config();
const saltRounds = Number(process.env.SALT_RUNDE);



exports.login = async (req, res) => {
  try {
    const userDB = await User.findOne({ email: req.body.email });

    if (userDB && await bcrypt.compare(req.body.password, userDB.password)) {
      return res.send('Prijava uspjesna');
    }
    res.status(401).send('Bad login information');

  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.register = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      password: hashedPassword,
    });
    console.log("Created new user");
    await newUser.save();
    res.status(201).send("Registration successful");
  } catch (error) {
    res.status(500).send(error.message);
  }
};