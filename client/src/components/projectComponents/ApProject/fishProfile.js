import React from 'react';
import github from "../../../images/UIHere.8acef598.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FishProfile = (props) =>{
    return (<div>

    <Row>
        <Col>
            <img alt="Github icon"
                 className="fish-image"
                 src={github}/>
            <p className="reading-box">{props.fishParams.fish_name}</p>

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