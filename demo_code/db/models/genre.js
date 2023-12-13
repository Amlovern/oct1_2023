'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Genre.hasMany(models.Game, {
      foreignKey: 'genreId',
      onDelete: 'CASCADE',
      hooks: true
     })
     // SELECT * FROM Genres
     // JOIN Games ON (Games.genreId = Genres.id);
    }
  }
  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};