'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsTo(models.Genre, {
        foreignKey: 'genreId'
      })
      // SELECT * FROM Games
      // JOIN Genres ON (Games.genreId = Genres.id);

      Game.belongsToMany(models.Studio, {
        through: models.StudioGame,
        foreignKey: 'gameId',
        otherKey: 'studioId'
      })
    }
  }
  Game.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    releaseYear: DataTypes.INTEGER,
    esrbRating: DataTypes.STRING(5),
    soldUnits: DataTypes.INTEGER,
    description: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    online: DataTypes.BOOLEAN,
    metacriticScore: DataTypes.DECIMAL(2,1)
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};