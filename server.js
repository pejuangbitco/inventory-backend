var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./app/route/customer.route.js')(app);
 
// Create a Server
var server = app.listen(process.env.PORT || 5000, function () {
 
  var host = server.address().address
  var port = process.env.PORT || 5000
 
  console.log("App listening at http://%s:%s", host, port)
})