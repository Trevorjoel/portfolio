import React, {Component} from 'react';
import {Parallax} from 'react-parallax';
import {Col, Row} from "reactstrap";
import Image from "react-bootstrap/Image";
import portrait from "../images/Artboard8.png";
import {CSSTransition} from "react-transition-group";


class Header extends Component {
    render() {
        const duration = "4000";
        return (
            <Parallax bgImage={require('../images/kyle-sung-oQuP_XBjOMY-unsplash3.jpg')} className="App-header"
                      strength={500}>
                
                <Row>
                    
                    <Col sm={12} md={6} lg={6} xl={6} className="">
                        <div className="img-parent">
                            <Image className=""  data-aos="zoom-in-down"
                                   
                                   data-aos-duration="2000"
                                  
                                   src={portrait} roundedCircle fluid alt="Trevor"/>
                        </div>
                        {/*< h1 id="introduction" className="introduction-head">Welcome</h1>*/}
                    </Col>
                    
                    <Col sm={12} md={6} lg={6} xl={5}>
                       
                        <h1 key='name-text' className="site-title " data-aos="fade-left"
                            data-aos-duration="3000">TREVOR <br/>GARRITY</h1>
                     
                        <p data-aos="fade-up"
                           data-aos-duration="3000"
                           className="text-on-primary intro-paragraph">
                            Full-stack web developer with a flair <br/>for the JavaScript stack.<br/>
                        
                        </p>
                        
                    </Col>
                </Row>
            </Parallax>
        
        );
    }
}

export default Header;