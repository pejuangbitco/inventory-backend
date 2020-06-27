'use strict';

let bar = [];
let i = 1;
for(i=1; i<21; i++) {
  let nama = 'barang '+i
  bar.push({
    nama_barang: nama
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('barang', bar, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('barang', null, {});
  }
};
