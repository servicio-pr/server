'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mes: {
        type: Sequelize.STRING
      },
      inicio: {
        type: Sequelize.DATE
      },
      tiempo_total: {
        type: Sequelize.TIME
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      max_tiempo: {
        type: Sequelize.TIME
      },
      area_id: {
        type: Sequelize.INTEGER
      },
      tema_id: {
        type: Sequelize.INTEGER
      },
      ubicacion_id: {
        type: Sequelize.INTEGER
      },
      ticket_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tareas');
  }
};