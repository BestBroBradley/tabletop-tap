const router = require("express").Router();
const aboutRoutes = require("./about");
const beersRoutes = require("./beers");
const gamesRoutes = require("./games");
const welcomeRoutes = require("./welcome");
const upcomingRoutes = require("./upcoming");
const adminRoutes = require("./admin");

// /html/about
router.use("/about", aboutRoutes);
// /html/beers
router.use("/beers", beersRoutes);
// /html/games
router.use("/games", gamesRoutes);
// /html/welcome
router.use("/welcome", welcomeRoutes);
// /html/upcoming
router.use("/upcoming", upcomingRoutes);
// /html/adminPug
router.use("/admin", adminRoutes);

module.exports = router;