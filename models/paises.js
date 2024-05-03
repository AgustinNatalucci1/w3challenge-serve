'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Paises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Paises.init({
    pais: DataTypes.STRING,
    poblacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Paises',
  });
  return Paises;
};