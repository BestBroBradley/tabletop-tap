const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "Contact Us",
  h1Title: "Have a compliment or suggestion?",
  subtitle: "Choose your method",
  contact: true
}

router.get('/', function (req, res) {
  res.render("index", renderObj)
})

module.exports = router;