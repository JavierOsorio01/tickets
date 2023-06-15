'use strict';

const { ACTIVITY_TABLE, ActivitySechema } = require('./../models/activities.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(ACTIVITY_TABLE, ActivitySechema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(ACTIVITY_TABLE)
  }
};
