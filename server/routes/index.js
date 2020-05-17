const express = require("express");

const router = express.Router();

require("./auth")(router);
require("./messages")(router);

module.exports = router;
