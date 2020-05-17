const messagesController = require("../controller/messagesController");
const { clientApikeyValidation } = require("../middleware/authentication");

module.exports = router => {
  router.post(
    "/messages/send",
    clientApikeyValidation,
    messagesController.send
  );

  router.post(
    "/messages",
    clientApikeyValidation,
    messagesController.getAll
  );
};
