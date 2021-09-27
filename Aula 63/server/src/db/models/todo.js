'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id", as: "user" })
    }
  };
  Todo.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completedAt: {
      type: DataTypes.DATE
    },
    expirationDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};