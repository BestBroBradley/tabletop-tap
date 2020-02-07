const router = require("express").Router();
const hoursController = require("../../controllers/hoursController");

// Matches with "/api/books"
router.route("/")
  .get(hoursController.findAll)
  .post(hoursController.create)
  .put(hoursController.update);


module.exports = router;