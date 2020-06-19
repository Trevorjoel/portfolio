
import classes from '../FishProfile.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav} from 'reactstrap';
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from "react-router-dom";
import LoadingContainer from "../Loading/LoadingContainer";
// Test
const DropdownFish = (props) =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
                    <Dropdown  title="Change fish" isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle  style={{textTransform:"capitalize", margin: "0" }} className={classes.Background} caret>
                            {props.fishParams.fish_name}
                        </DropdownToggle>

                        <DropdownMenu >
                            <DropdownItem header><strong>Select Fish</strong></DropdownItem>
                            <DropdownItem divider />

                            {
                                /*Loop through fish from DB*/
                              props.allFish.map((fish, index) => {

                                    return (
                                        <DropdownItem  onClick={()=>props.onChange(fish.id)}>{fish.fish_name}</DropdownItem>
                                    )
                                })}
                            <DropdownItem divider />
                            <DropdownItem header><strong>Customise</strong></DropdownItem>

                            <DropdownItem  onClick={()=> console.log('CLICK!')}>Customise {props.fishParams.fish_name} alerts</DropdownItem>
                            <DropdownItem  onClick={()=> console.log('CLICK!')}>New customised alerts</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>









    );
}
export default DropdownFish;