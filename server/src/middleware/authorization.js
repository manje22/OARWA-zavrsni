const checkRole = (role) => (req, res, next) => {
  if (req.user && req.user.role === role) {
    next();
  } else {
    res
      .status(403)
      .send(`Access forbbiden - your role is ${req.user.role} `);
  }
};


module.exports = checkRole;