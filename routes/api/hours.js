const router = require("express").Router();
const hoursController = require("../../controllers/hoursController");

// Matches with "/api/books"
router.route("/")
  .get(hoursController.findAll)
  .post(hoursController.create)
  .put(hoursController.update);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .delete(hoursController.remove);


module.exports = router;