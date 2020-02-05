const router = require("express").Router();
const hoursController = require("../../controllers/hoursController");

// Matches with "/api/books"
router.route("/")
  .get(hoursController.findAll)
  .post(hoursController.create);

// Matches with "/api/books/:id"
router
  .route("/hours/:id")
  .put(hoursController.update)
  .delete(hoursController.remove);

module.exports = router;