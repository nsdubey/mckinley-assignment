const { loginValidator, signupValidator } = require("../middleware/validator/authValidator");
const authController = require("../controller/authController");

module.exports = router => {
  /*********** Signup ************/
  router.post("/signup", signupValidator, authController.signup);

  /*********** Login ************/
  router.post("/login", loginValidator, authController.login);

  /*********** Logout ************/
  router.post("/logout", (req, res) => {});
};
