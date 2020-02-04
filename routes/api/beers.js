const router = require("express").Router();
const beersController = require("../../controllers/beersController");

// Matches with "/api/books"
router.route("/")
  .get(beersController.findAll)
  .post(beersController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .put(beersController.update)
  .delete(beersController.remove);

module.exports = router;