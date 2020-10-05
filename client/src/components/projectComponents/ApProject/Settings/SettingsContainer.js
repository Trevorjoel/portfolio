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
import LoadingContainer from "../Loading/LoadingContainer";

class SettingsContainer extends Component{
    constructor(props) {
        super(props);
        this.state={
            tempSettingsUpdate: null,
            phSettingsUpdate: null,
            nh3SettingsUpdate: null,

        };
    }
    checkIfUsrCustom =()=>{
        let setName;
        let containsCustom = this.props.fishSettingName.includes("_custom")

// todo: extra function here to prevent "setting name_custom_custom".
        // containsCustom : false
        // setCustom:  true
        if (this.props.setCustom === false && containsCustom === false ||
            this.props.setCustom === true && containsCustom === true ) {
            return true;
        }else{

            return false;
        }

    }
    componentDidMount() {

        this.setState({
            tempSettingsUpdate: this.props.tempUpdate,
            phSettingsUpdate: this.props.phUpdate,
            nh3SettingsUpdate: this.props.nh3Update,
            tempDomain: [this.props.minDomain, this.props.maxDomain],
            disabledButtonMsg:""
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
                    {this.checkIfUsrCustom() === true ? null :<p style={{color: "red"}}>
                        * Modifying user customisation parameters not available in the demo.</p>}
                    <br/>
                    <p>{this.state.disabledButtonMsg}</p>
                   <SettingsTemp
                        vertical={true}
                        onChange={(value)=> this.props.handleChange('tempSettingsUpdate', value )}
                        updates={this.props.tempUpdate}
                        mindomain={this.props.minDomain}
                        maxdomain={this.props.maxDomain}
                        reset={this.props.resetTempSettings}
                        save={this.props.saveTempSettings}
                        renderButtons={this.checkIfUsrCustom()}

                    />
                    <SettingsPh
                        onChange={(value)=>this.props.handleChange('phSettingsUpdate', value )}
                        updates={this.props.phUpdate}
                        reset={this.props.resetPhSettings}
                        save={this.props.savePhSettings}
                        renderButtons={this.checkIfUsrCustom()}
                    />
                    <SettingsNh3
                           onChange={(value)=>this.props.handleChange('nh3SettingsUpdate', value )}
                           updates={this.props.nh3Update}
                           reset={this.props.resetNh3Settings}
                           save={this.props.saveNh3Settings}
                           renderButtons={this.checkIfUsrCustom()}
                    />

                </Tab>
                <Tab eventKey="Create New" title="New Customisation"
                     style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                    <br/>
                    <h5>Create new customisation</h5>

                    <br/>
                    <AvForm
                        onValidSubmit={this.props.handleValidSubmit}
                        onInvalidSubmit={this.props.handleInvalidSubmit}
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
                                 onChange={this.props.handleSettingNameChange}
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
                        this.props.resetUserSettings();
                    }} type="submit">Reset All</Button>



                </Tab>

            </Tabs>
        )
    }

}
export default SettingsContainer;