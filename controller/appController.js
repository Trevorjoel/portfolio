/*
* Controllers for Routing the API
* */
const nodemailer = require('nodemailer');
const sql = require('../models/db');
import express from 'express';

const app = express();
const keys = require('../config/keys');
//
exports.emailer = function (req, res) {
    console.log('The mailer controller runs.');
    let response;
    response = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    };
    
    let mailOptions = {
        from: req.body.name,
        to: 'trevoofnorthcliffe@gmail.com',
        subject: 'Portfolio contact Message: ' + req.body.name,
        text: req.body.message,
        html: 'Message from: ' + req.body.name + '<br> </br> Email: ' + req.body.email + '<br> </br> Message: ' + req.body.message,
    };
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: keys.auth,
    });
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

exports.connectAndShow = async function (req, res) {
    const results = await sql.query('SELECT * FROM qualification.employee',
        
        function (error, results) {
            
            if (error) throw error;
            res.send(
                {database1: results,},
            );
        });
};
exports.deleteByID = async function (req, res) {
    console.log('Delete middleware running...');
    
    const results = await sql.query(`DELETE  FROM employee where empEmployeeID = ${req.body.id}`);
    const updated = await sql.query('SELECT * FROM qualification.employee',
        
        function (error, updated) {
            if (error) throw error;
            res.send({database2: updated})
        })
};
 