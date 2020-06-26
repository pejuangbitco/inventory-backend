var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(cors())

const db = require('./config/db.config');
  
require('./route/customer.route.js')(app);
require('./route/barang.route.js')(app); 
require('./route/user.route.js')(app); 

// Create a Server
var server = app.listen(process.env.PORT || 5000, function () {
 
  var host = server.address().address
  var port = process.env.PORT || 5000
 
  console.log("App listening at http://%s:%s", host, port)
})