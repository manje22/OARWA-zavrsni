const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const user = require('../models/user');

exports.login = async (req, res) => {
  try{
    const userDB = await User.findOne({email: req.body.email});
    if (userDB && await bcrypt.compare(req.body.password, user.password)) {
        const token = jwt.sign({ userId: userDB.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.json({ token });
    } else{
        res.status(401).send('Bad login information');
    }
  } catch(error){
    res.status.send(error.message);
  }
};

exports.register = async (req, res) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.password, process.env.SALT_RUNDE);
        const newUser = new User({
            email : req.body.email,
            name : req.body.name,
            surname : req.body.surname,
            password : hashPassword
        });
        await newUser.save();
        res.status(201).send('Registration successful');
    } catch (error) {
        res.status(500).send(error.message);
    }
};