import trout from "../../../../images/troutPic.png";
import silverPerch from '../../../../images/silver_perchPic.png';
import barramundi from '../../../../images/barraPic.png';
import classes from './FishProfile.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav, Col} from 'reactstrap';
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from "react-router-dom";
import Logo from "../Assets/logos/logo-03.png";
import LoadingContainer from "../Loading/LoadingContainer";
import ComingSoon from "../Loading/ComingSoon";
// Test
const FishProfile = (props) =>{
    let fishImage;
    if(props.fishParams.id === 1) fishImage = trout
    if (props.fishParams.id === 2)
        fishImage = silverPerch;
    if (props.fishParams.id === 3)
        fishImage = barramundi;

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (<div className={classes.Container}>

            <div >
                <h3>Fish Stock</h3>
                {props.fishParams  ? <img
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    data-aos-duration="800"
                    alt={props.fishParams.fish_name}
                    className={classes.FishImage}
                    src={fishImage}/> : <LoadingContainer/>}


                <div>
                    <Dropdown   title="Change fish" isOpen={dropdownOpen} toggle={toggle}>

                        <DropdownToggle style={{textTransform:"capitalize"}} className={classes.Background} caret>
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
                            <DropdownItem header><strong>User settings</strong></DropdownItem>

                            <DropdownItem  onClick={()=> console.log('CLICK!')}>{props.fishParams.fish_name} Custom</DropdownItem>
                            <DropdownItem  onClick={()=> console.log('CLICK!')}>Trout & Silver Perch</DropdownItem>
                        </DropdownMenu>

                    </Dropdown>

                </div>

                  {/*  </Col>  <Col>
                    */}<br/><p style={{textAlign:"center", textTransform:"capitalize"}}>Ideal ranges for {props.fishParams.fish_name}</p>
                    <div className={classes.OptimalWrapper}>

                        <div style={{textAlign:"center", marginBottom:"5px"}} className="reading-box ">
                               <p style={{marginBottom:"0px"}}>{props.fishParams.temp_low_warn} - {props.fishParams.temp_high_warn} {String.fromCharCode(8451)}</p>
                               <p style={{marginBottom:"0px"}}>{props.fishParams.ph_low_warn} - {props.fishParams.ph_high_warn} pH</p>
                               <p style={{ marginBottom:"0px"}}> 0.0 - {props.fishParams.nh3_warn} NH<sub>3</sub> ppm</p>


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
                                activeClassName="" tag={RRNavLink} href="/" exact to="/sensors">See our caring for <a style={{textTransform:"capitalize"}} href="#">{props.fishParams.fish_name}</a> page.</p>
                        </Link>

                    </div>

                <br/>





            </div>


        </div>


    );
}
export default FishProfile;