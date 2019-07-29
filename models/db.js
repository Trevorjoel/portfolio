// DB Connection
const mysql = require('mysql');
import DB from '../config/keys';
let connection = mysql.createConnection({
    host     : DB.HOST,
    user     : DB.USER,
    password : DB.PASSWORD,
    database : DB.DATABASE,
    port:      DB.PORT
});

connection.connect((err) =>{
    if (err){
        console.log(err);
    }else {
        console.log('connected....')
    }
});
module.exports = connection;