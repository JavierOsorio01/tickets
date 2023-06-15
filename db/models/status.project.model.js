const { Model, DataTypes, Sequelize } = require('sequelize')


const STATUS_PROJECT_TABLE = 'status_project'


const StatusProjectSechema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    createdAt: {
        field: 'created_At',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}


class StatusProject extends Model {

    static associate(models) {
        this.hasMany(models.Project, {
            as: 'projects',
            foreignKey: 'statusId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: STATUS_PROJECT_TABLE,
            modelName: 'StatusProject',
            timestamps: false
        }
    }

}


module.exports = { STATUS_PROJECT_TABLE, StatusProjectSechema, StatusProject }