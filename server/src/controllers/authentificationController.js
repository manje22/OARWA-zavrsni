const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const saltRounds = Number(process.env.SALT_RUNDE);

exports.login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ error: "All fields must be filled" });
    }

    const userDB = await User.findOne({ email: req.body.email });

    if (!userDB || (await !bcrypt.compare(req.body.password, userDB.password)))
      {
        return res.status(401).json({ error: "Bad login information" });
      }

    const token = jwt.sign(
      {
        user: {
          name: userDB.name,
          surname: userDB.surname,
          userId: userDB._id,
          email: userDB.email,
          role: userDB.role,
        },
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    return res.json({ token });
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

exports.registerNewAdmin = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      password: hashedPassword,
      role: 'admin'
    });
    console.log("Created new Admin");
    await newUser.save();
    res.status(201).send("Registration successful");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
