import React from 'react';
import github from "../../../images/UIHere.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function FishProfile() {
    return <Headline />;
}
function Headline() {
    const fish = 'Fish Profile';
    return (<div>
         
    <Row>
        <Col>
            <img alt="Github icon"
                 className="fish-image"
                 src={github}/>
            <p className="reading-box">Trout</p>
        </Col>
        
       
        <Col>
        <p className="reading-box text-left">Ideal temp: 12 Degrees<br/>
            Ideal Ph: 7.3 <br/>
            Ideal Ammonia: .0 </p>
            
    </Col>
    
    </Row>
            <p className="reading-box ">See our caring for <a href="#">trout</a> page.</p>
    
    </div>
    
    
    );
}
export default FishProfile;