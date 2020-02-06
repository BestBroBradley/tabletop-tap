const path = require("path");
const router = require("express").Router();


router.get('/', function (req, res) {
  res.render("admin2", {pageTitle: "Admin",user:req.user, youAreUsingPug: true})
})

module.exports = router;


// Don't forget to inject the filename in the pug file
