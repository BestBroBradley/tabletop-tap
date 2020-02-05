const router = require("express").Router();
const aboutRoutes = require("./about");
const adminRoutes = require("./admin");
const beersRoutes = require("./beers");
const gamesRoutes = require("./games");
const welcomeRoutes = require("./welcome");

// /html/about
router.use("/about", aboutRoutes);
// /html/admin
router.use("/admin", adminRoutes);
// /html/beers
router.use("/beers", beersRoutes);
// /html/games
router.use("/games", gamesRoutes);
// /html/welcome
router.use("/welcome", welcomeRoutes);

module.exports = router;