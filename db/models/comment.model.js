const { Model, DataTypes, Sequelize } = require('sequelize')
const { ACTIVITY_TABLE } = require('./activities.model')

const COMMENT_TABLE = 'comments'


const CommentSechema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    activityId: {
        field: 'activity_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: ACTIVITY_TABLE,
            key: 'id'
        }
    },
    createdAt: {
        field: 'created_At',
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}


class Comment extends Model {

    static associate(models) {
        // this.hasMany(models.Project, {
        //     as: 'projects',
        //     foreignKey: 'statusId'
        // })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: COMMENT_TABLE,
            modelName: 'Comment',
            timestamps: false
        }
    }

}


module.exports = { COMMENT_TABLE, CommentSechema, Comment }