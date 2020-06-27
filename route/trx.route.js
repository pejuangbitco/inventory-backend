module.exports = (app) => {
  const trx = require('../controller/trx.controller.js');

  app.get('/api/trx', trx.list);
  app.get('/api/trx/:id', trx.get);
  app.post('/api/trx', trx.create);
  app.put('/api/trx/:id', trx.update);
  app.delete('/api/trx/:id', trx.delete);
}