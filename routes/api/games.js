const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");
const axios = require("axios");
// Matches with "/api/games"
router.route("/")
  .get(gamesController.findAll)
  .put(gamesController.update)
  .post(gamesController.create);

// Matches with "/api/games/:id"
router.route("/:id")
  .get(gamesController.findById)
  .put(gamesController.update)
  .delete(gamesController.remove);

// Matches with "/api/games/search/:query"
router.get("/search/:query", gamesController.findByLetter);

// Matches with "/api/games/search/atlas/:title"
router.get("/search/atlas/:title", function(req, res) {
  const title = req.params.title;
  const apiKey = process.env.BOARDGAMEATLAS_KEY
  axios.get(`https://www.boardgameatlas.com/api/search?name=${title}&client_id=${apiKey}`)
    .then(response => {
      res.json(response.data);
    }).catch(err => {
      console.log("We have a problem");
      throw err;
    });
});


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