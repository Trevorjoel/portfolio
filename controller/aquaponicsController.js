// AQUAPONICS CONTROLLER
/*
* Middleware for the aquaponics API
* */

const TakeData = require('../models/aquaponicsModel');

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
exports.select_fish_parameters = (req, res) => {
    TakeData.selectFishParams(req.body.fishId, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({data})
    })

};

exports.select_first_last_readings = (req, res) => {
    TakeData.selectFirstLastReadings((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1:data})
    })

};

exports.select_fish = (req, res) => {
    TakeData.selectFish((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })

};

exports.select_readings_range = (req, res) => {
    TakeData.selectReadingsRange(req.body.from, req.body.to, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })
}

exports.add_settings = async (req, res) => {
    console.log('add settings runs');

    TakeData.addSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_temp_settings = async (req, res) => {
    console.log('add temp settings runs');

    TakeData.addTempSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_ph_settings = async (req, res) => {
    console.log('add ph settings runs');

    TakeData.addPhSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_nh3_settings = async (req, res) => {
    console.log('add nh3 settings runs');

    TakeData.addNh3Settings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.select_user_parameters = (req, res) => {
    TakeData.selectUserParams(req.body.userId, req.body.settingName, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({data})
    })

};

exports.select_settings = (req, res) => {
    TakeData.selectSettings((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })

};


