const commentModel = require("../model/comment");

module.exports = {
  send: async (req, res, next) => {
    try {

    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", data: {} });
    }
  },

  getAll: async (req, res, next) => {
    try {

    } catch (err) {
      return res
        .status(500)
        .json({ message: "Something went wrong!", data: {} });
    }
  },
};
