const router = require("express").Router()
const beerRoutes = require("./beers")
const gameRoutes = require("./games")
const hoursRoutes = require("./hours")
const permissionsRoutes = require("./permissions")


// /api/beers
router.use("/beers", beerRoutes)
// /api/games
router.use("/games", gameRoutes)
// /api/hours
router.use("/hours", hoursRoutes)
// /api/permissions
router.use("/permissions", permissionsRoutes)

module.exports = router;