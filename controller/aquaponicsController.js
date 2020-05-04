// AQUAPONICS CONTROLLER
/*
* Middleware for the aquaponics API
* */

const TakeData = require('../model/aquaponicsModel');

exports.get_previous_time =  (req, res) => {
    console.log('GetTime Runs');
    TakeData.getPreviousTime((err, data)=>{
        if (err)
            res.send(err)
        else
            res.send({time: data})
    })
};

exports.select_recent_readings = (req, res) => {
    TakeData.selectRecent(req.body.numberOfReadings, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })
}

exports.add_reading = async (req, res) => {
    console.log('addReadings RUns');

    TakeData.addReading(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};
// Under construction
/*exports.select_fish_parameters = async (req, res) =>
{

}*/
