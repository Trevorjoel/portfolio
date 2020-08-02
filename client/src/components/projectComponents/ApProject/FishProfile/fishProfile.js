import trout from "../Assets/troutPic.png";
import silverPerch from '../Assets/silver_perchPic.png';
import barramundi from '../Assets/barraPic.png';
import custom from '../Assets/pinpng.com-great-white-shark-png-686944.png'
import classes from './FishProfile.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav, Col} from 'reactstrap';
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from "react-router-dom";
import Logo from "../Assets/logos/logo-03.png";
import LoadingContainer from "../Loading/LoadingContainer";
import ComingSoon from "../Loading/ComingSoon";
import FishSwitch from "../FishThumb/FishSwitch";
// Test
const FishProfile = (props) =>{ // todo: write a decent function for image swap

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (<div className={classes.Container}>

            <div >
                <h3>Fish Stock</h3>


                    <FishSwitch
                        selectedName={props.selectedName}
                        viewParams={props.viewParams}
                        size={250}
                                />
                <div>
                    <Dropdown   title="Change fish" isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle style={{textTransform:"capitalize"}} className={classes.Background} caret>
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
                            <DropdownItem header><strong>User settings</strong></DropdownItem>
                            {
                                /*Loop through settings from DB*/
                                props.allSettings.map((setting, index) => {

                                    return (
                                        <DropdownItem onClick={()=>props.onSettingsChange(setting.setting_name)}>{setting.setting_name}  </DropdownItem>
                                    )
                            })}
                        </DropdownMenu>

                    </Dropdown>

                </div>

                  {/*  </Col>  <Col>
                    */}<br/><p style={{textAlign:"center", textTransform:"capitalize"}}>Ideal ranges for {props.viewParams.fish_name}</p>
                    <div className={classes.OptimalWrapper}>

                        <div style={{textAlign:"center", marginBottom:"5px"}} className="reading-box ">
                               <p style={{marginBottom:"0px"}}>{props.viewParams.temp_low_warn} - {props.viewParams.temp_high_warn} {String.fromCharCode(8451)}</p>
                               <p style={{marginBottom:"0px"}}>{props.viewParams.ph_low_warn} - {props.viewParams.ph_high_warn} pH</p>
                               <p style={{ marginBottom:"0px"}}> 0.0 - {props.viewParams.nh3_warn} NH<sub>3</sub> ppm</p>


                        </div>
                        <Link
                            exact
                            activeClass=""
                            to="advice"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <p
                                activeClassName="" tag={RRNavLink} href="/" exact to="/sensors">See our caring for <a style={{textTransform:"capitalize"}} href="#">{props.viewParams.fish_name}</a> page.</p>
                        </Link>

                    </div>

                <br/>





            </div>


        </div>


    );
}
export default FishProfile;