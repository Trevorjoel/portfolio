import classes from './SettingsContainer.module.css'

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
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {isNumber} from "recharts/lib/util/DataUtils";
import {isNumeric} from "echarts/src/util/number";

class SettingsCustom extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            tempLowCrit: "?",
            tempLowWarn: "?",
            tempTarget: "?",
            tempHighWarn: "?",
            tempHighCrit: "?",

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delayData = this.delayData.bind(this);

    }

    handleChange(event) {    this.setState({
        [event.target.name] : event.target.value
    });  }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
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
                    })
                }
                 }, 1000)

}


    render() {

        return (
            <div className={classes.Container}>
                <h2 >Change Alert Settings</h2>
                <h3>Change Alerts for (current Fish)</h3>

                 <form onSubmit={this.handleSubmit}>
                <Row >
                    <Col lg={4}>
                        <h4>Temperature</h4>

                <label>
                    <p className={classes.Critical}>Low Critical </p>
                    <input cols="3" min="0" max="35" step=".5" type="range" name={'tempLowCrit'} value={this.state.tempLowCrit} onChange={this.handleChange} />
                    <p></p><p><strong>{this.state.tempLowCrit}</strong></p> </label>
                        {console.log(this.props.readings.fishParams.temp_low_critical)}
                        <label>
                            <p className={classes.Advice}>Low Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" name={'tempLowWarn'}value={this.state.tempLowWarn} onChange={this.handleChange} />
                            <p><strong>{this.state.tempLowWarn}</strong></p> </label>
                        <label>
                            <p className={classes.Optimal}>Target</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                        <label>
                            <p className={classes.Advice}>High Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>

                        <label>
                            <p className={classes.Critical}>High Critical</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                    </Col>
                    <Col lg={4}>
                        <h4>pH</h4>
                        <label>
                            <p className={classes.Critical}>Low Critical</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>

                        <label>
                            <p className={classes.Advice}>Low Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                        <label>
                            <p className={classes.Optimal}>Target</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                        <label>
                            <p className={classes.Advice}>High Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>

                        <label>
                            <p className={classes.Critical}>High Critical</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                    </Col>
                    <Col lg={4}>
                        <h4>Ammonia</h4>
                        <label>
                            <p className={classes.Critical}>Low Critical</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>

                        <label>
                            <p className={classes.Advice}>Low Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                        <label>
                            <p className={classes.Optimal}>Target</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                        <label>
                            <p className={classes.Advice}>High Advice</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>

                        <label>
                            <p className={classes.Critical}>High Critical</p>
                            <input cols="3" min="0" max="35" step=".5" type="range" value={this.state.value} onChange={this.handleChange} />
                            <p>{this.state.value}</p> </label>
                    </Col>

                    <br/>

                </Row>
<Row>
    <Col>
        <Button onClick={this.delayData}>Restore default fish settings</Button>

    </Col>
    <Col>
        <input type="submit" value="Submit" />
    </Col>
</Row>

            </form>

            </div>
        );
    }

}
export default SettingsCustom;