'use strict';
module.exports = (sequelize, DataTypes) => {
  const trx = sequelize.define('trx', {
    user_id: DataTypes.INTEGER,
    tanggal: DataTypes.DATE,
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'trx'
  });
  trx.associate = function(models) {
    trx.hasMany(models.detail_trx, {
      foreignKey: 'trx_id'
    });
  };
  return trx;
};