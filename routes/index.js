const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const db = require("../models/");

// /api
router.use("/api", apiRoutes);
// /html
router.use("/html", htmlRoutes);

// "/""
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

router.get('/', function (req, res) {
  res.render("index", renderObj);
})


module.exports = router;