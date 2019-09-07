/*
* Controllers for Routing the API
*
*  */
import {validationResult} from "express-validator";
const nodemailer = require('nodemailer');
const sql = require('../models/db');
const keys = require('../config/keys');

// handle the contact form request
exports.emailer = function (req) {
    console.log('The mailer controller runs.');
    
    //  Setup options for the mailer
    let mailOptions = {
        from: req.body.name,
        to: 'trevoofnorthcliffe@gmail.com',
        subject: 'Portfolio contact Message: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + '<br> </br> Email: ' + req.body.email + '<br> </br> Message: ' + req.body.message,
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
    const results = await sql.query('SELECT * FROM qualification.employee',
        
        function (error, results) {
            
            if (error) throw error;
            res.send(
                {database1: results,},
            );
        });
};

// Handles requests to delete a single entry
exports.deleteByID = async function (req, res) {
    console.log('Delete middleware running...');
    
    const results = await sql.query(`DELETE FROM employee where empEmployeeID = ${req.body.id}`);
    const updated = await sql.query('SELECT * FROM qualification.employee',
        
        function (error, updated) {
            if (error) throw error;
           res.send({database2: updated}) // This causes a bug, lists that have been sorted are rearranged back to initial state
                                            // THe toggle function in the Components state may be a place to start
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
