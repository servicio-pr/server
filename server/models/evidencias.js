'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class evidencias extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  evidencias.init({
    tiket_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    evidencia: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'evidencias',
  });
  return evidencias;
};