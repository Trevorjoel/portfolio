const sqlAquaponics = require('.//dbAquaponics');

let TakeData = function (req) {
    this.numberOfReadings = req.body.numberOfReadings
}

TakeData.getPreviousTime = (result) =>{
    sqlAquaponics.query(`SELECT date_time, id FROM readings ORDER BY id DESC LIMIT 0 , 1 `,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
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
TakeData.addReading = (req, result) =>{
    sqlAquaponics.query(`INSERT INTO \`readings\` ( \`users_id\`, \`date_time\`, \`temperature\`, \`ph\`, \`nh3\`) VALUES
       ('${req.body.users_id}', '${req.body.date_time}', '${req.body.temp}', '${req.body.ph}', '${req.body.nh3}')`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}
// Under Construction
/*
TakeData.selectFishParams = (req, result) =>{
    sqlAquaponics.query(`SELECT * FROM fish WHERE fish.id = 2`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}
*/

//         SELECT * FROM fish WHERE fish.id = 2
module.exports = TakeData;
