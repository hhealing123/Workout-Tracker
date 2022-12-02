const jwt = require('jsonwebtoken');

// Sets up token secret and expiration date
const secret = 'secretthatnooneknows';
const expiration = '1h';

module.exports = {
  // authMiddleware function will authenticate the routes
  authMiddleware: function (req, res, next) {
    // Allows token to be sent via req.query or headers
    let token = req.query.token || req.headers.authorization;

    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
    if (!token) {
      return res.status(400).json({ message: 'There is no token... Please try again!' });
    }
    // Verify token and will get user data from it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token... Please try again!');
      return res.status(400).json({ message: "Invalid token... Please try again!" });
    }
    
    // Allows to send to next end-point
    next();

  },

  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

};
