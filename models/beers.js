module.exports = function (sequelize, DataTypes) {
    const Beers = sequelize.define("Beers", {
        beer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        brewery: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        brewery_location: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        short_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        long_description: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        abv: {
            type: DataTypes.DECIMAL(4,1),
            allowNull: false,
            validate: {
                max:99.99
            }
        }
    })
    return Beers
}