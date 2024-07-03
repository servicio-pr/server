'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sub_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sub_area.init({
    nombre: DataTypes.STRING,
    ubicacion_id: DataTypes.INTEGER,
    area_p_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sub_area',
  });
  return sub_area;
};