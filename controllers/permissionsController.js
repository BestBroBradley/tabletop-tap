const db = require("../models")

module.exports = {
    findAll: function (req, res) {
        db.Users.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    create: function (req, res) {
        db.Users.create(req.body).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    update: function (req, res) {
        console.log(req.body.login)
        db.Users.update(req.body, {
            where: {
                login: req.body.login
            }
        }).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    remove: function (req, res) {
        db.Users.destroy({where: {
            id: req.params.id
        }}).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    }
}