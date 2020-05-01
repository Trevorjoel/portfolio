/*
* Controllers for Routing the API
*
*  */
import {validationResult} from "express-validator";

const TakeData = require('../models/AquaponicsModel');
const nodemailer = require('nodemailer');
const sql = require('../models/db');
const sqlAquaponics = require('../models/dbAquaponics');
const keys = require('../config/keys');
const dbModel = require('../models/appModel');
// handle the contact form request
exports.emailer = function (req) {
    console.log('The mailer controller runs.');

    //  Setup options for the mailer
    let mailOptions = {
        from: req.body.name,
        to: 'trevoofnorthcliffe@gmail.com',
        subject: 'Portfolio contact Message: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + ' </br> Email: ' + req.body.email + '</br> Message: ' + req.body.message,
    };
    // Setup transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: keys.auth,
    });
    // Send mail
    transporter.sendMail(mailOptions, (err, res) => {

        if (err) {
            console.log(err);
            return console.log(err);
        } else {
            res.send.JSON.stringify(res);
            return console.log(JSON.stringify(res));
        }

    });
    transporter.close();
};

// Grab all database entries
exports.connectAndShow = async function (req, res) {
    // noinspection JSUnusedLocalSymbols,JSUnusedLocalSymbols,JSUnusedLocalSymbols,JSUnresolvedFunction
    const results = await sql.query(dbModel.selectAllEmployees,

        function (error, results) {

            if (error) throw error;
            res.send(
                {database1: results,},
            );
        });
};
//
// Handles requests to delete a single entry by the id
exports.deleteByID = async function (req, res) {
    console.log('Delete middleware running...');

    // noinspection JSUnresolvedFunction
    const results = await sql.query(`${dbModel.deleteById}  ${req.body.id}`);
    // noinspection JSUnresolvedFunction
    const updated = await sql.query(dbModel.selectAllEmployees,

        function (error, updated) {
            if (error) throw error;
            res.send({database2: updated}) // todo: This causes a bug, lists that have been sorted are rearranged back to initial state
        })
};

// Testing function for validation methods
exports.validate = (req, res) => {
    console.log('Validate func running.');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }
    res.send(
        `I received your  request. This is what you sent me:
            ${req.body.post} And :  ${req.body.anotherValue}`,);
};

// Adds a bunch of entries to the database
exports.populateTable = async (req, res) => {
    console.log('Populate table controller working');
    // noinspection JSUnresolvedFunction
    const insert = await sql.query(dbModel.populateDb);
    // noinspection JSUnresolvedFunction
    const read = await sql.query(dbModel.selectAllEmployees,

        function (error, read) {
            if (error) throw error;
            res.send({database2: read})
        })
};

exports.addEmployee = async (req, res) => {

    // Prevent malicious attempts at entering unwanted data after disable of front end validation
    // No need to send back user messages

    const errors = validationResult(req);

    // Catch the express-validator errors & ensure that the bad guys don't enter large entries to the database (causing  ER_DATA_TOO_LONG from SQL)
    if (!errors.isEmpty() || req.body.firstName.length > 15 || req.body.lastName.length > 15) {
        console.log('Somebody disabled the front-end validation and attempted to enter nasties into the  fields! Not cool man, not cool!');

    } else {
        console.log(req.body.firstName);
        // noinspection JSUnresolvedFunction
        const insert = await sql.query(`INSERT INTO \`employee\` (\`empLastName\`, \`empFirstName\`, \`empDepartmentID\`, \`empHireDate\`, \`empDateOfBirth\`, \`empAddress\`, \`empTown\`, \`empState\`, \`empPostcode\`, \`empContact\`) VALUES
('${req.body.lastName}', '${req.body.firstName}', ${req.body.departmentID}, '2001-03-17', '1964-12-12', '45 Sandy Creek Rd', 'Mapdot', 'NSW', '2999', '0444444444')`,
            function (error) {
                if (error) throw error;

            });

        // noinspection JSUnresolvedFunction
        const results = await sql.query(dbModel.selectAllEmployees,

            function (error, results) {

                if (error) throw error;
                res.send(
                    {database3: results,},
                );
            });
    }
};

// AQUAPONICS CONTROLLER
exports.addReadings = async (req, res) => {
    console.log('addReadings RUns');

    const insert = await sqlAquaponics.query(`INSERT INTO \`readings\` ( \`users_id\`, \`date_time\`, \`temperature\`, \`ph\`, \`nh3\`) VALUES
       ('${req.body.users_id}', '${req.body.date_time}', '${req.body.temp}', '${req.body.ph}', '${req.body.nh3}')`,

        function (error) {
            if (error) throw error;
            res.send(
                {added: res.insert}
            )
        });
};
exports.getPreviousTime = async (req, res) => {
    console.log('GetTime Runs');
    const results = await sqlAquaponics.query(dbModel.getPrevTime,

        function (error, results) {

            if (error) throw error;
            res.send(
                {time: results,},
            );
        });
};

exports.select_recent_readings = (req, res) => {
    TakeData.selectRecent(req.body.numberOfReadings, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })
}

