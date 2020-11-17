// AQUAPONICS CONTROLLER
/*
* Middleware for the aquaponics API
* */

const DataModel = require('../models/DataModel');

exports.get_previous_time =  (req, res) => {
    console.log('GetTime Runs');
    DataModel.getPreviousTime((err, data)=>{
        if (err)
            res.send(err)
        else
            res.send({time: data})
    })
};

exports.select_recent_readings = (req, res) => {
    DataModel.selectRecent(req.body.numberOfReadings, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })
}

exports.add_reading = async (req, res) => {
    console.log('addReadings RUns');

    DataModel.addReading(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};
// Under construction
exports.select_fish_parameters = (req, res) => {
    DataModel.selectFishParams(req.body.fishId, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({data})
    })

};

exports.select_first_last_readings = (req, res) => {
    DataModel.selectFirstLastReadings((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1:data})
    })

};

exports.select_fish = (req, res) => {
    DataModel.selectFish((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })

};

exports.select_readings_range = (req, res) => {
    DataModel.selectReadingsRange(req.body.from, req.body.to, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })
}

exports.add_settings = async (req, res) => {
    console.log('add settings runs');

    DataModel.addSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_temp_settings = async (req, res) => {
    console.log('add temp settings runs');

    DataModel.addTempSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_ph_settings = async (req, res) => {
    console.log('add ph settings runs');

    DataModel.addPhSettings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.add_nh3_settings = async (req, res) => {
    console.log('add nh3 settings runs');

    DataModel.addNh3Settings(req, (err, data) =>{
        if (err)
            res.send(err)
        else
            res.send({body: data})
    })

};

exports.select_user_parameters = (req, res) => {
    DataModel.selectUserParams(req.body.userId, req.body.settingName, (err, data) => {
        if (err)
            res.send(err)
        else
            res.send({data})
    })

};

exports.select_settings = (req, res) => {
    DataModel.selectSettings((err, data) => {
        if (err)
            res.send(err)
        else
            res.send({database1: data})
    })

};


