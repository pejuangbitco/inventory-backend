const db = require('../config/db.config.js');
const { trx, detail_trx } = db;

exports.coba = (req, res) => {
  trx.findAll({
    include: 'detail_trx'
  }).then(rst => {
    res.send(rst)
  }).catch(err => {
    res.send(err)
  })
}

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
  try {
  trx.findOne({
    where: { id: req.params.id }    
  }).then( result => {      
    if( result === null ) {
      return res.status(404).json({
        status: 'ERROR',
        messages: 'Resource Not Found!',
        data: {}
      });
    }
    // console.log(result)
    // res.json({
    //   status: 'OK',
    //   messages: '',
    //   data: result
    // });
    detail_trx.findAll({
      where: {
        trx_id: result.id
      }
    }).then(final => {
      res.json({
        status: 'OK',
        messages: '',
        data: {
          tanggal: result.tanggal,
          detail_trx: final
        }
      });
    });    
  }).catch( err => {
    res.status(500).json({
      status: 'ERROR',
      messages: err,
      data: {}
    });
  });
  } catch (bb) {
    res.send(bb)
  }
};

exports.create = (req, res) => {  
    let {
      barang,
      user_id
    } = req.body

    trx.create({        
      user_id: user_id,
      status: "pending",
      tanggal: new Date()
    }).then(result => {
      barang.forEach((item, index) => {
        detail_trx.create({
          trx_id: result.id,
          nama_barang: item.nama_barang, 
          jumlah_barang: item.jumlah_barang 
        });  
      });
      
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

exports.update = (req, res) => {
  let {
      status
  } = req.body

  trx.update({
      status: status
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