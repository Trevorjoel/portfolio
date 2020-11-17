import keys from "../config/keys";
const mysql = require('mysql');

let aquaponicsConnection = mysql.createConnection({
    host: keys.DB.HOST,
    user: keys.DB.USER,
    password: keys.DB.PASSWORD,
    database: keys.DB_AQUAPONICS.DATABASE,
    port: keys.DB.PORT
});

aquaponicsConnection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Aquaponics db connected....')
    }
});
module.exports = aquaponicsConnection;