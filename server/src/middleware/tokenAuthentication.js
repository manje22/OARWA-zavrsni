const tokenAuthenticaton = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send('Authentification header does not exist');
  
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).send('Bearer token not found');
  
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decodedToken;
    } catch (err) {
      return res.status(401).send('Invalid Token');
    }
    return next();
  };
  

module.exports = tokenAuthenticaton;