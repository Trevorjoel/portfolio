import React, {Component} from "react";
import {Tab, Tabs} from "react-bootstrap";
import classes from "../ApProjectContainer.module.scss";
import FishThumb from "../FishThumb/FishThumb";
import SettingsTemp from "./SettingsTemp";
import SettingsPh from "./SettingsPh";
import SettingsNh3 from "./SettingsNh3";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Button} from "reactstrap";
import {getSettings} from "../ApFunctions/apFunctions";

class SettingsContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            // Settings sliders controlled components
            tempSettingsUpdate: [],
            tempSettingsValue: [],
            phSettingsUpdate: [0,0,0,0],
            phSettingsValue: [],
            nh3SettingsUpdate: [0,0,0,0],
            nh3SettingsValue: [],
            userParams: null,
            tempDomain: [],
            userTempValue: [],
            userPhValue: [],
            userNh3Value: [],
            userTempUpdate: [],
            userPhUpdate: [],
            userNh3Update: [],
            userTempSettingsUpdate: [],
            userTempSettingsValue: [],
            userPhSettingsUpdate: [],
            userPhSettingsValue: [],
            userNh3SettingsUpdate: [],
            userNh3SettingsValue: [],
            settingName: '',
            settings: [],
            fishParams:null

        }
    }

componentDidMount() {

    this.setState({
        nh3SettingsUpdate: this.props.nh3Update,
        tempSettingsUpdate: this.props.tempUpdate,
        phSettingsUpdate: this.props.phUpdate,
        tempDomain: [this.props.minDomain, this.props.maxDomain]

    })
}
    onTempSettingsChange = tempSettingsUpdate => {
        this.setState({tempSettingsUpdate})
    };

    onPhSettingsChange = phSettingsUpdate => {
        this.setState({phSettingsUpdate})
    };

    onNh3SettingsChange = nh3SettingsUpdate => {
        this.setState({nh3SettingsUpdate})
    };

    onUserTempSettingsChange = userTempSettingsUpdate => {
        this.setState({userTempSettingsUpdate})
    };

    onUserPhSettingsChange = userPhSettingsUpdate => {
        this.setState({userPhSettingsUpdate})
    };

    onUserNh3SettingsChange = userNh3SettingsUpdate => {
        this.setState({userNh3SettingsUpdate})
    };
    myChangeHandler = (name, value) => {
console.log('Running ' + value)
        this.setState({[name]: value});
    }
    render() {
        return(
            <Tabs className={classes.TabContainer} Key="customise-current" id="custom-tab">

                <Tab eventKey="customise-current" title="Current Fish"
                     style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                    <br/>
                    <h5>{this.props.fishSettingName}</h5>
                    <FishThumb fishParams={this.props.systemParams} />

                    <br/>
                   <SettingsTemp
                        vertical={true}
                        name={this.state.tempSettingsUpdate}
                        onChange={(value)=>this.myChangeHandler('tempSettingsUpdate', value )}
                        updates={this.state.tempSettingsUpdate}
                        mindomain={this.props.minDomain}
                        maxdomain={this.props.maxDomain}
                        reset={this.resetTempSettings}
                        save={this.saveTempSettings}
                        renderButtons={true}
                        name={'tempSettingsUpdate'}
                    />

                <SettingsPh
                    onChange={(value)=>this.myChangeHandler('phSettingsUpdate', value )}
                           updates={this.state.phSettingsUpdate}
                           reset={this.resetPhSettings}
                           save={this.savePhSettings}
                           renderButtons={true}
                       />
                    {console.log(this.state.tempSettingsUpdate)}
                    {console.log(this.state.phSettingsUpdate)}
                    <SettingsNh3
                           onChange={this.onNh3SettingsChange}
                           updates={this.state.nh3SettingsUpdate}
                           reset={this.resetNh3Settings}
                           save={this.saveNh3Settings}
                           renderButtons={true}
                       />

                </Tab>
                <Tab eventKey="Create New" title="New Customisation"
                     style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                    <br/>
                    <h5>Create new customisation</h5>

                    <br/>
                    <AvForm
                        onValidSubmit={this.handleValidSubmit}
                        onInvalidSubmit={this.handleInvalidSubmit}
                        ref={c => (this.form = c)}
                    >

                        <br/>
                        {/*<SettingsTemp
                            //onUpdate={this.onTempSettingsUpdate}
                            vertical={true}
                            onChange={this.onUserTempSettingsChange}
                            mindomain={this.props.systemParams.temp_low_critical}
                            maxdomain={this.props.systemParams.temp_high_critical}
                            updates={this.state.userTempSettingsUpdate}
                            renderButtons={false}
                        />
                        <SettingsPh
                            onChange={this.onUserPhSettingsChange}
                            updates={this.state.userPhSettingsUpdate}
                            renderButtons={false}
                        />
                        <SettingsNh3
                            onChange={this.onUserNh3SettingsChange}
                            updates={this.state.userNh3SettingsUpdate}
                            renderButtons={false}
                        />*/}
                        <label htmlFor="fname">Setting Name:</label><br/>
                        <AvField style={{width:"200px", margin:"auto"}} type="text" id="fname" name="fname"
                                 onChange={this.handleSettingNameChange}
                                 value={this.state.settingName}
                                 validate={{
                                     required: {value: true, errorMessage: 'Please enter a setting name'},
                                     pattern: {
                                         value: '/^[a-zA-Z0-9_]+$/',
                                         errorMessage: 'Your setting must be composed only with letters or numbers or _'
                                     },
                                     minLength: {
                                         value: 5,
                                         errorMessage: 'Your setting name must be between 5 and 30 characters'
                                     },
                                     maxLength: {
                                         value: 30,
                                         errorMessage: 'Your setting name must be between 5 and 30 characters'
                                     }
                                 }}
                        />
                        <Button className={classes.ButtonEnter} style={{margin: "10px 2%"}} type="submit">Enter All</Button>
                    </AvForm>
                    <Button  className={classes.ButtonReset} style={{margin: "10px 2%"}} onClick={()=>{
                        this.resetUserSettings();
                    }} type="submit">Reset All</Button>



                </Tab>

            </Tabs>
        )
    }

}
export default SettingsContainer;