const path = require('path');
const express = require('express');
// const hbs = require('hbs');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

const app = express();

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'crudnode'
// });

// conn.connect((err) => {
//     if(err) throw err;
//     console.log('Mysql connected..');
// });

app.use(bodyParser.json());
