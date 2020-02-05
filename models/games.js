module.exports = function(sequelize, DataTypes) {
    const Games = sequelize.define("Games", {
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        img_thumb: {
            type: DataTypes.STRING
        },
        img_original: {
            type: DataTypes.STRING
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        long_description: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.DECIMAL(6, 2)
        },
        url: {
            type: DataTypes.STRING
        },
        min_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_time: {
            type: DataTypes.INTEGER
        },
        min_players: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_players: {
            type: DataTypes.INTEGER
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: true

        }
    })
    return Games
}