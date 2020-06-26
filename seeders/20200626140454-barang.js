'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('barang', [{
        nama_barang: 'pensil'
      }, {
        nama_barang: 'buku'
      }, {
        nama_barang: 'papan tulis'
      }, {
        nama_barang: 'meja'
      }, {
        nama_barang: 'sapu'
      }, {
        nama_barang: 'mouse'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('barang', null, {});
  }
};
