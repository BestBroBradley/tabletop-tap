const bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
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
    };
    // Users.addHook("afterBulkUpdate", function (user) {
    //     console.log(user);
    // user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
    // });

    function encryptPasswordIfChanged(user) {
        console.log(user);
        console.log(user.changed('password'));
        if (user.changed('password')) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null)
        }
    }


    // Users.hook('beforeUpdate', (user) => {
    //     console.log(user);
    //     if (user.password) {
    //       user.password = bcrypt.hashSync(user.previous.password, bcrypt.genSaltSync(10), null);
    //     }
    //     });
    // function generateHash(user) {
    //     if (user === null) {
    //         throw new Error('No found employee');
    //     }
    //     else if (!user.changed('password')) return user.password;
    //     else {
    //         let salt = bcrypt.genSaltSync();
    //         return user.password = bcrypt.hashSync(user.password, salt);
    //     }
    // }
    
    Users.beforeCreate(encryptPasswordIfChanged);
    Users.beforeUpdate(encryptPasswordIfChanged);
    return Users;
}