const User = require("../models/user");

const userExists = async (req, res, next) => {
  const email = req.body.email;
  try {
    const emailInUse = await User.exists({ email: email });
    if (emailInUse) {
      console.log(`Email: ${email} already in use`);
      return res.status(500).send("Email already in use");
    }

    return next();
  } catch (error) {
    console.log("Error occured while checking if email is in use:", error);
    return res.status(500).json({ message: "Server error :(" });
  }
};

module.exports = userExists;
