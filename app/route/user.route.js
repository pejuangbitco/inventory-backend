module.exports = function(app) {
 
    const users = require('../controller/user.controller.js');
    const auth  = require('../controller/auth.controller.js');
 
    // Create a new Customer
    app.post('/api/users', users.create);
 
    // Retrieve all Customer
    app.get('/api/users', users.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/users/:customerId', users.findByPk);
 
    // Update a Customer with Id
    app.put('/api/users/:customerId', users.update);
 
    // Delete a Customer with Id
    app.delete('/api/users/:customerId', users.delete);

    //auth
    app.post('/api/login', auth.login);
}