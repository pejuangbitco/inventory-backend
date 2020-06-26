module.exports = function(app) {
    // const multer  = require('multer')
    // const storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //       cb(null, 'uploads/')
    //     },
    //     filename: function (req, file, cb) {
    //       let newName = file.mimetype.split("/")[1]
    //       cb(null, file.fieldname + '-' + Date.now() +'.'+ newName)
    //     }
    //   })
       
    // const upload = multer({ storage: storage })
    const user = require('../controller/user.controller.js');
    const auth  = require('../controller/auth.controller.js');
 
    // Create a new Customer
    app.post('/api/users', user.create);
 
    // Retrieve all Customer
    app.get('/api/users', user.list);
 
    // Retrieve a single Customer by Id
    app.get('/api/users/:customerId', user.get);
 
    // Update a Customer with Id
    app.put('/api/users/:customerId', user.update);
 
    // Delete a Customer with Id
    app.delete('/api/users/:customerId', user.delete);

    //auth
    app.post('/api/login', auth.login);

    //upload file user
    // app.post('/user/photo', upload.single('user'), function(req, res, next){        
    //     res.send(req.file.filename);
    // });
}