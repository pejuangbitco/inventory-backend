module.exports = (app) => {
    const barang = require('../controller/barang.controller.js');

    app.get('/api/barang', barang.list);
    app.get('/api/barang/:id', barang.get);
    app.post('/api/barang', barang.create);
    app.put('/api/barang/:id', barang.update);
    app.delete('/api/barang/:id', barang.delete);
}