const { Model, DataTypes, Sequelize } = require('sequelize')


const USER_TABLE = 'users'


const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}


class User extends Model {

    static assiciate(models){
        this.hasMany(models.Activity, {
            as: 'activities',
            foreignKey: 'userId'
        })
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}


module.exports = { USER_TABLE, UserSchema, User }