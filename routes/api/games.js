const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .put(gamesController.update)
  .post(gamesController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

// Matches with "/api/books/search/:query"
router.get("/search/:query", gamesController.findByLetter);


module.exports = router;



// {
//   "game_name":"asdf",
//   "img_thumb":"asdf",
//   "img_original":"asdf",
//   "short_description":"asdf"
//   ,"long_description":"asdf"
//   ,"rating":4
//   ,"url":"asdf"
//   ,"min_time":4
//   ,"max_time":5
//   ,"min_players":4
//   ,"category":"asdasdas"
//   }