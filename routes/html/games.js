const path = require("path");
const router = require("express").Router();
const db = require("../../models/");
const {Op} = require("sequelize");
module.exports = router;



router.route("/")
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

router.get('/', function (req, res) {
  
  db.Games.findAll({
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

router.get('/:letter', function (req, res) {
  db.Games.findAll({
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