'use strict';
module.exports = (sequelize, DataTypes) => {
  const detail_trx = sequelize.define('detail_trx', {
    trx_id: DataTypes.INTEGER,
    nama_barang: DataTypes.STRING,
    jumlah_barang: DataTypes.INTEGER
  }, {
    tableName: 'detail_trx',
    timestamps: false
  });
  detail_trx.associate = function(models) {
    // associations can be defined here
  };
  return detail_trx;
};