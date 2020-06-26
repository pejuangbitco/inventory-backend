module.exports = (app) => {
    const barang = require('../controller/barang.controller.js');

    app.get('/api/barang', barang.findAll);
    app.get('/api/barang/:barangId', barang.findByPk);
    app.post('/api/barang', barang.create);
    app.put('/api/barang/:barangId', barang.update);
    app.delete('/api/barang/:barangId', barang.delete);
}