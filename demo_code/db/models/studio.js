'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Studio.belongsToMany(models.Game, {
        through: models.StudioGame,
        foreignKey: 'studioId',
        otherKey: 'gameId'
      })
    }
  }
  Studio.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    yearEstablished: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: {
          msg: 'Must be an integer.'
        },
        len: {
          msg: 'Must be 4 digits',
          args: [4,4]
        },
        maxYear(value) {
          if (value > new Date().getFullYear()) {
            throw new Error('Year cannot be in the future.')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Studio',
  });
  return Studio;
};