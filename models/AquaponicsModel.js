const sqlAquaponics = require('../models/dbAquaponics');

let TakeData = function (req) {
    this.numberOfReadings = req.body.numberOfReadings
}


TakeData.selectRecent = (number, result) => {
    sqlAquaponics.query(`SELECT * FROM (
        SELECT * FROM readings ORDER BY id DESC LIMIT ${number}) sub ORDER BY id ASC `,
        (err, res) => {
            if (err) {
                result(err, null);

            } else {
                result(null, res);

            }
        });
}
module.exports = TakeData;
