const path = require("path");
const router = require("express").Router();
const db = require("../../models/");

router.get('/', function (req, res) {

  db.Beers.findAll({
  }).then(data => {
    var renderObj = {
      pageTitle: "Beers",
      h1Title: "Booze",
      subtitle: "Whatcha' buyin'?",
      beers: true,
      beersArray: data
    }
    res.render("index", renderObj)
  })
})
module.exports = router;