/*
* Controllers for Routing the API
* */
const nodemailer = require('nodemailer');
const sql = require('../models/db');
import express from 'express';
const app = express();
const keys = require('../config/keys');
//
exports.emailer = function(req,res){
        let response;
        response = {
            name: req.body.name,
            email: req.body.email,
            message: req.body.message
        };
        
        let mailOptions = {
            from: req.body.name,
            to: 'trevoofnorthcliffe@gmail.com',
            subject: 'PORTFOLIO contact Message: ' + req.body.name,
            text: req.body.message,
            html: 'Message from: ' + req.body.name + '<br> </br> Email: ' +  req.body.email + '<br> </br> Message: ' + req.body.message,
        };
        
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: keys.auth,
        });
        transporter.sendMail(mailOptions, (err, res) => {
            
            if (err) {
                return console.log(err);
            } else {
                console.log(JSON.stringify(res));
            }
            transporter.close();
        });
};


exports.connectAndShow = function(req, res){
    sql.query('SELECT * FROM qualification.employee',
        function (error, results) {
            if (error) throw error;
            
            console.log('The results are: ', results);
                
                res.send(
                    {database1: results,}
                );
            });
};
