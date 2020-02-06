const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "Games",
  h1Title: "Board Games",
  subtitle: "Take a Chance",
  games: true
}

router.get('/', function (req, res) {
  res.render("index", renderObj)
})

module.exports = router;