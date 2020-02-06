const db = require("../models")
const toNum = require("./tools");


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
            id: parseFloat(req.params.id)
        }}).then(data => {
            res.json(data)
        }).catch(err => {
            res.status(404).end()
        })
    },

    create: function (req, res) {
        console.log(req.body)
        const newBeer = toNum(req.body);
        db.Beers.create(newBeer).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
        const newBeer = toNum(req.body);
        console.log(newBeer);
        db.Beers.update(newBeer, {
            where: {
                id: req.params.id
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