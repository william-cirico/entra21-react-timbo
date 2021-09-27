'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('todos', {
      id: {
        allowNull: false,        
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },      
      task: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      completed_at: {
        type: Sequelize.DATE
      },
      expiration_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('todos');
  }
};