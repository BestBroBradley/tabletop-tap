const express = require("express");
var session = require("express-session");
const passport = require("./config/passport");
const PORT = process.env.PORT || 8080;


const db = require("./models");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);



db.sequelize.sync({ force: true }).then(function() {

  db.Users.create({
    login:"test",
    password:"password",
    email:"test@gmail.com",
    tier:"ADMIN"
  })
  
  // .then(()=>{
  //   db.Users.findOne({
  //     where: { login: "test" }
  // }).then(data=>{console.log(data)})
  // })
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

