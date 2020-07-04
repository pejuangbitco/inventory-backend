const db = require('../config/db.config.js');
const { QueryTypes } = require('sequelize');
const moment = require('moment');
moment.tz.setDefault("Asia/Jakarta");
moment.defaultFormat = "YYYY-MM-DD HH:mm";

const { trx, detail_trx, user } = db;

exports.coba = (req, res) => {
  trx.findAll({
    include: 'detail_trx'
  }).then(rst => {
    res.send(rst)
  }).catch(err => {
    res.send(err)
  })
}

exports.list = async (req, res) => {
  try {
    let sql = 'SELECT trx.id, trx.status, user.nama, trx.tanggal FROM trx INNER JOIN user ON user.id=trx.user_id ORDER BY trx.tanggal DESC';
    
    if(req.query.user_id) {
      console.log(req.query.user_id)
      sql = 'SELECT trx.id, trx.status, user.nama, trx.tanggal FROM trx INNER JOIN user ON user.id=trx.user_id where trx.user_id= :user_id ORDER BY trx.tanggal DESC';
    }
    let trxUser = await db.sequelize.query(sql,{
      replacements: req.query
    })
      .then(result => {
        
        let hasil = result[0].map(row => {
          row.tanggal = moment(row.tanggal).format();
          return row
        })        
        
        return hasil;
      });
      res.json({
        status: 'OK',
        messages: '',
        data: trxUser
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
    
    detail_trx.findAll({
      where: {
        trx_id: result.id
      }
    }).then(async final => {
      let userTrx = await user.findOne({where: {id: result.user_id}}); 
      res.json({
        status: 'OK',
        messages: '',
        data: {
          tanggal: result.tanggal,
          status: result.status,
          user: userTrx,
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
      tanggal: moment().format()
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
      where: {id: req.params.id} 
  }).then(result => {
      res.json({
        status: 'OK',
        messages: 'Success update data.',
        data: {
            id: req.params.id,
            status: status
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