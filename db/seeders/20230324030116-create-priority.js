'use strict';

const { PRIORITY_TABLE, PrioritySchema } = require('./../models/priority.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRIORITY_TABLE, PrioritySchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PRIORITY_TABLE)
  }
};
