import React, {Component} from "react";
import {Tab, Tabs} from "react-bootstrap";
import classes from "../ApProjectContainer.module.scss";
import FishSwitch from "../FishThumb/FishSwitch";
import SettingsTemp from "./SettingsTemp";
import SettingsPh from "./SettingsPh";
import SettingsNh3 from "./SettingsNh3";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {Button, Col} from "reactstrap";
import {getSettings} from "../ApFunctions/apFunctions";

class SettingsContainer extends Component{
    constructor(props) {
        super(props);
        this.state={

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

    render() {
        return(
            <Tabs className={classes.TabContainer} Key="customise-current" id="custom-tab">

                <Tab eventKey="customise-current" title="Current Fish"
                     style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                    <br/>
                    <h5>{this.props.fishSettingName}</h5>
                    <FishSwitch
                        selectedName={this.props.fishSettingName}
                        size={150}
                    />

                    <br/>
                   <SettingsTemp
                        vertical={true}
                        onChange={(value)=> this.props.handleChange('tempSettingsUpdate', value )}
                        updates={this.props.tempUpdate}
                        mindomain={this.props.minDomain}
                        maxdomain={this.props.maxDomain}
                        reset={this.props.resetTemp}
                        save={this.props.saveTempSettings}
                        renderButtons={true}

                    />

                <SettingsPh
                    onChange={(value)=>this.props.handleChange('phSettingsUpdate', value )}
                           updates={this.props.phUpdate}
                           reset={this.resetPhSettings}
                           save={this.savePhSettings}
                           renderButtons={true}
                       />
                    <SettingsNh3
                           onChange={(value)=>this.props.handleChange('nh3SettingsUpdate', value )}
                           updates={this.props.nh3Update}
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
                        <SettingsTemp
                            //onUpdate={this.onTempSettingsUpdate}
                            vertical={true}
                            onChange={(value)=> this.props.handleChange('tempSettingsUpdate', value )}
                            updates={this.props.tempUpdate}
                            mindomain={this.props.minDomain}
                            maxdomain={this.props.maxDomain}
                            reset={this.resetTempSettings}
                            save={()=> this.saveTempSettings(this.state.settingName)}
                            renderButtons={false}
                        />
                        <SettingsPh
                            onChange={(value)=>this.props.handleChange('phSettingsUpdate', value )}
                            updates={this.props.phUpdate}

                            renderButtons={false}
                        />
                        <SettingsNh3
                            onChange={(value)=>this.props.handleChange('nh3SettingsUpdate', value )}
                            updates={this.props.nh3Update}
                            renderButtons={false}
                        />
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