	
const db = require('../config/db.config');
const user = db.user;

// FETCH all Customers
exports.list = (req, res) => {
  try {
    user.findAll({
      order: [['nama', 'ASC']]
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

// Find a User by Id
exports.get = (req, res) => {  
  user.findOne({
    where: { id: req.params.id }
  }).then( users => {      
    if( users === null ) {
      return res.status(404).json({
        status: 'ERROR',
        messages: 'Resource Not Found!',
        data: {}
      });
    }
    res.json({
      status: 'OK',
      messages: '',
      data: users
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
    username,
    password,
    nama,
    divisi,
    role
  } = req.body

  user.create({  
    username: username,
    password: password,
    nama: nama,
    divisi: divisi,
    role: role
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
    username,
    password,
    nama,
    divisi,
    role
  } = req.body

  user.update({ 
    username: username,
    password: password,
    nama: nama,
    divisi: divisi,
    role: role
  }, { 
    where: {id: req.params.id} 
  }).then(result => {
    res.json({
      status: 'OK',
      messages: 'Success update data.',
      data: {
        id: req.params.id,
        username: username,
        password: password,
        nama: nama,
        divisi: divisi,
        role: role
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
  user.destroy({
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