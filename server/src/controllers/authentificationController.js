const bcrypt = require('bcrypt');
const User = require('../models/user');

require('dotenv').config();
const salt_runde = parseInt(process.env.SALT_RUNDE);

exports.login = async (req, res) => {
  try{
    const userDB = await User.findOne({email: req.body.email});
    if (userDB && await bcrypt.compare(req.body.password, userDB.password)) {
        res.send('Prijava uspjesna');
    } else{
        res.status(401).send('Bad login information');
    }
  } catch(error){
    res.status(500).send(error.message);
  }
};

exports.register = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, salt_runde);
        const newUser = new User({
            email : req.body.email,
            name : req.body.name,
            surname : req.body.surname,
            password : hashPassword
        });
        console.log("Created new user");
        await newUser.save();
        res.status(201).send('Registration successful');
    } catch (error) {
        res.status(500).send(error.message);
    }
};