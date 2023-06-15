const { Model, DataTypes, Sequelize } = require('sequelize')
const { STATUS_PROJECT_TABLE } = require('./status.project.model')

const PROJECT_TABLE = 'projects'


const ProjectSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    project: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    as: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    observation: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    statusId: {
        field: 'status_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: STATUS_PROJECT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}


class Project extends Model {

    static associate(models){
        this.hasMany(models.Column, {
            as: 'columns',
            foreignKey: 'projectId'
        })
        this.belongsToMany(models.User, {
            as: 'usr',
            through: models.UserProject,
            foreignKey: 'userId',
            otherKey: 'projectId'
        })
        this.belongsTo(models.StatusProject, { as: 'status' });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PROJECT_TABLE,
            modelName: 'Project',
            timestamps: false
        }
    }

}


module.exports = { PROJECT_TABLE, ProjectSchema, Project }