const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");

// /api
router.use("/api", apiRoutes);
// /html
router.use("/html", htmlRoutes);

module.exports = router;