const db = require("../models")
const toNum = require("./tools");
const {Op} = require("sequelize");

module.exports = {
    findAll: function (req, res) {
        db.Games.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    findById: function(req, res) {
        db.Games.findOne( {where: {
            id: parseFloat(req.params.id)
        }}).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(404).end()
        })
    },
    create: function (req, res) {
        const newGame = toNum(req.body)
        db.Games.create(newGame).then(data => {
            console.log(data)
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    
    update: function (req, res) {
        const newGame = toNum(req.body);
        db.Games.update(newGame, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        }).catch(() => {
            res.status(404).end()
        })
    },

    remove: function (req, res) {
       console.log( req.params.id)
        db.Games.destroy({where: {
            id: req.params.id
        }}).then(data => {
            res.json(data)
        }).catch(() => {
            res.status(404).end()
        })
    },
    // This is the html boardgame functionality
    findByLetter: function(req,res){
        const query = req.params.query;
        console.log(query)
        db.Games.findAll({
            where:{
                game_name:{ 
                    [Op.like]:`${query}%`
                }
            }
        }).then((data) => {
            res.json(data)
        }).catch((err) => {
            console.log(err)
        })
    }
}


// data.rating = parseFloat(data.rating)
// data.min_time = parseInt(data.min_time)
// data.max_time = parseInt(data.max_time)
// data.min_players = parseInt(data.min_players)
// data.max_players = parseInt(data.max_players)
// return data

// json object for testing purposes
// {
//     "game_name":"asdf",
//     "img_thumb":"asdf",
//     "img_original":"asdf",
//     "short_description":"asdf"
//     ,"long_description":"asdf"
//     ,"rating":4
//     ,"url":"asdf"
//     ,"min_time":9999
//     ,"max_time":9999
//     ,"min_players":4
//     ,"category":"asdasdas"
//   }