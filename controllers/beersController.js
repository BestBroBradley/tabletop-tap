const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Beers.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    findById: function(req, res) {
        db.Beers.findOne( {where: {
            beer_name: req.params.id
        }}).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(404).end()
        })
    },

    create: function (req, res) {
        console.log(req.body)
        db.Beers.create(req.body).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
        db.Beers.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    remove: function (req, res) {
        db.Beers.destroy({where: {
            id: req.params.id
        }}).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    }
}