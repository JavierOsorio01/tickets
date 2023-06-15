'use strict';

const { USER_PROJECT_TABLE, UserProjectSchema } = require('./../models/user.project.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_PROJECT_TABLE, UserProjectSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_PROJECT_TABLE)
  }
};
