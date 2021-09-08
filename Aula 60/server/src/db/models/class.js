'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "teacher_id", as: "teacher" });
      this.belongsToMany(models.User, { through: "students_classes", as: "students" });
    }
  };
  Class.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};