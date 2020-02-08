const path = require("path");
const router = require("express").Router();
const db = require("../../models/");
const {Op} = require("sequelize");
module.exports = router;



router.route("/")
  // This is the search bar functionality
  .post((req,res)=>{
    const renderObj = {
      pageTitle: "Games",
      h1Title: "Board Games",
      subtitle: "Take a Chance",
      games: true,
      gameArray:req.body
    }
    console.log(renderObj.gameArray)
    res.render("index", renderObj)
  })
  // This renders the page and displays games that start with a. Comment out the a to display all games.
  // Use limit to display fewer results
  .get((req, res) => {
    db.Games.findAll({
      // limit: 25,
      where:{
          game_name:{ 
              [Op.like]:`a%`
          }
      }
    }).then(data=>{
      const renderObj = {
        pageTitle: "Games",
        h1Title: "Board Games",
        subtitle: "Take a Chance",
        games: true,
        gameArray:data
      }
      res.render("index", renderObj)
    })
  })
// This router is the letter functionality and renders the page with the games starting with that letter
router.get('/:letter', function (req, res) {
  db.Games.findAll({
    // limit: 25,
    where:{
        game_name:{ 
            [Op.like]:`${req.params.letter}%`
        }
    }
  }).then(data=>{
    const renderObj = {
      pageTitle: "Games",
      h1Title: "Board Games",
      subtitle: "Take a Chance",
      games: true,
      gameArray:data
    }
    console.log(renderObj.gameArray)
    res.render("index", renderObj)
  })
})

module.exports = router;