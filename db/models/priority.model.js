const { Model, DataTypes, Sequelize } = require('sequelize')


const PRIORITY_TABLE = 'priorities'


const PrioritySchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}


class Priority extends Model {
    static associate(modes){}

    static config(sequelize){
        return {
            sequelize,
            tableName: PRIORITY_TABLE,
            modelName: 'Priority',
            timestamps: false,
        }
    }
}



module.exports = { PRIORITY_TABLE, PrioritySchema, Priority }