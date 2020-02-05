const path = require("path");
const router = require("express").Router();

router.get('/', function (req, res) {
  res.render("index", {pageTitle: "Games", youAreUsingPug: true})
})

module.exports = router;