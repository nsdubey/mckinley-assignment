const Joi = require("@hapi/joi");
module.exports = {
  loginValidator: (req, res, next) => {
    try {
      const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
      });
      const { error } = schema.validate(req.body);
      if (error)
        return res.status(402).json({ message: error.message, data: {} });
      next();
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", data: {} });
    }
  },
  signupValidator: (req, res, next) => {
    try {
      console.log("singup..........")
      const schema = Joi.object().keys({
        username: Joi.string().required(),
        password: Joi.string().required()
      });
      const { error } = schema.validate(req.body);
      if (error)
        return res.status(402).json({ message: error.message, data: {} });
      next();
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", data: {} });
    }
  }
};
