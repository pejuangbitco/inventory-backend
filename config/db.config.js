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
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.barang    = require('../model/barang.model.js')(sequelize, Sequelize); 
db.user     = require('../model/user.model')(sequelize, Sequelize); 
module.exports = db;