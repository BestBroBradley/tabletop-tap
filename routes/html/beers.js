const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "Beers",
  h1Title: "Booze",
  subtitle: "Whatcha' buyin'?",
  beers: true
}

router.get('/', function (req, res) {
  res.render("index", renderObj)
})

module.exports = router;