import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import {Col, Row} from "reactstrap";
import Image from "react-bootstrap/Image";
import portrait from "../images/Artboard8.png";


class Header extends Component {
    
    
    render() {
        return (
            <Parallax bgImage={require('../images/kyle-sung-oQuP_XBjOMY-unsplash3.jpg')} className="App-header"
                      strength={500}>
                
                <Row>
                    
                    <Col sm={12} md={6} lg={6} xl={6} className="">
                        <div className="img-parent">
                            <Image className="" src={portrait} roundedCircle fluid alt="Trevor"/>
                        </div>
                        {/*< h1 id="introduction" className="introduction-head">Welcome</h1>*/}
                    </Col>
                    
                    <Col sm={12} md={6} lg={6} xl={5}>
                        <h1 className="site-title">TREVOR <br/>GARRITY</h1>
                        
                        <p className="text-on-primary intro-paragraph">
                            Full-stack web developer with a flair <br/>for the JavaScript stack.<br/>
                        
                        </p>
                    
                    </Col>
                </Row>
            </Parallax>
        
        );
    }
}

export default Header;