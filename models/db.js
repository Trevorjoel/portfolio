// DB Connection
const mysql = require('mysql');
import keys from '../config/keys';

let connection = mysql.createConnection({
    host: keys.DB.HOST,
    user: keys.DB.USER,
    password: keys.DB.PASSWORD,
    database: keys.DB.DATABASE,
    port: keys.DB.PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connected....')
    }
});
module.exports = connection;