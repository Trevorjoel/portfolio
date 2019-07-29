/*
* Controllers for Routing the API
* */

const sql = require('../models/db');

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
