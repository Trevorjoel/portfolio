import express from 'express';
import router from './routes/api/index';

import bodyParser from 'body-parser';
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`LISTENING on port ${port}`));
// Use middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);


console.log();


/*
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Express back-end, up and running!',
    });
    
});

router.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your  request. This is what you sent me: ${req.body.post}`,
    );
});
*/




/*let connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'nodeapp',
    password : 'nodeapp',
    database : 'qualification',
    port: 3306
});

connection.connect((err) =>{
    if (err){
        console.log(err);
    }
    console.log('connected....')
});

connection.query('SELECT empFirstName FROM qualification.employee WHERE empDepartmentID = 2',
    function (error, results, fields) {
        if (error) throw error;
        
        console.log('The results are: ', results);
        app.post('/api/sql', (req, res) => {
            
            res.send(
                {  database1: results,}
            );
        });
        app.get('/api/sql', (req, res) => {
            res.send({ database1: results,
            });
            
        });
    });*/




