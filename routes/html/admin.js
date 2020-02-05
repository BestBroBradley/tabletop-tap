const path = require("path");
const router = require("express").Router();


router.get('/', function (req, res) {
  res.render("index", {pageTitle: "Admin", youAreUsingPug: true, 
  sourceJS: path.join(__dirname, "/js/admin.js")})
})

module.exports = router;