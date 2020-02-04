const bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tier: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Users.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password)
    }
    Users.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    });
    return Users
}