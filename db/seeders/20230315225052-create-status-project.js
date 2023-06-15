'use strict';

const { STATUS_PROJECT_TABLE, StatusProjectSechema } = require('./../models/status.project.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(STATUS_PROJECT_TABLE, StatusProjectSechema)
  },

  async down (queryInterface) {
    await queryInterface.createTable(STATUS_PROJECT_TABLE)
  }
};
