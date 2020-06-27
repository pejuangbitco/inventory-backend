const env = require('./config');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.barang    = require('../models/barang.model.js')(sequelize, Sequelize); 
db.user     = require('../models/user.model')(sequelize, Sequelize);
db.trx     = require('../models/trx.model')(sequelize, Sequelize);
db.detail_trx = require('../models/detail_trx.model')(sequelize, Sequelize); 
module.exports = db;