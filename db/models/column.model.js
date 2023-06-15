const { Model, DataTypes, Sequelize } = require('sequelize')
const { PROJECT_TABLE } = require('./project.model')

const COLUMN_TABLE = 'columns'


const ColumnSechema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: PROJECT_TABLE,
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


class Column extends Model {

    static associate(models) {
        this.belongsTo(models.Project, {as: 'project'});
        this.hasMany(models.Activity, {
            as: 'activities',
            foreignKey: 'columnId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: COLUMN_TABLE,
            modelName: 'Column',
            timestamps: false
        }
    }

}


module.exports = { COLUMN_TABLE, ColumnSechema, Column }