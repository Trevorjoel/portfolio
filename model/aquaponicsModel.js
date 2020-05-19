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
// Select data from table FISH

TakeData.selectFishParams = (number, result) =>{

    sqlAquaponics.query(`SELECT * FROM fish WHERE fish.id = ${number}`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res[0]);
            }
        });
}

TakeData.selectLastReadings = (result) =>{

    sqlAquaponics.query(`SELECT * FROM readings ORDER BY id DESC LIMIT 1`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

TakeData.selectFish = (result) =>{

    sqlAquaponics.query(`SELECT * FROM fish ORDER BY id ASC`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

TakeData.selectReadingsRange = (from, to, result) =>{

    sqlAquaponics.query(`SELECT * FROM readings WHERE date_time BETWEEN STR_TO_DATE('${from}', '%Y-%m-%d %H:%i:%s') AND STR_TO_DATE('${to}', '%Y-%m-%d %H:%i:%s') ORDER BY id ASC`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

module.exports = TakeData;
