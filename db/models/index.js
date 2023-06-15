const { USER_TABLE, UserSchema, User } = require('./user.model')
const { STATUS_PROJECT_TABLE, StatusProjectSechema, StatusProject } = require('./status.project.model')
const { PROJECT_TABLE, ProjectSchema, Project } = require('./project.model')
const { USER_PROJECT_TABLE, UserProjectSchema, UserProject } = require('./user.project.model')
const { COLUMN_TABLE, ColumnSechema, Column } = require('./column.model')
const { ACTIVITY_TABLE, ActivitySechema, Activity } = require('./activities.model')
const { COMMENT_TABLE, CommentSechema, Comment } = require('./comment.model')
const { TYPE_TABLE, TypeSchema, Type } = require('./type.model')
const { PRIORITY_TABLE, PrioritySchema, Priority } = require('./priority.model')


function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Project.init(ProjectSchema, Project.config(sequelize))
    StatusProject.init(StatusProjectSechema, StatusProject.config(sequelize))
    UserProject.init(UserProjectSchema, UserProject.config(sequelize))
    Column.init(ColumnSechema, Column.config(sequelize))
    Activity.init(ActivitySechema, Activity.config(sequelize))
    Comment.init(CommentSechema, Comment.config(sequelize))
    Type.init(TypeSchema, Type.config(sequelize))
    Priority.init(PrioritySchema, Priority.config(sequelize))

    Project.associate(sequelize.models)
    StatusProject.associate(sequelize.models)
    User.assiciate(sequelize.models)
    Column.associate(sequelize.models)
    Activity.associate(sequelize.models)
    Comment.associate(sequelize.models)
}

module.exports = setupModels