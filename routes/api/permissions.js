const router = require("express").Router();
const permissionsController = require("../../controllers/permissionsController");

// Matches with "/api/books"
router.route("/")
  .get(permissionsController.findAll)
  .post(permissionsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(permissionsController.findById)
  .put(permissionsController.update)
  .delete(permissionsController.remove);

module.exports = router;