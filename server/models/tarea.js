'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tarea.init({
    mes: DataTypes.STRING,
    inicio: DataTypes.DATE,
    tiempo_total: DataTypes.TIME,
    usuario_id: DataTypes.INTEGER,
    max_tiempo: DataTypes.TIME,
    area_id: DataTypes.INTEGER,
    tema_id: DataTypes.INTEGER,
    ubicacion_id: DataTypes.INTEGER,
    ticket_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tarea',
  });
  return tarea;
};