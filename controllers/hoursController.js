const db = require("../models");
const toNum = require("./tools");

module.exports = {
    findAll: function (req, res) {
        db.Hours.findAll().then((data) => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },
    create: function (req, res) {
        var newDay = toNum(req.body);
        newDay.closed_day = Boolean(newDay.closed_day);
        db.Hours.create(newDay).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
        var newDay = toNum(req.body);
        newDay.closed_day = Boolean(newDay.closed_day);
        
        db.Hours.update(newDay, {
            where: {
                id: req.params.id
            }
        }).then(data => {
            res.json(data)
        }).catch((err) => {
            res.status(500).end()
        })
    }
}