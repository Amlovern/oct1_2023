'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      releaseYear: {
        type: Sequelize.INTEGER
      },
      esrbRating: {
        type: Sequelize.STRING(5)
      },
      soldUnits: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      genreId: {
        type: Sequelize.INTEGER
      },
      online: {
        type: Sequelize.BOOLEAN
      },
      metacriticScore: {
        type: Sequelize.DECIMAL(2,1)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Games');
  }
};