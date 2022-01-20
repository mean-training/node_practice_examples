"use strict";

const fs = require("fs");
const csv = require("csv-parser");

var users = [];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    fs.createReadStream(`${__dirname}/data.csv`)
      .pipe(csv())
      .on("data", async function (row) {
        const user = {
          firstName: row.firstName,
          last_name: row.lastName,
          email: row.email,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        users.push(user);
      })
      .on("end",  async function () {
        await queryInterface.bulkInsert("Users", users, {});
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
