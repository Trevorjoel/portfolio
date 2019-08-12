import express from 'express';
import router from './routes/api/index';
import bodyParser from 'body-parser';
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;
// setup node mailer
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'',
        pass: ''
    }
});

app.listen(port, () => console.log(`LISTENING on port ${port}`));
// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
app.use(router);




