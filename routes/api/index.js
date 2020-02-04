const router = require("express").Router()
const beerRoutes = require("./beers")
const gameRoutes = require("./games")
const hoursRoutes = require("./hours")
const permissionsRoutes = require("./permissions")

router.use("beers", beerRoutes)
router.use("games", gameRoutes)
router.use("hours", hoursRoutes)
router.use("permissions", permissionsRoutes)

module.exports = router;