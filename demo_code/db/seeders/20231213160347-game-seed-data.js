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
   const { Game } = require('../models');

   await Game.bulkCreate([
    {
      name: 'Tetris',
      releaseYear: 1984,
      esrbRating: 'E',
      soldUnits: 520000000,
      description: 'Drop shapes, make lines, rage',
      genreId: 4,
      online: false,
      metacriticScore: 7.8
    },
    {
      name: 'PUBG: Battlegrounds',
      releaseYear: 2017,
      esrbRating: 'T',
      soldUnits: 75000000,
      description: 'PUBG is a player versus player shooter game in which up to one hundred players fight in a battle royale, a type of large-scale last man standing deathmatch where players fight to remain the last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.',
      genreId: 5,
      online: true,
      metacriticScore: 4.8
    },
    {
      name: 'League of Legends',
      releaseYear: 2009,
      esrbRating: 'T',
      soldUnits: 0,
      description: 'League of Legends is one of the world\'s most popular video games, developed by Riot Games. It features a team-based competitive game mode based on strategy and outplaying opponents. Players work with their team to break the enemy Nexus before the enemy team breaks theirs.',
      genreId: 3,
      online: true,
      metacriticScore: 4.9
    },
    {
      name: 'Super Smash Bros. Melee',
      releaseYear: 2001,
      esrbRating: 'T',
      soldUnits: 7000000,
      description: 'It is the second game in the series, following Super Smash Bros. Like its predecessor, Melee features gameplay unique in comparison to that of other fighting games. Characters have simple movesets that lack complicated button inputs and lengthy inescapable combos, instead emphasizing movement and ringouts.',
      genreId: 1,
      online: true,
      metacriticScore: 9.0
    },
    {
      name: 'Pokemon Emerald',
      releaseYear: 2004,
      esrbRating: 'E',
      soldUnits: 7000000,
      description: 'Pokémon Emerald Version takes Trainers back to the land of Hoenn for an expanded adventure, this time against both Team Magma and Team Aqua! Pokémon Emerald also features an even more exciting storyline featuring the Legendary Rayquaza, and the chance to catch more Legendary Pokémon such as both Latios and Latias!',
      genreId: 2,
      online: true,
      metacriticScore: 8.8
    }
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games')
  }
};
