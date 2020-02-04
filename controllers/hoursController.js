const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Hours.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    create: function (req, res) {
        db.Hours.create(req.body).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
        db.Hours.update(req.body, {
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
        db.Hours.destroy({where: {
            id: req.params.id
        }}).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    }
}