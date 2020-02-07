module.exports = function (sequelize, DataTypes) {
    const Games = sequelize.define("Games", {
        game_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        img_thumb: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        img_original: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        long_description: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.DECIMAL(6, 2),
            validate: {
                min: 0
            }
        },
        url: {
            type: DataTypes.STRING,
            validate: {
                isUrl: true
            }
        },
        min_time: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_time: {
            type: DataTypes.INTEGER,
            validate: {
                validMax(value) {
                    if (parseInt(value) <= parseInt(this.min_time)) {
                        throw new Error('Not Valid Value');
                    }
                }
            }
        },
        min_players: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        max_players: {
            type: DataTypes.INTEGER,
            validate: {
                validMax(value) {
                    if (parseInt(value) <= parseInt(this.min_players)) {
                        throw new Error('Not Valid Value');
                    }
                }
            }
        },
        categories: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Games
}