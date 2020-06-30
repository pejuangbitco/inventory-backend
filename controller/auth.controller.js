const db    = require('../config/db.config.js');
const jwt   = require('jsonwebtoken');  
const User  = db.user;

exports.login = (req, res) => {
    let {
        username,
        password
    } = req.body

    if(username==null || password==null) {
        return res.json({
            status: 'OK',
            messages: 'username atau password kosong!',
            data: {}
        });
    }
    User.findOne({
        where: {
            username: username,
            password: password
        }
    }).then(result => {
        if(result===null) {
            return res.json({
                status: 'OK',
                messages: 'username atau password salah!',
                data: {}
            });
        }
        res.json({
            status: 'OK',
            messages: 'Login Sukses!',
            data: result
        });
    }).catch(err => {
        res.json({
            status: 'ERROR',
            messages: 'Bad request!!',
            data: {}
        });
    });
    // User.findOne({
    //     where: {
    //         username: req.body.username,
    //         password: req.body.password
    //     }
    // }).then(user => {     
    //     if(user!==null) {
    //         data = {
    //             username: user.username,
    //             email: user.email
    //         }
    //         res.json({
    //             'messages': 'login successfully',
    //             'token': jwt.sign(data, 'secret')                
    //         });
    //     } else {
    //         res.json({
    //             'messages': 'login failed'                              
    //         });
    //     }
    // }).catch(err => {
    //     res.json({
    //         'status': 'ERROR',
    //         'messagess': err.messagess,
    //         'data': {}
    //     });
    // });
    // console.log('email %s pass %s', req.body.username, req.body.password)
}