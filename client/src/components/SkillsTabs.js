import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

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
                                        <strong>Responsive design using:</strong>
                                        <br/>HTML, CSS & JavaScript
                                        <br/>Design & planning
                                        <br/>Style guides
                                        <br/>Wire-framing & mock-ups
                                        <br/>PhotoShop
                                        <br/>
                                        <strong>Using the frameworks:</strong>
                                        <br/>SASS
                                        <br/>Foundation & Bootstrap
                                        <br/>React
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
                                    <CardText><strong>Behind the scenes I can use:</strong>
                                        <br/>PHP
                                        <br/>Python
                                        <br/>Java
                                        <br/>C#
                                        <br/>Node
                                        <br/>Express
                                        <br/>MySQL
                                        <br/>MongoDB
                                        <br/>Apache server
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
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur.
                                        Excepteur sint occaecat<br/>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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