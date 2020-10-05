
// All API requests

import * as Assets from "../Assets/ApProjectAssets";

export const getFish = async function () {

    const response = await fetch('/api/allfish', {
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query;
}
export const addReadingsToDB = async function () {
    (this.createNotificationController('info', Assets.readingText, Assets.readingTitle))();

    const response = await fetch('/api/ap', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            users_id: 1,
            date_time: this.state.latestTime,
            temp: this.state.tempUpdate,
            ph: this.state.phUpdate,
            nh3: this.state.nh3Update,
        })
    });

    const body = await response.json()
        .then(() => {
            this.getPreviousTime()
        })
        .catch(() => {
            console.log('There was an error')

        })

};

// Function to get the last time inserted into the database
export const getPreviousTime = async function () {

    const response = await fetch('/api/ap', {
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    }).catch(() => {
        console.log('Error fetching time')
    });


    const query = await response.json();
    if (response.status !== 200) throw Error(query.message);
    const today = new Date(query.time[0].date_time);

    today.setHours(today.getHours() + 4); // + 4 for the localhost - 4 for the deployment

    this.setState({
        latestTime: today.toISOString().slice(0, 19).replace('T', ' ') //
    });

    return query;

};

export const selectFishType = async function (fishId) {
    const response = await fetch('/api/fish', {
        method: 'POST',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            fishId: fishId,
        })

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query.data;
}

export const getFirstLastReadings = async function () {

    const response = await fetch('/api/minmax', {
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query;
}
export const getReadingsRange = async function (from, to) {


    const response = await fetch('/api/range', {
        method: 'POST',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            from: from,
            to: to,
        })

    });

    const query = await response.json();
    if (response.status !== 200) throw Error(query.message);
    return query;
}

export const addSettingsToDB = async function (type_settings, setting_name, temp_low_critical, temp_low_warn, temp_high_warn, temp_high_critical,
                                               ph_low_critical, ph_low_warn, ph_high_warn, ph_high_critical, nh3_warn,
                                               nh3_critical, temp_target, ph_target, nh3_target)
{
    (this.createNotificationController('info', Assets.settingsText, Assets.readingTitle))();

    const response = await fetch('/api/'+type_settings, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            users_id: 1,
            setting_name: setting_name,
            temp_low_critical: temp_low_critical,
            temp_low_warn: temp_low_warn,
            temp_high_warn: temp_high_warn,
            temp_high_critical: temp_high_critical,
            ph_low_critical: ph_low_critical,
            ph_low_warn: ph_low_warn,
            ph_high_warn: ph_high_warn,
            ph_high_critical: ph_high_critical,
            nh3_warn: nh3_warn,
            nh3_critical: nh3_critical,
            temp_target: temp_target,
            ph_target: ph_target,
            nh3_target: nh3_target,
        })
    });

    const body = await response.json()
        .then(() => {
            console.log('New setting has added successfully')
        })
        .catch(() => {
            console.log('There was an error in add new setting')

        })

};

export const selectUserParameters = async function (userId,settingName) {

    const response = await fetch('/api/user', {
        method: 'POST',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            userId: userId,
            settingName: settingName,
        })

    });

    const query = await response.json();
    if (response.status !== 200) throw Error(query.message);
    return query.data;
}

export const getSettings = async function () {


    const response = await fetch('/api/allsettings', {
        method: 'GET',
        headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }

    });

    const query = await response.json();

    if (response.status !== 200) throw Error(query.message);
    return query;
}
/**/