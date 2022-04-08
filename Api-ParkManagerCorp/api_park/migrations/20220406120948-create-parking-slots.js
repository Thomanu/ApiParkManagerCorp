'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parking_slots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_users: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      slot: {
        type: Sequelize.STRING
      },
      floor: {
        type: Sequelize.STRING
      },
      disponibility: {
        type: Sequelize.BOOLEAN
      },
      start_occupancy: {
        type: Sequelize.DATE
      },
      end_occupancy: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },

    {
      engine:'InnoDB',
      charset:'utf8',
      freezeTableName:true,
      tablename:'parking_slots'
    
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parking_slots');
  }
};