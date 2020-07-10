import {validationResult} from "express-validator";
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

TakeData.selectFirstLastReadings = (result) =>{

    sqlAquaponics.query(`(SELECT * FROM readings ORDER BY id LIMIT 1) 
                         UNION
                         (SELECT * FROM readings ORDER BY id DESC LIMIT 1)`,
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

TakeData.addSettings = (req, result) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty() || req.body.setting_name.length > 30) {
        console.log('Somebody disabled the front-end validation and attempted to enter nasties into the  fields! Not cool man, not cool!');
    }
    else {

        sqlAquaponics.query(`INSERT INTO \`settings\` ( \`users_id\`, \`setting_name\`, \`temp_low_critical\`, 
    \`temp_low_warn\`, \`temp_high_warn\`, \`temp_high_critical\`, \`ph_low_critical\`, \`ph_low_warn\`, 
    \`ph_high_warn\`, \`ph_high_critical\`, \`nh3_warn\`, \`nh3_critical\`, \`temp_target\`, \`ph_target\`, 
    \`nh3_target\`) VALUES
       ('${req.body.users_id}', '${req.body.setting_name}', '${req.body.temp_low_critical}',
        '${req.body.temp_low_warn}', '${req.body.temp_high_warn}', '${req.body.temp_high_critical}',
         '${req.body.ph_low_critical}', '${req.body.ph_low_warn}', '${req.body.ph_high_warn}',
          '${req.body.ph_high_critical}', '${req.body.nh3_warn}', '${req.body.nh3_critical}',
           '${req.body.temp_target}', '${req.body.ph_target}', '${req.body.nh3_target}') 
           ON DUPLICATE KEY UPDATE \`temp_low_critical\` = '${req.body.temp_low_critical}', \`temp_low_warn\` = '${req.body.temp_low_warn}',
            \`temp_high_warn\` = '${req.body.temp_high_warn}', \`temp_high_critical\` = '${req.body.temp_high_critical}',
            \`ph_low_critical\` = '${req.body.ph_low_critical}', \`ph_low_warn\` = '${req.body.ph_low_warn}', 
            \`ph_high_warn\` = '${req.body.ph_high_warn}', \`ph_high_critical\` = '${req.body.ph_high_critical}', 
            \`nh3_warn\` = '${req.body.nh3_warn}', \`nh3_critical\` = '${req.body.nh3_critical}', 
            \`temp_target\` = '${req.body.temp_target}', \`ph_target\` = '${req.body.ph_target}', \`nh3_target\` = '${req.body.nh3_target}'`,
            (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
    }
}

TakeData.addTempSettings = (req, result) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty() || req.body.setting_name.length > 30) {
        console.log('Somebody disabled the front-end validation and attempted to enter nasties into the  fields! Not cool man, not cool!');

    }
    else {

        sqlAquaponics.query(`INSERT INTO \`settings\` ( \`users_id\`, \`setting_name\`, \`temp_low_critical\`, 
    \`temp_low_warn\`, \`temp_high_warn\`, \`temp_high_critical\`, \`ph_low_critical\`, \`ph_low_warn\`, 
    \`ph_high_warn\`, \`ph_high_critical\`, \`nh3_warn\`, \`nh3_critical\`, \`temp_target\`, \`ph_target\`, 
    \`nh3_target\`) VALUES
       ('${req.body.users_id}', '${req.body.setting_name}', '${req.body.temp_low_critical}',
        '${req.body.temp_low_warn}', '${req.body.temp_high_warn}', '${req.body.temp_high_critical}',
         '${req.body.ph_low_critical}', '${req.body.ph_low_warn}', '${req.body.ph_high_warn}',
          '${req.body.ph_high_critical}', '${req.body.nh3_warn}', '${req.body.nh3_critical}',
           '${req.body.temp_target}', '${req.body.ph_target}', '${req.body.nh3_target}') 
           ON DUPLICATE KEY UPDATE \`temp_low_critical\` = '${req.body.temp_low_critical}', 
           \`temp_low_warn\` = '${req.body.temp_low_warn}', \`temp_high_warn\` = '${req.body.temp_high_warn}',
            \`temp_high_critical\` = '${req.body.temp_high_critical}', \`temp_target\` = '${req.body.temp_target}'`,
            (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
    }
}

TakeData.addPhSettings = (req, result) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty() || req.body.setting_name.length > 30) {
        console.log('Somebody disabled the front-end validation and attempted to enter nasties into the  fields! Not cool man, not cool!');

    }
    else {

        sqlAquaponics.query(`INSERT INTO \`settings\` ( \`users_id\`, \`setting_name\`, \`temp_low_critical\`, 
    \`temp_low_warn\`, \`temp_high_warn\`, \`temp_high_critical\`, \`ph_low_critical\`, \`ph_low_warn\`, 
    \`ph_high_warn\`, \`ph_high_critical\`, \`nh3_warn\`, \`nh3_critical\`, \`temp_target\`, \`ph_target\`, 
    \`nh3_target\`) VALUES
       ('${req.body.users_id}', '${req.body.setting_name}', '${req.body.temp_low_critical}',
        '${req.body.temp_low_warn}', '${req.body.temp_high_warn}', '${req.body.temp_high_critical}',
         '${req.body.ph_low_critical}', '${req.body.ph_low_warn}', '${req.body.ph_high_warn}',
          '${req.body.ph_high_critical}', '${req.body.nh3_warn}', '${req.body.nh3_critical}',
           '${req.body.temp_target}', '${req.body.ph_target}', '${req.body.nh3_target}') 
           ON DUPLICATE KEY UPDATE \`ph_low_critical\` = '${req.body.ph_low_critical}', 
           \`ph_low_warn\` = '${req.body.ph_low_warn}', \`ph_high_warn\` = '${req.body.ph_high_warn}', 
           \`ph_high_critical\` = '${req.body.ph_high_critical}', \`ph_target\` = '${req.body.ph_target}'`,
            (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
    }
}

TakeData.addNh3Settings = (req, result) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty() || req.body.setting_name.length > 30) {
        console.log('Somebody disabled the front-end validation and attempted to enter nasties into the  fields! Not cool man, not cool!');

    }
    else {

        sqlAquaponics.query(`INSERT INTO \`settings\` ( \`users_id\`, \`setting_name\`, \`temp_low_critical\`, 
    \`temp_low_warn\`, \`temp_high_warn\`, \`temp_high_critical\`, \`ph_low_critical\`, \`ph_low_warn\`, 
    \`ph_high_warn\`, \`ph_high_critical\`, \`nh3_warn\`, \`nh3_critical\`, \`temp_target\`, \`ph_target\`, 
    \`nh3_target\`) VALUES
       ('${req.body.users_id}', '${req.body.setting_name}', '${req.body.temp_low_critical}',
        '${req.body.temp_low_warn}', '${req.body.temp_high_warn}', '${req.body.temp_high_critical}',
         '${req.body.ph_low_critical}', '${req.body.ph_low_warn}', '${req.body.ph_high_warn}',
          '${req.body.ph_high_critical}', '${req.body.nh3_warn}', '${req.body.nh3_critical}',
           '${req.body.temp_target}', '${req.body.ph_target}', '${req.body.nh3_target}') 
           ON DUPLICATE KEY UPDATE \`nh3_warn\` = '${req.body.nh3_warn}', \`nh3_critical\` = '${req.body.nh3_critical}', 
           \`nh3_target\` = '${req.body.nh3_target}'`,
            (err, res) => {
                if (err) {
                    result(err, null);
                } else {
                    result(null, res);
                }
            });
    }
}

TakeData.selectUserParams = (number, settingName, result) =>{

    sqlAquaponics.query(`SELECT * FROM settings WHERE settings.users_id = ${number} AND settings.setting_name = '${settingName}'`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res[0]);
            }
        });
}

TakeData.selectSettings = (result) =>{

    sqlAquaponics.query(`SELECT * FROM settings WHERE settings.setting_name <> 'default_settings' ORDER BY id ASC`,
        (err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        });
}

module.exports = TakeData;
