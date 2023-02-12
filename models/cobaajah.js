'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cobaajah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cobaajah.init({
    title: DataTypes.STRING,
    caption: DataTypes.STRING,
    image_url: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Cobaajah',
  });
  return Cobaajah;
};