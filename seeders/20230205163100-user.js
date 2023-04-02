'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timeNow = new Date();
    await queryInterface.bulkInsert('Users', [
      {
        username: "aeng",
        email : 'rachel@email.com',
        createdAt : timeNow,
        updatedAt: timeNow
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
