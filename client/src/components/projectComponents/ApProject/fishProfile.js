import React from 'react';
import github from "./Assets/UIHere.8acef598.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function FishProfile() {
    return <TemperatureAdvice />;
}
function TemperatureAdvice() {
    return (<div>
            <h4 className="reading-box">System Settings: Trout</h4>
            <Row>

                <Col lg={6}>
                    <img alt="Github icon"
                         className="fish-image"
                         src={github}/>


                </Col>


                <Col lg={6}>
                    <p className="reading-box text-left">Ideal temp: 12 Degrees<br/>
                        Ideal Ph: 7.3 <br/>
                        Ideal Ammonia: .0 </p>

                </Col>
                <Col lg={12}><p className="reading-box ">See our caring for <a href="#">trout</a> page.</p></Col>

            </Row>


        </div>


    );
}
export default TemperatureAdvice;