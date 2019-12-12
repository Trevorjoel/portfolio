import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
// noinspection NpmUsedModulesInstalled
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
                            <Col sm="12" md="12" lg="12">
                                <Card body>
                                    <CardTitle>
                                    </CardTitle>
                                    <CardText>
                                        <br/>
                                        <Container>
                         
                                            <Row>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Image className="skill-icons" src={htmlIcon} rounded fluid/>
                                                    <p className="modal-text">HTML</p>
                                                </Col>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Image className="skill-icons" src={cssIcon} rounded fluid/>
                                                    <p className="modal-text">CSS</p>
                                                </Col>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Image className="skill-icons" src={JSIcon} rounded fluid/>
                                                    <p className="modal-text">JavaScript</p>
                                                </Col>
                                                <Col xs={3} md={3} lg={3}>
                                                    <Image className="skill-icons" src={PSIcon} rounded fluid/>
                                                    <p className="modal-text">PhotoShop</p>
                                                </Col>
                                            </Row>
                                         
                                            <Row>
                                               
                                                <Col xs={3} md={3}>
                                                    <Image className="skill-icons" src={reactIcon} rounded fluid/>
                                                    <p className="modal-text">React</p>
                                                </Col>
                                                <Col xs={3} md={3}>
                                                    <Image className="skill-icons" src={bootstrapIcon} rounded fluid/>
                                                    <p className="modal-text">Bootstrap</p>
                                                </Col>
                                                <Col xs={3} md={3}>
                                                    <Image className="skill-icons" src={foundationIcon} rounded fluid/>
                                                    <p className="modal-text">Foundation</p>
                                                </Col>
                                                <Col xs={3} md={3}>
                                                    <Image className="skill-icons" src={sassIcon} rounded fluid/>
                                                    <p className="modal-text">Sass</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    
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
                                 
                                    <br/>
                                    <Container>
                                        <Row>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={nodeIcon} rounded fluid/>
                                                <p className="modal-text">Node</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={expressIcon} fluid/>
                                                <p className="modal-text">Express</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={PHPIcon} rounded fluid/>
                                                <p className="modal-text">PHP</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={MYSQLIcon} rounded fluid/>
                                                <p className="modal-text">MYSQL</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={PYIcon} rounded fluid/>
                                                <p className="modal-text">Python</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={apacheIcon} rounded fluid/>
                                                <p className="modal-text">Apache</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={CIcon} rounded fluid/>
                                                <p className="modal-text">Sass</p>
                                            </Col>
                                            <Col xs={3} md={3}>
                                                <Image className="skill-icons" src={javaIcon} rounded fluid/>
                                                <p className="modal-text">C#</p>
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
                                                    <Image className="certificates" src={pyCert}  fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image className="certificates" src={WPCert}  fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image className="certificates" src={WPPlugCert} fluid />
                                                </Col>
                                                <Col xs={12} md={12}>
                                                    <Image className="certificates" src={WebDesCert} fluid />
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