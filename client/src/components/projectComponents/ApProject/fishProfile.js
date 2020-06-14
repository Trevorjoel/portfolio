import trout from "../../../images/troutPic.png";
import silverPerch from '../../../images/silver_perchPic.png';
import barramundi from '../../../images/barraPic.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './FishProfile.module.scss';
import React, { useState } from 'react';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem, NavLink, Nav} from 'reactstrap';
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from "react-router-dom";
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
               {/* <Row>
                    <Col>*/}
                <h4>{props.fishParams.fish_name}</h4>
                    <img
                        data-aos="fade-right"
                        data-aos-delay="1000"
                        data-aos-duration="800"
                        alt={props.fishParams.fish_name}
                         className={classes.FishImage}
                         src={fishImage}/>
                  {/*  </Col>  <Col>
                    */}<br/><h4>Target ranges:</h4>
                    <div className={classes.OptimalWrapper}>

                        <p style={{textAlign:"center"}} className="reading-box ">

                           <Row
                               >
                                <Col>
                                    <strong data-aos="fade-down"
                                            data-aos-delay="0"
                                            data-aos-duration="300"> {props.fishParams.temp_low_warn} - {props.fishParams.temp_high_warn}</strong> {String.fromCharCode(8451)}<br/>
                              </Col>
                                <Col>
                                    <strong>{props.fishParams.ph_low_warn} - {props.fishParams.ph_high_warn}</strong> pH<br/>
                               </Col>
                                <Col>
                                    <strong> 0.0 - {props.fishParams.nh3_warn} </strong>NH<sub>3</sub> ppm<br/>
                               </Col>
                            </Row>
                        </p>

                    </div>
                <div>
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
                            activeClassName="" tag={RRNavLink} href="/" exact to="/sensors">See our caring for <a href="#">{props.fishParams.fish_name}</a> page.</p>
                    </Link>
                </div>
                <br/>





            </div>
            <Dropdown   title="Change fish" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle className={classes.Background} caret>
                    Choose Fish stock
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

        </div>


    );
}
export default FishProfile;