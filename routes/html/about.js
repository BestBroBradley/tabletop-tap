const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "About",
  h1Title: "About",
  subtitle: "Whatcha' buyin'?",
  about: true
}


router.get('/', function (req, res) {
  res.render("index", renderObj);
})

module.exports = router;
