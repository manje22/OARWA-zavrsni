const checkRole = (role) => (req, res, next) => {
  console.log("Req from auth middleware", req.user);
  if (req.user && req.user.role === role) {
    next();
  } else {
    res.status(403).json({error:`Access forbbiden - your role: ${req.user.role} `});
  }
};


module.exports = checkRole;