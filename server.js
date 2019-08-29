import express from 'express';
import router from './routes/api/index';
import bodyParser from 'body-parser';
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`LISTENING on port ${port}`));

// Enable Cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Import routes
app.use(router);




