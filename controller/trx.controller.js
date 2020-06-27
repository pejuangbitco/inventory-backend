const db = require('../config/db.config.js');
const { trx, detail_trx } = db;

exports.list = (req, res) => {
  try {
    trx.findAll({
      where: req.query
    }).then(result => {
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

exports.get = (req, res) => {  
  trx.findOne({
    where: { id: req.params.id },
    include: detail_trx
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

exports.create = (req, res) => {  
    let {
      nama_barang,
      jumlah_barang,
      user_id
    } = req.body

    trx.create({        
      user_id: user_id,
      tanggal: new Date()
    }).then(result => {
      detail_trx.create({
        trx_id: result.id,
        nama_barang: nama_barang, 
        jumlah_barang: jumlah_barang 
      }).then( rs => {
        res.json({
          status: 'OK',
          messages: 'Success insert data.',
          data: result
        });
      });
    }).catch( err => {
      res.status(400).json({
        status: 'ERROR',
        messages: err,
        data: {}
      });
    });
};

exports.update = (req, res) => {
    let {
        nama_barang
    } = req.body

    trx.update({
        nama_barang: nama_barang
    }, { 
        where: {id: req.params.customerId} 
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

exports.delete = (req, res) => {  
trx.destroy({
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