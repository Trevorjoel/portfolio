import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
// ICON IMAGES
const htmlIcon = require('../images/technologies/html5-512.resized.png');
const cssIcon = require('../images/technologies/logo-2582747_960_720.resized.png');
const JSIcon = require('../images/technologies/Jsimages.resized.jpeg');
const reactIcon = require('../images/technologies/React.js_logo-512.resized.png');
const bootstrapIcon = require('../images/technologies/bootstrap-png-bootstrap-512.resized.png');
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
// CERT IMAGES
const pyCert = require('../images/technologies/py_cert.resized.jpg');
const WPCert = require('../images/technologies/wordpress-cusomisation-cert.jpg');
const WPPlugCert = require('../images/technologies/WP_plugins_cert.jpg');
const WebDesCert = require('../images/technologies/web_design_cert.resized.jpg');
class SkillsTabs extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return(
            <div>
                <Nav tabs>
            
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            <h2 className="tab-title">Front-end</h2>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            <h2 className="tab-title">Back-end</h2>
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}>
                            <h2 className="tab-title">Education</h2>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
            
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>
                                    </CardTitle>
                                    <CardText>
                                        <p>On the front-end I employ the usual suspects: </p>
                                        <br/>
                                        <Container>
                                            <Row>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={htmlIcon} rounded fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={cssIcon} roundedCircle fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={JSIcon} rounded fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={PSIcon} rounded fluid/>
                                                </Col>
                                            </Row>
                                            <p>I love these front-end frameworks right now: </p>
                                            <Row>
                                               
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={reactIcon} rounded fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={bootstrapIcon} roundedCircle fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={foundationIcon} rounded fluid/>
                                                </Col>
                                                <Col xs={6} md={6}>
                                                    <Image className="skill-icons" src={sassIcon} rounded fluid/>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <p>In addition to all this I have experience with: </p>
                                        <br/>Design & planning
                                        <br/>Style guides
                                        <br/>Wire-framing & mock-ups
                                        <br/>And much more.
                                    </CardText>
                        
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>
                                    </CardTitle>
                                    <CardText>
                                    <p>Main focus on the back end : </p>
                                    <br/>
                                    <Container>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={nodeIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={expressIcon} roundedCircle fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={JSIcon} rounded fluid/>
                                            </Col>
                                        </Row>
                                        <p>Had a bit of fun with these in the past: </p>
                                        <Row>
            
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={PHPIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={MYSQLIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={PYIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={apacheIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={CIcon} rounded fluid/>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Image className="skill-icons" src={javaIcon} rounded fluid/>
                                            </Col>
                                        </Row>
                                    </Container>
                                    </CardText>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <CardTitle>
                                    
                                    </CardTitle>
                                    <CardText>
                                        <Container>
                                            <Row>
                                                <Col xs={12} md={12}>
                                                    <Image src={pyCert}  fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image src={WPCert}  fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image src={WPPlugCert} fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image src={WebDesCert} fluid />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardText>
                        
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
    
}
export default SkillsTabs;