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
    if(props.fishParams.id === 1){
        fishImage = trout

    }
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
                    <img alt="Github icon"
                         className={classes.FishImage}
                         src={fishImage}/>
                  {/*  </Col>  <Col>
                    */}<br/><h4>Target ranges:</h4>
                    <div className={classes.OptimalWrapper}>

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
                <p className="reading-box ">See our caring for <a href="#">{props.fishParams.fish_name}</a> page.</p>

                <br/>





            </div>
            <Dropdown title="Change fish" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    Choose Fish stock
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Fish</DropdownItem>
                    <DropdownItem divider />

                    {
                        /*Loop through fish from DB*/
                        props.allFish.map((fish, index) => {

                            return (
                                <DropdownItem  onClick={()=>props.onChange(fish.id)}>{fish.fish_name}</DropdownItem>
                            )
                        })}

                </DropdownMenu>
            </Dropdown>

        </div>


    );
}
export default FishProfile;