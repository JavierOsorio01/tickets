'use strict';

const { USER_TABLE, UserSchema } = require('./../models/user.model')
const { STATUS_PROJECT_TABLE, StatusProjectSechema } = require('./../models/status.project.model')
const { PROJECT_TABLE, ProjectSchema } = require('./../models/project.model')
const { USER_PROJECT_TABLE, UserProjectSchema } = require('./../models/user.project.model')
const { COLUMN_TABLE, ColumnSechema } = require('./../models/column.model')
const { TYPE_TABLE, TypeSchema } = require('./../models/type.model')
const { PRIORITY_TABLE, PrioritySchema } = require('./../models/priority.model')
const { ACTIVITY_TABLE, ActivitySechema } = require('./../models/activities.model')
const { COMMENT_TABLE, CommentSechema } = require('./../models/comment.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
    await queryInterface.createTable(STATUS_PROJECT_TABLE, StatusProjectSechema)
    await queryInterface.createTable(PROJECT_TABLE, ProjectSchema)
    await queryInterface.createTable(USER_PROJECT_TABLE, UserProjectSchema)
    await queryInterface.createTable(COLUMN_TABLE, ColumnSechema)
    await queryInterface.createTable(TYPE_TABLE, TypeSchema)
    await queryInterface.createTable(PRIORITY_TABLE, PrioritySchema)
    await queryInterface.createTable(ACTIVITY_TABLE, ActivitySechema)
    await queryInterface.createTable(COMMENT_TABLE, CommentSechema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE)
    await queryInterface.dropTable(STATUS_PROJECT_TABLE)
    await queryInterface.dropTable(PROJECT_TABLE)
    await queryInterface.dropTable(USER_PROJECT_TABLE)
    await queryInterface.dropTable(COLUMN_TABLE)
    await queryInterface.dropTable(TYPE_TABLE)
    await queryInterface.dropTable(PRIORITY_TABLE)
    await queryInterface.dropTable(ACTIVITY_TABLE)
    await queryInterface.dropTable(COMMENT_TABLE)
  }
};
