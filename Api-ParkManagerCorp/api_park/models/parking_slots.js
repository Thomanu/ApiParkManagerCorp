'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Parking_slots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      console.log(models)
      Parking_slots.belongsTo(models.Users, {
        foreignKey: 'id_users'
      });
     
    }
  }
  Parking_slots.init({
    slot: DataTypes.STRING,
    floor: DataTypes.STRING,
    disponibility: DataTypes.BOOLEAN,
    start_occupancy: DataTypes.DATE,
    end_occupancy: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'parking_slots',
  });
  return Parking_slots;
};