import express from 'express';
const router = express.Router();
const mysql = require('mysql');
import DB from '../../config/keys.js';

// Returns a message if the server is running
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Express back-end, up and running!',
    });
});
router.post('/api/world', (req, res) => {
    
    res.send(
        `I received your  request. This is what you sent me: ${req.body.post}`,
        
    );
    console.log("From index file: " + req.body.get);
});



// DB routes
let connection = mysql.createConnection({
    host     : DB.HOST,
    user     : DB.USER,
    password : DB.PASSWORD,
    database : DB.DATABASE,
    port:      DB.PORT
});

connection.connect((err) =>{
    if (err){
        console.log(err);
    }else {
        console.log('connected....')
    }
});

connection.query('SELECT * FROM qualification.employee',
    function (error, results) {
        if (error) throw error;
        
        console.log('The results are: ', results);
        router.post('/api/sql', (req, res) => {
            
            res.send(
                {  database1: results,}
            );
        });
        router.get('/api/sql', (req, res) => {
            res.send({ database1: results,
            });
            
        });
    });
export default router;

