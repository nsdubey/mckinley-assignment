const jwt = require("jsonwebtoken");
const { JWT } = require("../config/constant");

module.exports = {
  clientApikeyValidation: (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split(" ")[1];
      try {
        const result = jwt.verify(token, JWT.SECRET_KEY, JWT.OPTIONS);
        req.userData = result;
        next();
      } catch (err) {
        return res
          .status(401)
          .json({ message: `Authentication Error ${err.message}` });
      }
    } else {
      return res
        .status(401)
        .json({ message: "Authentication Error. Token required." });
    }
  },
  generateWebToken: payload => {
    return jwt.sign(payload, JWT.SECRET_KEY, JWT.OPTIONS);
  }
};
