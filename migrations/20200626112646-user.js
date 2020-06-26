'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {        
        type: Sequelize.STRING
      },
      password: {        
        type: Sequelize.STRING
      },
      nama: {        
        type: Sequelize.STRING
      },
      divisi: {        
        type: Sequelize.STRING
      },
      role: {        
        type: Sequelize.STRING
      }
    }, );
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
