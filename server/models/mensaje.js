'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mensaje extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mensaje.init({
    ticket_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    mensaje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'mensaje',
  });
  return mensaje;
};