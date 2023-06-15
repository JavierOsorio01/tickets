'use strict';

const { TYPE_TABLE, TypeSchema } = require('./../models/type.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(TYPE_TABLE, TypeSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(TYPE_TABLE)
  }
};
