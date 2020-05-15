import github from "../../../images/UIHere.8acef598.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const FishProfile = (props) =>{
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (<div>
         
    <Row>
        <Col>
            <img alt="Github icon"
                 className="fish-image"
                 src={github}/>

            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    {props.fishParams.fish_name}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>Fish</DropdownItem>
                    <DropdownItem divider />

                    {
                        /*Loop through fish from DB*/
                        props.fish.map((fish, index) => {

                            return (
                                <DropdownItem onClick={()=>props.onChange(fish.id)}>{fish.fish_name}</DropdownItem>
                            )
                    })}

                </DropdownMenu>
            </Dropdown>
        </Col>
        
       
        <Col>
        <p className="reading-box text-left">Ideal temp: {props.fishParams.temp_target} Degrees<br/>
            Ideal Ph: {props.fishParams.ph_target} <br/>
            Ideal Ammonia: {props.fishParams.nh3_target} </p>
            
    </Col>
    
    </Row>
            <p className="reading-box ">See our caring for <a href="#">{props.fishParams.fish_name}</a> page.</p>
    
    </div>
    
    
    );
}
export default FishProfile;