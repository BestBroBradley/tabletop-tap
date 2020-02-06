const path = require("path");
const router = require("express").Router();

router.get('/', function (req, res) { 
  res.render("admin", {pageTitle: "Admin",user:req.user, youAreUsingPug: true})
})

router.get('/signup', function (req, res) { 
  res.render("adminSignUp", {
    pageTitle: "Admin Sign Up", youAreUsingPug: true
  })
})

module.exports = router;


// Don't forget to inject the filename in the pug file
