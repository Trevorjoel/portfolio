
import classes from './DateRange.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav} from 'reactstrap';

const DropdownFish = (props) =>{

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
                    <Dropdown  title="Change fish" isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle  style={{textTransform:"capitalize", margin: "0" }} className={classes.Button} caret>
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
                            <DropdownItem header><strong>User Settings</strong></DropdownItem>

                            <DropdownItem  onClick={()=> console.log('CLICK!')}>{props.fishParams.fish_name} Custom</DropdownItem>
                            <DropdownItem  onClick={()=> console.log('CLICK!')}>Trout & Silver Perch</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>









    );
}
export default DropdownFish;