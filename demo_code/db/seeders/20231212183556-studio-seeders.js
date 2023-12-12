'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Studios', [
    {name: 'Riot Games', yearEstablished: 2006},
    {name: 'Mirrorsoft', yearEstablished: 1983},
    {name: 'Nintendo', yearEstablished: 1989},
    {name: 'KRAFTON', yearEstablished: 2007},
    {name: 'Game Freak', yearEstablished: 1989}
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Studios')
  }
};
