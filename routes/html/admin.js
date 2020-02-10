const path = require("path");
const router = require("express").Router();
const db = require("../../models");
isAuthenticated = require("../../config/Middleware/isAuthenticated")

router.get('/signup', function (req, res) {

  db.Users.findAll().then(data => {
    if (data == false) {
      return res.render("adminSignUp", {
        pageTitle: "Admin Sign Up", youAreUsingPug: true
      })
    } 
      res.status(403).redirect('/html/admin/');
  })
})

//!! ADD THE MIDDLEWARE isAuthenticated BEFORE WE DEPLOY!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/', isAuthenticated, function (req, res) { //,isAuthenticated
  res.render("admin", { pageTitle: "Admin" ,tier:req.user.tier || "", youAreUsingPug: true })
})

router.get('/login', function (req, res) {
  res.render("login", { pageTitle: "login", youAreUsingPug: true })
})

module.exports = router;


// Don't forget to inject the filename in the pug file
// .catch(()=>{
  
// })
