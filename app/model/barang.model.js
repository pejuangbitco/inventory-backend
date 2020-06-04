module.exports = (sequelize, Sequelize) => {
    const Barang = sequelize.define('barang' ,{
        nama_barang: {
            type: Sequelize.STRING
        },
        jumlah_barang: {
            type: Sequelize.INTEGER
        },
        jenis_barang: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });

    return Barang;
}