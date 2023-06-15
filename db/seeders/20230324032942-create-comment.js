'use strict';

const { COMMENT_TABLE, CommentSechema } = require('./../models/comment.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(COMMENT_TABLE, CommentSechema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(COMMENT_TABLE)
  }
};
