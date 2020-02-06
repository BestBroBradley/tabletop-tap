const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "About",
  h1Title: "Meet the Makers",
  subtitle: "...And the Dog",
  about: true
}


router.get('/', function (req, res) {
  res.render("index", renderObj);
})

module.exports = router;
