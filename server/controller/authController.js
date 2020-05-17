const userModel = require("../model/user");
const md5 = require("md5");

const { generateWebToken } = require("../middleware/authentication");

module.exports = {
  login: async (req, res) => {
    try {
      const { password, username } = req.body;
      const passwordHash = md5(password);
      const User = await userModel
        .findOne({ username: username })
        .lean();
      if (!User) {
        return res
          .status(402)
          .json({ message: "Username not found", data: {} });
      }
      if (User.password !== passwordHash) {
        return res.status(402).json({ message: "Password mismatch", data: {} });
      }

      //Generate Token
      const token = generateWebToken({ userId: User._id });
      User.token = token;
      return res
        .status(200)
        .json({ message: "Successfully Logged in", data: User });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", data: {} });
    }
  },
  signup: async (req, res) => {
    try {
      console.log("signup...........")
      const { password, username } = req.body;
      const passwordHash = md5(password);
      const User = await userModel.create({
        username: username,
        password: passwordHash
      });
      if (User) {
        return res
          .status(200)
          .json({ message: "Successfully Signed up", data: User });
      } else {
        return res.status(200).json({ message: "Signed up Failed", data: {} });
      }
    } catch (err) {
      return res.status(500).json({ message: "Signup Failed" });
    }
  }
};
