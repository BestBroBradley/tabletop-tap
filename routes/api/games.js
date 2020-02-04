const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/books"
router.route("/games")
  .get(gamesController.findAll)
  .post(gamesController.create);

// Matches with "/api/books/:id"
router
  .route("/games/:id")
  .put(gamesController.update)
  .delete(gamesController.remove);

module.exports = router;