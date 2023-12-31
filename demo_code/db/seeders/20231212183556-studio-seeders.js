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
  
  const { Studio } = require('../models');
  
  await Studio.bulkCreate([
     {name: 'Riot Games', yearEstablished: 2006},
     {name: 'Mirrorsoft', yearEstablished: 1983},
     {name: 'Nintendo', yearEstablished: 1989},
     {name: 'KRAFTON', yearEstablished: 2007},
     {name: 'Game Freak', yearEstablished: 1989},
    //  {name: 'Test max', yearEstablished: 2222},
    //  {name: 'Test len', yearEstablished: 198}
   ], {validate: true})
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
