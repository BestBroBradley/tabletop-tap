const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
const pug = require("pug");
const db = require("./models");
const path = require("path");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "client/public")));

app.use(routes)

app.set("view engine", "pug");
app.set("views", "./views");

db.sequelize.sync({ force: false }).then(function() {

  db.Users.create({
    login:"test",
    password:"Password1",
    email:"test@gmail.com",
    tier:"ADMIN"
  });

  // app.get("api/admin/login",{login:"test",
  // password:"Password1",})
  // db.Users.create({
  //   login:"test2",
  //   password:"Password1",
  //   email:"test1@gmail.com",
  //   tier:"employee"
  // })

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

