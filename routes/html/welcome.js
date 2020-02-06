const path = require("path");
const router = require("express").Router();

var renderObj = {
  pageTitle: "Welcome",
  h1Title: "Tabletop Tap",
  subtitle: "The Down Low",
  welcome: true
}

router.get('/', function (req, res) {
  res.render("index", renderObj)
})

module.exports = router;

// sourceJS: path.join(__dirname, "../../client/public/js/pugtest.js")