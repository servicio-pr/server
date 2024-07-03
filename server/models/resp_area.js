'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resp_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  resp_area.init({
    responsable_id: DataTypes.INTEGER,
    area_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'resp_area',
  });
  return resp_area;
};