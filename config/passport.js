const LocalStrategy = require("passport-local").Strategy;
var passport = require("passport");

passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ login: username }, function (err, user) {
        if (err) { return done(err); } //throws errer to frontend
        if (!user) { return done(null, false); } // if there is no user sends false to front end
        if (!user.verifyPassword(password)) { return done(null, false); } //if there is a user but the password doesn't match sends false,
        return done(null, user); //if it didn't get stuck in anything sends the authenticated user to the front end.
      });
    }
  ));



  // In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
  
  // Exporting our configured passport
  module.exports = passport;