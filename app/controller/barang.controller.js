const db = require('../config/db.config.js');
const Barang = db.barang;

//post a barang
exports.create = (req, res) => {
    if(req==null) {
        Barang.create({
            nama_barang: req.body.nama_barang,
            jumlah_barang: req.body.jumlah_barang,
            jenis_barang: req.body.jenis_barang    
        }).then(barang => {
            res.json({
                'status': 'OK',
                'messages': 'Success insert data',
                'data': barang
            });
        }).catch(err => {
            res.json({
                'status': 'ERROR',
                'messages': err.messages,
                'data': {}
            }); 
        });
    } else {
        res.json({
            'status': 'ERROR',
            'messages': 'Bad Request',
            'data': {}
        }); 
    }
    
}

exports.findAll = (req, res) => {
    Barang.findAll().then(barang => {
        res.json({
            'status': 'OK',
            'messages': '',
            'data': barang
        });
    }).catch(err => {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        }); 
    });
}

exports.findByPk = (req, res) => {    
    Barang.findByPk(req.params.barangId).then(barang => {
        if(barang!=null) {
            res.json({
                'status': 'OK',
                'messages': '',
                'data': barang
            });    
        } else {
            res.status(404).json({
                'status': 'OK',
                'messages': 'Not Found!',
                'data': barang
            });
        }        
    }).catch(err => {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        });
    });
}

exports.update = (req, res) => {
    Barang.update({
        nama_barang: req.body.nama_barang,
        jumlah_barang: req.body.jumlah_barang,
        jenis_barang: req.body.jenis_barang 
    }, {
        where: {
            id: req.params.barangId
        }
    }).then(() => {
        res.json({
            'status': 'OK',
            'messages': 'Success update data',
            'data': {}
        });
    }).catch(err => {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        }); 
    });
}

exports.delete = (req, res) => {
    Barang.destroy({
        where: {
            id: req.params.barangId
        }
    }).then(() => {
        res.json({
            'status': 'OK',
            'messages': 'Success delete data',
            'data': {}
        });
    }).catch(err => {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        }); 
    });
}
