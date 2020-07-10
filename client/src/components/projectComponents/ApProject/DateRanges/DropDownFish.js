
import classes from './DateRange.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav} from 'reactstrap';

const DropdownFish = (props) =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
                    <Dropdown  title="Change fish" isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle  style={{textTransform:"capitalize", margin: "0" }} className={classes.Button} caret>
                            {props.selectedName}
                        </DropdownToggle>

                        <DropdownMenu >
                            <DropdownItem header><strong>Select Fish</strong></DropdownItem>
                            <DropdownItem divider />

                            {
                                /*Loop through fish from DB*/
                              props.allFish.map((fish, index) => {

                                    return (
                                        <DropdownItem  onClick={()=>props.onFishChange(fish.id)}>{fish.fish_name}</DropdownItem>
                                    )
                                })}
                            <DropdownItem divider />
                            <DropdownItem header><strong>User Settings</strong></DropdownItem>
                            {
                                /*Loop through settings from DB*/
                                props.allSettings.map((setting, index) => {

                                    return (
                                        <DropdownItem onClick={()=>props.onSettingsChange(setting.setting_name)}>{setting.setting_name}</DropdownItem>
                                    )
                            })}
                        </DropdownMenu>

                    </Dropdown>









    );
}
export default DropdownFish;