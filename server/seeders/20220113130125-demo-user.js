'use strict';

const { now } = require("lodash");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users',[
       {
         'first_name' : "test",
         'last_name' : 'user',
         'email' : 'test_user@gmail.com',
         'createdAt': new Date(),
         'updatedAt': new Date(),
         'is_active' : false
       },
       {
        'first_name' : "test2",
        'last_name' : 'user',
        'email' : 'test2_user@gmail.com',
        'createdAt': new Date(),
        'updatedAt': new Date(),
        'is_active' : false
      }
     ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
