import trout from "../../../images/UIHere.8acef598.png";
import silverPerch from './Assets/output-onlinepngtools.png';
import barramundi from './Assets/barra.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './FishProfile.module.css';
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                <h3 style={{textTransform:"capitalize"}} >{props.fishParams.fish_name}</h3>
                    <img title="Fish stock" alt="Github icon"
                         className={classes.FishImage}
                         src={fishImage}/>
                  {/*  </Col>  <Col>
                    */}<br/><h4>Target ranges:</h4>
                    <div title="Optimal ranges for stocked fish" className={classes.OptimalWrapper}>

                        <p style={{textAlign:"center"}} className="reading-box ">
                           <Row>
                                <Col>
                                    <strong> {props.fishParams.temp_low_warn} - {props.fishParams.temp_high_warn}</strong> {String.fromCharCode(8451)}<br/>
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
                {/*</Col>
                </Row>*/}
                <p className="reading-box" title="Information about stocked fish">See our caring for <a style={{textTransform:"capitalize"}} href="#">{props.fishParams.fish_name}</a> page.</p>

            </div>
            <Dropdown title="Change stocked fish" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Choose Fish stock
                </DropdownToggle>
                <DropdownMenu>
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
                    <DropdownItem header><strong>Customise Alert levels</strong></DropdownItem>

                    <DropdownItem  onClick={()=> console.log('CLICK!')}>Customise {props.fishParams.fish_name} alerts</DropdownItem>
                    <DropdownItem  onClick={()=> console.log('CLICK!')}>Set new parameters</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </div>


    );
}
export default FishProfile;