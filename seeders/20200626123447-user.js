'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('user', [{
      username: 'admin',
      password: 'admin',
      nama: 'adminNama',
      divisi: 'admin',
      role: 'admin'
    }, {
      username: 'user1',
      password: 'user1',
      nama: 'userNama',
      divisi: 'pajak',
      role: 'user'
    }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('user', null, {});
    
  }
};
