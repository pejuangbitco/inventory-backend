module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        nama: {
            type: Sequelize.STRING
        },
        divisi: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        tableName: 'user'
    });
    
    return user;
}