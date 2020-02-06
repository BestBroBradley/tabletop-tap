const path = require("path");
const router = require("express").Router();
const db = require("../../models");
isAuthenticated = require("../../config/Middleware/isAuthenticated")

router.get('/', function (req, res) {

  db.Users.findAll().then(data => {
    if (data == false) {
      return res.render("adminSignUp", {
        pageTitle: "Admin Sign Up", youAreUsingPug: true
      })
    } 
      res.redirect(403,'/html/admin/signedUp')
  })
})

router.get('/signedUp',isAuthenticated, function (req, res) {
  res.render("admin", { pageTitle: "Admin", youAreUsingPug: true })
})

module.exports = router;


// Don't forget to inject the filename in the pug file
// .catch(()=>{
  
// })