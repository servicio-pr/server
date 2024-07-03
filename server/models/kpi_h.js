'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kpi_h extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kpi_h.init({
    kpi_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    mes: DataTypes.STRING,
    cumplimiento: DataTypes.BOOLEAN,
    numero_tickets: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kpi_h',
  });
  return kpi_h;
};