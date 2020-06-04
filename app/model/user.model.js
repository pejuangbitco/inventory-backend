module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        nama_user: {
            type: Sequelize.STRING
        },
        username: {
        type: Sequelize.STRING
        },
        password: {
        type: Sequelize.STRING
        },
        email: {
        type: Sequelize.STRING
        }
    });
    
    return User;
}