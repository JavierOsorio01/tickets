'use strict';

const { PROJECT_TABLE, ProjectSchema } = require('./../models/project.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PROJECT_TABLE, ProjectSchema)
  },

  async down (queryInterface) {
    await queryInterface.createTable(PROJECT_TABLE)
  }
};
