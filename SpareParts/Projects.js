import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import placeholder1 from '../client/src/images/Employees-together286x180.jpg';
import placeholder from '../client/src/images/index.svg';
import apSetup from '../client/src/images/chift-pist.jpg'
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import ProjectTable from '../client/src/components/projectComponents/ProjectTable';
import ProjectTemplateTest from './ProjectTemplateTest';
import {NavLink} from "react-router-dom";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            modal3: false,
            modal4: false,
        };
        
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
    }
    
    toggle1() {
        this.setState(prevState => ({
            modal1: !prevState.modal1,
            
        }));
    }
    
    toggle2() {
        this.setState(prevState => ({
            modal2: !prevState.modal2,
            
        }));
    }
    
    toggle3() {
        this.setState(prevState => ({
            modal3: !prevState.modal3,
            
        }));
    }
    
    toggle4() {
        this.setState(prevState => ({
            modal4: !prevState.modal4,
            
        }));
    }
    
    
    render() {
        return (
            <div>
                
                <Container className="projects-container">
                    <h1 id="projects" className="projects-title">Latest Projects 111</h1>
                    <p className="projects-paragraph">These are my latest projects built to showcase some of the skills
                        that may be useful to you.</p>
                    <Row>
                        <Col xs="12" sm="12" md="12" lg="4">
                            
                            <Card className="project-card ">
                                <Card.Img variant="top" src={placeholder1}/>
                                <Card.Body>
                                    <Card.Title>Employee CRUD application</Card.Title>
                                    <Card.Text>
                                        A small application to view employees in an organisation. Simple CRUD operations
                                        in an SQL database.
                                    </Card.Text>
                                    <Button className="button-projects" size="md"
                                            onClick={this.toggle1}>{this.props.buttonLabel}Have a play!!</Button>
                                    <Modal isOpen={this.state.modal1} toggle1={this.toggle1}
                                           className="single-project-modal">
                                        <ModalHeader toggle={this.toggle1}> </ModalHeader>
                                        <ProjectTable/>
                                        <ModalFooter>
                                            
                                            <Button color="secondary" onClick={this.toggle1}>Close</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="4">
                            <Card className="project-card">
                                <Card.Img variant="top" src={apSetup}/>
                                <Card.Body>
                                    <Card.Title>IOT probe simulator</Card.Title>
                                    <Card.Text>
                                        This program simulates the data that would be taken from water quality
                                        monitoring probes in an aquaponics system. <br/>
                                    
                                    </Card.Text>
                                    
                                    <NavLink to="/sensors"> <Button className="button-projects" size="md">Interactive
                                        !</Button>
                                    </NavLink>
                                    <Modal isOpen={this.state.modal2} toggle2={this.toggle2}
                                           className="single-project-modal">
                                        <ModalHeader toggle={this.toggle2}>Project 2</ModalHeader>
                                        <ProjectTemplateTest/>
                                        <ModalFooter>
                                            
                                            <Button color="secondary" onClick={this.toggle2}>Close</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        
                        </Col>
                        <Col xs="12" sm="12" md="12" lg="4">
                            <Card className="project-card">
                                <Card.Img variant="top" src={placeholder}/>
                                <Card.Body>
                                    <Card.Title>Project 3</Card.Title>
                                    <Card.Text>
                                        Project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua.<br/>
                                    </Card.Text>
                                    
                                    <Button className="button-projects" size="md"
                                            onClick={this.toggle3}>{this.props.buttonLabel}Check it out!</Button>
                                    <Modal isOpen={this.state.modal3} toggle3={this.toggle3}
                                           className="single-project-modal">
                                        <ModalHeader toggle={this.toggle3}>Project 3</ModalHeader>
                                        <ProjectTemplateTest/>
                                        <ModalFooter>
                                            
                                            <Button color="secondary" onClick={this.toggle3}>Close</Button>
                                        </ModalFooter>
                                    </Modal>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    
}

