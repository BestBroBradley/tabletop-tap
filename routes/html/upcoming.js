const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "Upcoming",
  h1Title: "Upcoming",
  subtitle: "Events",
  upcoming: true
}

router.get('/', function (req, res) {
  res.render("index", renderObj)
})

module.exports = router;