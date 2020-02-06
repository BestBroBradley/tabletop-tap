module.exports = function (sequelize, DataTypes) {
    const Hours = sequelize.define("Hours", {
        business_id: {
            type: DataTypes.INTEGER
        },
        monday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        monday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        tuesday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        tuesday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        wednesday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        wednesday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        thursday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        thursday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        friday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        friday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        saturday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        saturday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        sunday_open: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        },
        sunday_close: {
            type: DataTypes.DECIMAL(4,2),
            allowNull: false,
            defaultValue: 5
        }
    })
    return Hours
}