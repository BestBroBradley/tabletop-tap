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
        }).catch(() => {
            res.status(500).end()
        })
    },

    update: function (req, res) {
       db.Users.findOne({where:{id:req.body.id}}).then(user=>{
           user.update(req.body).then(()=>{
               
           })
       })
    },




    // console.log(req.body.id)
    // db.Users.update(req.body, {
    //     where: {
    //         id: req.body.id
    //     }
    // }).then(data => {
    //     res.json(data)
    // }).catch((err) => {
    //    console.log(err)
    // })




    remove: function (req, res) {
        db.Users.destroy({where: {
            login: req.params.login
        }}).then(data => {
            res.json(data)
        }).catch(() => {
            res.status(404).end()
        })
    }
}