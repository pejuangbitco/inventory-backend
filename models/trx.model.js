'use strict';
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm";

module.exports = (sequelize, DataTypes) => {
  const trx = sequelize.define('trx', {
    user_id: DataTypes.INTEGER,
    tanggal: {
      type: DataTypes.DATE,
      get() {
        let rawValue = this.getDataValue('tanggal')
        return rawValue? moment(rawValue).format() : null
      }
    },
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