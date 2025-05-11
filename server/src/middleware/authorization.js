const checkRole = (role) => (req, res, next) => {
  console.log(req.body);
  if (req.body && req.body.role === role) {
    next();
  } else {
    res.status(403).json({error:`Access forbbiden - your role: ${req.body.role} `});
  }
};


module.exports = checkRole;