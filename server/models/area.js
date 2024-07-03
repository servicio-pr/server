'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      area.belongsTo(models.ubicacion,{
        as: 'ubicacion',
        foreignKey : 'ubicacion_id'
      });
    }
  }
  area.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull : false,
    },
    descripcion:{
      allowNull : false,
      type: DataTypes.STRING,
    },
    ubicacion_id: {
      allowNull : false,
      type: DataTypes.INTEGER,
      references: {
        model: 'ubicacion',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'area',
    tableName: 'area',
  });
  return area;
};