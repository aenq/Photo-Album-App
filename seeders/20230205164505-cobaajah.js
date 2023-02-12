'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const timeNow = new Date();
    await queryInterface.bulkInsert('Cobaajahs', [
      {
        title: "Photo 1",
        caption : 'Photo 1 caption',
        image_url : "http://image.com/photo1.png",
        createdAt : timeNow,
        updatedAt: timeNow
      },
      {
        title: "Photo 2",
        caption : 'Photo 2 caption',
        image_url : "http://image.com/photo2.png",createdAt : timeNow,
        updatedAt: timeNow
      },
      {
        title: "Photo 3",
        caption : 'Photo 3 caption',
        image_url : "http://image.com/photo3.png",createdAt : timeNow,
        updatedAt: timeNow
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cobaajahs', null, {});
  }
};