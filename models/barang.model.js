module.exports = (sequelize, Sequelize) => {
    const Barang = sequelize.define('barang' ,{
        nama_barang: {
            type: Sequelize.STRING
        }
    }, {
        tableName: 'barang',
        timestamps: false
    });

    return Barang;
}