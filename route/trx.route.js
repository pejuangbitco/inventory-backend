module.exports = (app) => {
    const trx = require('../controller/trx.controller.js');
    app.get('/api/coba', trx.coba);
    app.get('/api/trx', trx.list);
    app.get('/api/trx/:id', trx.get);
    app.post('/api/trx', trx.create);
    app.put('/api/trx/:id', trx.update);
    app.delete('/api/trx/:id', trx.delete);
    app.get('/sync', function (req, res) {
        sequelize.sync({force: true}).success(function() {
            console.log('sync done');
            res.send(200, 'sync done');
        }).error(function(error) {
            console.log('there was a problem');
            res.send(200, 'there was a problem');
        });
    });
}