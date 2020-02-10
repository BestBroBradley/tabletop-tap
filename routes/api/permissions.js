const router = require("express").Router();
const passport = require("../../config/passport");
const permissionsController = require("../../controllers/permissionsController");
const isAuthenticated = require("../../config/Middleware/isAuthenticated");

// Matches with "/api/permissions"
router.route("/")
  .get(permissionsController.findAll)
  .post(permissionsController.create)
  .put(isAuthenticated,permissionsController.update);

// Matches with "/api/permissions/:id"
router
  .route("/:id")
  .delete(isAuthenticated,permissionsController.remove);

router.route("/login")
.post(passport.authenticate("local"),permissionsController.authenticate);

//.post .post
router.route('/logout')
  .get(isAuthenticated,permissionsController.logout);
module.exports = router;



// .get(isAuthenticated("ADMIN","/api/"),()=>{console.log("yadayadayada")})