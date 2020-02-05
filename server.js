const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;
var pug = require("pug");


const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("client/public"));

app.use(routes)

app.set("view engine", "pug");
app.set("views", "./views");


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});