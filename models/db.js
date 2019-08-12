// DB Connection
const mysql = require('mysql');
import Conf from '../config/keys';
let connection = mysql.createConnection({
    host     : Conf.HOST,
    user     : Conf.USER,
    password : Conf.PASSWORD,
    database : Conf.DATABASE,
    port:      Conf.PORT
});

connection.connect((err) =>{
    if (err){
        console.log(err);
    }else {
        console.log('connected....')
    }
});
module.exports = connection;