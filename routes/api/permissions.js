const router = require("express").Router();
const permissionsController = require("../../controllers/permissionsController");

// Matches with "/api/books"
router.route("/")
  .get(permissionsController.findAll)
  .post(permissionsController.create)
  .put(permissionsController.update);

// Matches with "/api/books/:id"
router
  .route("/:login")
  .delete(permissionsController.remove);

module.exports = router;