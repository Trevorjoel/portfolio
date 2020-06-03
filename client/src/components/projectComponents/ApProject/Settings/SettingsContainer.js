/*
 todo: Create forms for customising alerts.
  1)    Customise entirely new parameters, example case: user has multiple fish, needs to create all new alerts.
        Note: Adds a row to the settings table, must have input field for name. These "user customised" settings must be available in the select fish dropdown
  2)    Customise current fish alerts. Example case: User keeps selected fish but needs to change some fish parameters.
        Fields for the params: 5- temp, 5 -ph, 3 for nh3
  3)    Customise current param alerts. Example case: user clicks through from the "system parameter" accordion
        and just wants to modify one single probes alert ranges.  Fields for the params: depending on probe selected
        Notes: Default value entered into fields from the database

*/
import React, {useState} from "react";
import classes from './SettingsContainer.module.css'
import SettingsTemp from './SettingsTemp'
import {isNumeric} from "echarts/src/util/number";;

class SettingsCustom extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            tempLowCrit: 0,
            tempLowWarn: 0,
            tempTarget: 0,
            tempHighWarn: 0,
            tempHighCrit: 0,

        };
        this.delayData = this.delayData.bind(this);
    }
/*
*  The following handle change pattern is something to remember
* */
    handleChange(event) {    this.setState({
        [event.target.name] : event.target.value
    });  }

    handleSubmit(event) {
        alert('Smash this into the BD TempLowCrit: ' + this.state.tempLowCrit);
        event.preventDefault();
    }


 componentDidMount(){

        console.log('ComponentMounted')
        console.log(this.props.readings.fishParams.temp_low_critical)
     this.delayData()
    }

delayData(){
            setTimeout(() => {

                if (this.props.readings.fishParams.temp_low_critical === undefined) {

                    console.log('Undefined');
                } else if(isNumeric(this.props.readings.fishParams.temp_low_critical)) {

                    this.setState({
                        tempLowCrit: this.props.readings.fishParams.temp_low_critical,
                        tempLowWarn: this.props.readings.fishParams.temp_low_warn,
                        tempTarget: this.props.readings.fishParams.temp_target,
                        tempHighWarn: this.props.readings.fishParams.temp_high_warn,
                        tempHighCrit: this.props.readings.fishParams.temp_high_critical,
                        fishName: this.props.readings.fishParams.fish_name
                    })
                }
                 }, 1000)

}


    render() {

        return (
            <div className={classes.Container}>
                <h2 >Change Alert Settings</h2>
                <h3>Change Alerts for {this.state.fishName}</h3>
                <h3>Temperature</h3>
<SettingsTemp lowCrit={this.state.tempLowCrit}
              lowWarn={this.state.tempLowWarn}
              highWarn={this.state.tempHighWarn}
              highCrit={this.state.tempHighCrit}

/>

            </div>
        );
    }

}
export default SettingsCustom;