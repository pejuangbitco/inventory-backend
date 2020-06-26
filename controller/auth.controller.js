const db    = require('../config/db.config.js');
const jwt   = require('jsonwebtoken');  
const User  = db.users;

exports.login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(user => {     
        if(user!==null) {
            data = {
                username: user.username,
                email: user.email
            }
            res.json({
                'message': 'login successfully',
                'token': jwt.sign(data, 'secret')                
            });
        } else {
            res.json({
                'message': 'login failed'                              
            });
        }
    }).catch(err => {
        res.json({
            'status': 'ERROR',
            'messages': err.messages,
            'data': {}
        });
    });
    console.log('email %s pass %s', req.body.username, req.body.password)
}