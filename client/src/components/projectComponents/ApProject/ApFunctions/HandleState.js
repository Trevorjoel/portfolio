/*
* Handle state functionality
* */

// Reset settings to default of selected fish setting by param
export const resetTempSettings = function () {
    this.setState({
        tempSettingsUpdate: [this.state.systemParams.temp_low_critical,
            this.state.systemParams.temp_low_warn,
            this.state.systemParams.temp_high_warn,
            this.state.systemParams.temp_high_critical].slice(),
    })
};

export const resetPhSettings = function () {

    this.setState({
        phSettingsUpdate: [this.state.systemParams.ph_low_critical,
            this.state.systemParams.ph_low_warn,
            this.state.systemParams.ph_high_warn,
            this.state.systemParams.ph_high_critical].slice(),
    })

}
export const resetNh3Settings = function  () {

    this.setState({
        nh3SettingsUpdate: [this.state.systemParams.nh3_warn,
            this.state.systemParams.nh3_critical].slice(),
    })
}
// Reset settings to default of selected fish/usr all Just confirm
export const resetUserSettings = function () {
    this.setState({
        tempSettingsUpdate: [this.state.systemParams.temp_low_critical,
            this.state.systemParams.temp_low_warn,
            this.state.systemParams.temp_high_warn,
            this.state.systemParams.temp_high_critical].slice(),
        phSettingsUpdate: [this.state.systemParams.ph_low_critical,
            this.state.systemParams.ph_low_warn,
            this.state.systemParams.ph_high_warn,
            this.state.systemParams.ph_high_critical].slice(),
        nh3SettingsUpdate: [this.state.systemParams.nh3_warn,
            this.state.systemParams.nh3_critical].slice(),
    })
}
export const settingNameWriteToDB = function () {
    let setName ='';
    const checkCustom = this.state.fish.find(item => item.fish_name + '_custom' === this.state.fishSettingName);
// todo: extra function here to prevent "setting name_custom_custom".
    if (typeof checkCustom === 'undefined') {
        setName = this.state.fishSettingName + '_custom';
    } else {
        setName = this.state.fishSettingName;
    }

    return setName;
}

export const saveTempSettings = function () {
    if (JSON.stringify(this.state.tempSettingsUpdate) !== JSON.stringify(this.state.tempSettingsValue))
    {
        this.addSettingsToDB('addtempsettings', this.settingNameWriteToDB(), this.state.tempSettingsUpdate[0], this.state.tempSettingsUpdate[1],
            this.state.tempSettingsUpdate[2], this.state.tempSettingsUpdate[3], this.state.phSettingsValue[0],
            this.state.phSettingsValue[1], this.state.phSettingsValue[2], this.state.phSettingsValue[3],
            this.state.nh3SettingsValue[0], this.state.nh3SettingsValue[1], this.state.tempValue[0],
            this.state.phValue[0], this.state.nh3Value[0]);

        this.setState({
            tempSettingsValue: this.state.tempSettingsUpdate.slice(),
        })
        console.log('save temperature settings ');
        this.mapSettings(this.getSettings);
    }
}

export const savePhSettings = function (){
    if (JSON.stringify(this.state.phSettingsUpdate) !== JSON.stringify(this.state.phSettingsValue)) {
        this.addSettingsToDB('addphpsettings', this.settingNameWriteToDB(), this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
            this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsUpdate[0],
            this.state.phSettingsUpdate[1], this.state.phSettingsUpdate[2], this.state.phSettingsUpdate[3],
            this.state.nh3SettingsValue[0], this.state.nh3SettingsValue[1], this.state.tempValue[0],
            this.state.phValue[0], this.state.nh3Value[0]);

        this.setState({
            phSettingsValue: this.state.phSettingsUpdate.slice(),
        })
        this.mapSettings(this.getSettings);
    }
}

export const saveNh3Settings = function () {
    if (JSON.stringify(this.state.nh3SettingsUpdate) !== JSON.stringify(this.state.nh3SettingsValue)) {
        this.addSettingsToDB('addnh3psettings', this.settingNameWriteToDB(), this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
            this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsValue[0],
            this.state.phSettingsValue[1], this.state.phSettingsValue[2], this.state.phSettingsValue[3],
            this.state.nh3SettingsUpdate[0], this.state.nh3SettingsUpdate[1], this.state.tempValue[0],
            this.state.phValue[0], this.state.nh3Value[0]);

        this.setState({
            nh3SettingsValue: this.state.nh3SettingsUpdate.slice(),
        })
        this.mapSettings(this.getSettings);
    }
}

export const saveUserSettings = function (){
    if (this.state.settingName !== '' && this.state.settingName !== 'default_settings') {
        this.addSettingsToDB('addsettings', this.state.settingName, this.state.tempSettingsUpdate[0], this.state.tempSettingsUpdate[1],
            this.state.tempSettingsUpdate[2], this.state.tempSettingsUpdate[3], this.state.phSettingsUpdate[0],
            this.state.phSettingsUpdate[1], this.state.phSettingsUpdate[2], this.state.phSettingsUpdate[3],
            this.state.nh3SettingsUpdate[0], this.state.nh3SettingsUpdate[1], this.state.tempValue[0],
            this.state.phValue[0], this.state.nh3Value[0]);

        this.setState({
            tempSettingsValue: this.state.tempSettingsUpdate.slice(),
            phSettingsValue: this.state.phSettingsUpdate.slice(),
            nh3SettingsValue: this.state.nh3SettingsUpdate.slice(),
        })

        this.form && this.form.reset();
    }
}

export const updateAllStateForView = function (returnedData){
    if(returnedData.fish_name){
        this.setState({fishSettingName: returnedData.fish_name,
            setCustom: false})
    }else {
        this.setState({fishSettingName: returnedData.setting_name,
            setCustom: true})
    }
    this.setState({
        systemParams: returnedData,

        // Set state here
        tempSettingsValue: [returnedData.temp_low_critical,
            returnedData.temp_low_warn,
            returnedData.temp_high_warn,
            returnedData.temp_high_critical].slice(),
        tempSettingsUpdate: [returnedData.temp_low_critical,
            returnedData.temp_low_warn,
            returnedData.temp_high_warn,
            returnedData.temp_high_critical].slice(),
        phSettingsValue: [returnedData.ph_low_critical,
            returnedData.ph_low_warn,
            returnedData.ph_high_warn,
            returnedData.ph_high_critical].slice(),
        phSettingsUpdate: [returnedData.ph_low_critical,
            returnedData.ph_low_warn,
            returnedData.ph_high_warn,
            returnedData.ph_high_critical].slice(),
        nh3SettingsValue: [returnedData.nh3_warn,
            returnedData.nh3_critical].slice(),
        nh3SettingsUpdate: [returnedData.nh3_warn,
            returnedData.nh3_critical].slice(),
        tempValue: [this.setTarget(returnedData.temp_low_warn, returnedData.temp_high_warn)].slice(),
        tempUpdate: [this.setTarget(returnedData.temp_low_warn, returnedData.temp_high_warn)].slice(),
        phValue: [this.setTarget(returnedData.ph_low_warn, returnedData.ph_high_warn)].slice(),
        phUpdate: [this.setTarget(returnedData.ph_low_warn, returnedData.ph_high_warn)].slice(),
        nh3Value: [returnedData.nh3_target].slice(),
        nh3Update: [returnedData.nh3_target].slice(),
        tempDomain: [returnedData.temp_low_critical,
            returnedData.temp_high_critical].slice(),
    })
}
