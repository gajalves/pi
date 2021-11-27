const mysql = require('mysql');

const Conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pi-trabalho'
    //database: 'testdb'
})


module.exports = Conexao