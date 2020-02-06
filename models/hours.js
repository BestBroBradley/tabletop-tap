module.exports = function (sequelize, DataTypes) {
    const Hours = sequelize.define("Hours", {
        day: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate:{
                dayofTheweek(value) {
                    const days= ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
                    if(days.indexOf(value.toLowerCase())=== -1){
                        throw new Error("has to be a day of the week");
                    }
                  }
            }
        },

        open_time: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            defaultValue: 12
            , validate: {
                max: 24,                  // only allow values <= 23.59
                min: 0.01,
            }
        },
        close_time: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
            defaultValue: 24
            , validate: {
                max: 24,                  // only allow values <= 23.59
                min: 0.01,
                closeTime(value) {
                    if(parseInt(value) <= parseInt(this.open_time)){
                        throw new Error("you can't close before you open");
                    }
                  }
            }
        }
    })
    return Hours
}