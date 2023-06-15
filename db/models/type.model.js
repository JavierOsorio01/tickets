const { Model, DataTypes, Sequelize } = require('sequelize')


const TYPE_TABLE = 'types'


const TypeSchema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
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


class Type extends Model {
    static associate(modes){}

    static config(sequelize){
        return {
            sequelize,
            tableName: TYPE_TABLE,
            modelName: 'Type',
            timestamps: false,
        }
    }
}



module.exports = { TYPE_TABLE, TypeSchema, Type }