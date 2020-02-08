const router = require("express").Router();
const aboutRoutes = require("./about");
const beersRoutes = require("./beers");
const gamesRoutes = require("./games");
const welcomeRoutes = require("./welcome");
const upcomingRoutes = require("./upcoming");
const adminRoutes = require("./admin");
const contactRoutes = require("./contact");
 
// /html/about
router.use("/about", aboutRoutes);
// /html/beers
router.use("/beers", beersRoutes);
// /html/games
router.use("/games", gamesRoutes);
// /html/welcome
router.use("/welcome", welcomeRoutes);

router.use("/contact", contactRoutes);
// /html/upcoming
router.use("/upcoming", upcomingRoutes);
// /html/admin
router.use("/admin", adminRoutes);
// /html/contact
router.use("/contact", contactRoutes);

module.exports = router;