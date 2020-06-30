const db = require('../config/db.config.js');
const barang = db.barang;

exports.list = (req, res) => {
    try {
        barang.findAll().then(result => {
        res.json({
            status: 'OK',
            messages: '',
            data: result
        });
        });
    } catch (err) {
        res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
        });
    }
};

// Find a User by Id
exports.get = (req, res) => {  
    barang.findOne({
        where: { id: req.params.id }
    }).then( result => {      
        if( result === null ) {
        return res.status(404).json({
            status: 'ERROR',
            messages: 'Resource Not Found!',
            data: {}
        });
        }
        res.json({
        status: 'OK',
        messages: '',
        data: result
        });
    }).catch( err => {
        res.status(500).json({
        status: 'ERROR',
        messages: err,
        data: {}
        });
    });
};

// Post a User
exports.create = (req, res) => {  
    let {
        nama_barang
    } = req.body

    barang.create({  
        nama_barang: nama_barang,
    }).then(result => {    
        res.json({
        status: 'OK',
        messages: 'Success insert data.',
        data: result
        });
    }).catch( err => {
        res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
        });
    });
};
// Update a User
exports.update = (req, res) => {
    let {
        nama_barang
    } = req.body

    barang.update({
        nama_barang: nama_barang
    }, { 
        where: {id: req.params.id} 
    }).then(result => {
        res.json({
        status: 'OK',
        messages: 'Success update data.',
        data: {
            id: req.params.id,
            nama_barang: nama_barang
        }
        });
    }).catch( err => {
        res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
        });
    });
};

// Delete a User by Id
exports.delete = (req, res) => {  
barang.destroy({
    where: {
    id: req.params.id
    }
}).then( result => {
    res.json({
    status: 'OK',
    messages: 'Success delete data.',
    data: {}
    });
}).catch( err => {
    res.status(500).json({
    status: 'ERROR',
    messages: err,
    data: {}
    });
});
};