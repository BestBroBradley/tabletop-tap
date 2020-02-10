const path = require("path");
const router = require("express").Router();
const db = require("../../models/");

router.get('/', function (req, res) {
  db.Hours.findAll({

  }).then(data => {
    var renderObj = {
      pageTitle: "Welcome",
      h1Title: "Tabletop Tap",
      subtitle: "The Down Low",
      welcome: true,
      hours: data
    }

    res.render("index", renderObj)
  })
})

module.exports = router;

// sourceJS: path.join(__dirname, "../../client/public/js/pugtest.js")