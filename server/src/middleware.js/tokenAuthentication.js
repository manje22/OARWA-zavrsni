const checkToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send('Ne postoji autorizacijsko zaglavlje');
  
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).send('Bearer token nije pronađen');
  
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decodedToken;
    } catch (err) {
      return res.status(401).send('Neispravni Token');
    }
    return next();
  };
  

module.exports = authenticateToken;