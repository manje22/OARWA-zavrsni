const checkRole = (role) => (req, res, next) => {
  if (req.body && req.body.role === role) {
    next();
  } else {
    res.status(403).send(`Access forbbiden - your role: ${req.body.role} `);
  }
};


module.exports = checkRole;