const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Games.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    create: function (req, res) {
        db.Games.create(req.body).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
        db.Games.update(req.body, {
            where: {
                id: req.body.id
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
    }
}


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