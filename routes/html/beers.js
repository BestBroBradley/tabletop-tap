const path = require("path");
const router = require("express").Router();


router.get('/', function (req, res) {
  res.render("index", {pageTitle: "Beers", youAreUsingPug: true, 
  sourceJS: path.join(__dirname, "../../client/public/js/pugtest.js.js")})
})

module.exports = router;