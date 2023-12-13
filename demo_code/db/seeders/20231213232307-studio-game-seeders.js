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
   const { StudioGame } = require('../models')
   await StudioGame.bulkCreate([
    {studioId: 1, gameId: 3},
    {studioId: 2, gameId: 1},
    {studioId: 3, gameId: 4},
    {studioId: 4, gameId: 2},
    {studioId: 5, gameId: 5}
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('StudioGames')
  }
};
