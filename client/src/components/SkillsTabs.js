import React from 'react';
import {Col, Row} from 'reactstrap';
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import CertificationsModal from "./CertificationsModal";
// ICON IMAGES

const JSIcon = require('../images/technologies/Jsimages.resized.jpeg');
const reactIcon = require('../images/technologies/React.js_logo-512.resized.png');
const foundationIcon = require('../images/technologies/icon-zurb.resized.png');
const PSIcon = require('../images/technologies/Photoshop-CS-4-icon.resized.png');
const sassIcon = require('../images/technologies/sass-13-1175092.resized.png');
const nodeIcon = require('../images/technologies/node.resized.png');
const expressIcon = require('../images/technologies/Express-JS-min.resized.png');
const PHPIcon = require('../images/technologies/php-icon.resized.png');
const MYSQLIcon = require('../images/technologies/mysql-icon.resized.png');
const PYIcon = require('../images/technologies/Python_logo-512.resized.png');
const apacheIcon = require('../images/technologies/apache.resized.png');
const CIcon = require('../images/technologies/c-logo-icon-18.resized.png');
const javaIcon = require('../images/technologies/java-icon-png-15.jpg.resized.png');
const WP = require('../images/technologies/wordpress.png');

/*
*  todo:
* */

const SkillsTabs = () => {
    
    return (
        <div className="tabs-wrapper">
            <Container id="skills" className="skills-tab-container">
                <h1  className="experience-title">TOOLS & EXPERIENCE</h1>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} xl={7}
                         id="trigger-left"
                         data-aos-delay="100"
                         data-aos-duration="700"
                         data-aos="slide-right">
                        <h3
                            data-aos-anchor="#trigger-left" className="skills-subhead">Technology</h3>
                        
                        <Row  className="icons-wrapper">
                            <Col  xs={4} sm={3} md={2} lg={2} xl={2}
                                  id="trigger-left"
                                  data-aos-delay="200"
                                  data-aos-duration="700"
                                  data-aos="flip-up"
                                  data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/bm/docs/Web/JavaScript">
                                <Image className="skill-icons js-icon" src={JSIcon} rounded fluid/>
                                    <p className="icon-paragraph">JavaScript</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="300"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/">
                                <Image className="skill-icons react-icon" src={reactIcon} rounded fluid/>
                                    <p className="icon-paragraph">React.js</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="400"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left"><a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/about/">
                                <Image className="skill-icons react-icon" src={nodeIcon} rounded fluid/>
                                <p className="icon-paragraph">Node.js</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2} id="trigger-left"
                                 data-aos-delay="500"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left"><a target="_blank" rel="noopener noreferrer" href="https://expressjs.com/">
                                <Image className="skill-icons" src={expressIcon} fluid/>
                                <p className="icon-paragraph">Express</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="600"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.photoshop.com/">
                                <Image className="skill-icons" src={PSIcon} rounded fluid/>
                                    <p className="icon-paragraph">PhotoShop</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="700"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/">
                                <Image className="skill-icons react-icon" src={sassIcon} rounded fluid/>
                                    <p className="icon-paragraph">SASS</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="800"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://wordpress.com/">
                                <Image className="skill-icons react-icon" src={WP} rounded fluid/>
                                    <p className="icon-paragraph">WordPress</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="900"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.php.net/">
                                <Image className="skill-icons react-icon" src={PHPIcon} rounded fluid/>
                                    <p className="icon-paragraph">PHP</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1000"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/">
                                <Image className="skill-icons " src={MYSQLIcon} rounded fluid/>
                                    <p className="icon-paragraph">MySQL</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1100"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.python.org/">
                                <Image className="skill-icons react-icon" src={PYIcon} rounded fluid/>
                                    <p className="icon-paragraph">Python</p></a>
                            </Col>
                            
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1200"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://foundation.zurb.com/">
                                <Image className="skill-icons" src={foundationIcon} rounded fluid/>
                                    <p className="icon-paragraph">Foundation</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1300"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://httpd.apache.org/">
                                <Image className="skill-icons" src={apacheIcon} rounded fluid/>
                                    <p className="icon-paragraph">Apache</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1400"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/">
                                <Image className="skill-icons" src={CIcon} rounded fluid/>
                                    <p className="icon-paragraph">C#</p></a>
                            </Col>
                            <Col xs={4} sm={3} md={2} lg={2} xl={2}
                                 id="trigger-left"
                                 data-aos-delay="1500"
                                 data-aos-duration="700"
                                 data-aos="flip-up"
                                 data-aos-anchor="#trigger-left">
                                <a target="_blank" rel="noopener noreferrer" href="https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html">
                                <p className="icon-paragraph">
                                <Image className="skill-icons" src={javaIcon} rounded fluid/>
                                Java</p></a>
                            </Col>
                        </Row>
                    </Col>
                    <Col  id="trigger-certs" xs={12} sm={12} md={12} lg={4} xl={5}
                         
                          data-aos-delay="100"
                          data-aos-duration="700"
                          data-aos="slide-left"
                    >
                        <h3  className="skills-subhead"  >Certificates</h3>
                        <CertificationsModal
                           
                            buttonLabel={"Certifications"}
                        
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default SkillsTabs;