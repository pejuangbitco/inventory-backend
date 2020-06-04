	
const db = require('../config/db.config.js');
const User = db.users;
 
// Post a User
exports.create = (req, res) => {  
  // Save to MySQL database
  User.create({  
    nama_user: req.body.nama_user,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).then(user => {    
    // Send created user to client
    res.send(user);
  });
};
 
// FETCH all Customers
exports.findAll = (req, res) => {
  User.findAll().then(users => {
    // Send all users to Client
    res.send(users);
  });
};
 
// Find a User by Id
exports.findByPk = (req, res) => {  
  User.findByPk(req.params.customerId).then(user => {
    res.send(user);
  })
};
 
// Update a User
exports.update = (req, res) => {
  const id = req.params.customerId;
  User.update({ 
    nama_user: req.body.nama_user,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }, { 
    where: {id: req.params.customerId} 
  }).then(() => {
    res.status(200).send("updated successfully a user with id = " + id);
  });
};
 
// Delete a User by Id
exports.delete = (req, res) => {
  const id = req.params.customerId;
  User.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a user with id = ' + id);
  });
};