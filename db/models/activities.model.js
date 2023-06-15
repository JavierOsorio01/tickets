const { Model, DataTypes, Sequelize } = require('sequelize')
const { COLUMN_TABLE } = require('./column.model')
const { USER_TABLE } = require('./user.model')
const { TYPE_TABLE } = require('./type.model')
const { PRIORITY_TABLE } = require('./priority.model')


const ACTIVITY_TABLE = 'activities'


const ActivitySechema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    columnId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: COLUMN_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: TYPE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    priorityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PRIORITY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        field: 'created_At',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}


class Activity extends Model {

    static associate(models) {
        this.belongsTo(models.User, { as: 'user'})
        this.hasMany(models.Comment,
            {
                as: 'comments',
                foreignKey: 'activityId'
            })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ACTIVITY_TABLE,
            modelName: 'Activity',
            timestamps: false
        }
    }

}


module.exports = { ACTIVITY_TABLE, ActivitySechema, Activity }