const path = require("path");
const router = require("express").Router();
const db = require("../../models/");
const {Op} = require("sequelize");
module.exports = router;








// const axios = require('axios');

// axios.get('api-url')
//     .then(response => {
//         console.log(response.data.status);
//         // console.log(response.data);
//         res.send(response.data.status);
//     })
//     .catch(error => {
//         console.log(error);
//     });







router.route("/")
  // This is the search bar functionality
 



  
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

  router.get('/search/:name', (req,res)=>{
    db.Games.findAll({
      // limit: 25,
      where:{
          game_name:{ 
              [Op.like]:req.params.name+`%`
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