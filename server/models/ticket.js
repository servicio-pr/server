'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ticket.init({
    titulo: DataTypes.STRING,
    descripcion: DataTypes.INTEGER,
    tema_id: DataTypes.INTEGER,
    contacto_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ticket',
  });
  return ticket;
};