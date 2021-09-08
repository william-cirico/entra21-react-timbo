'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RefreshToken extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
  };
  RefreshToken.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    token: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    expiresIn: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'RefreshToken',
  });
  return RefreshToken;
};