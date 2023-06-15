const { Model, DataTypes, Sequelize } = require('sequelize')
const { PROJECT_TABLE } = require('./project.model')
const { USER_TABLE } = require('./user.model')

const USER_PROJECT_TABLE = 'user_project'


const UserProjectSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    projectId: {
        field: 'project_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PROJECT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    creadtedAt: {
        field: 'creadted_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }

}


class UserProject extends Model {
    static associate(models) {}

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_PROJECT_TABLE,
            modelName: 'UserProject',
            timestamps: false,
        }
    }
}


module.exports = { USER_PROJECT_TABLE, UserProjectSchema, UserProject }