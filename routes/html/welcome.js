const path = require("path");
const router = require("express").Router();

router.get('/', function (req, res) {
  res.render("index", {pageTitle: "Welcome", youAreUsingPug: true })
})

module.exports = router;

// sourceJS: path.join(__dirname, "../../client/public/js/pugtest.js")