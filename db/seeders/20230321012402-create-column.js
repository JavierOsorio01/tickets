'use strict';

const { COLUMN_TABLE, ColumnSechema } = require('./../models/column.model')
  
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COLUMN_TABLE, ColumnSechema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COLUMN_TABLE)
  }
};
