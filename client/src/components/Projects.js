import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import placeholder from '../images/index.svg';
class Projects extends React.Component {
    render() {
        return (
            <Container >
                <h1 id="projects" className="projects-title">Latest Projects</h1>
                <br />
                <Row>
                    <Col xs="12" sm="6" md="6" lg="4">
    
                        <Card className="project-card">
                            
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Title>Project 1</Card.Title>
                            <Card.Body>
                                
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                        <Card className="project-card">
                            <Card.Img variant="top" src={placeholder}  />
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                      </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                        <Card className="project-card">
                            <Card.Img variant="top" src={placeholder}  />
                            <Card.Body>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                     
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                        <Card className="project-card">
                            <Card.Img variant="top" src={placeholder}  />
                            <Card.Body>
                                <Card.Title>Project 4</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
    
                    </Col>
                    
                </Row>
               
            </Container>
        );
    }
}
export default Projects;