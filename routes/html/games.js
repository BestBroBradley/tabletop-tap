const path = require("path");
const router = require("express").Router();

router.get('/', function (req, res) {
  res.render("index", {pageTitle: "Games", youAreUsingPug: true, 
  sourceJS: path.join(__dirname, "../../client/public/js/pugtest.js")})
})

module.exports = router;