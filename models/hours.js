module.exports = function (sequelize, DataTypes) {
    const Hours = sequelize.define("Hours", {
        business_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        monday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        tuesday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        tuesday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        wednesday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        wednesday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        thursday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        thursday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        friday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        friday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        saturday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        saturday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        sunday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        },
        sunday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false
        }
    })
    return Hours
}