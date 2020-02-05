var db = require("../models");
var passport = require("../config/passport");
var isitin = require("../config/Middleware/isAuthenticated")
module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error 




  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    if (req.user) {
      console.log("yeah buddy")
    }
    res.json(req.user);
  });

  app.get("/api/login", isitin, function (req, res) {
    if (req.user) {
      console.log("yeah buddy")
    }
  });

  //please refer to this as an example on how to authenticate an user
};
