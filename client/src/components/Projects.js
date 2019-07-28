import React from 'react';
import {Card,  Row, Col, Container} from 'react-bootstrap';
import placeholder from '../images/index.svg';
import { Modal, Button, ModalHeader,  ModalFooter } from 'reactstrap';
import ProjectTable from './projectComponents/ProjectTable';
import ProjectTemplateTest from './projectComponents/ProjectTemplateTest';
import github from "../images/github_PNG2.png";
/*
* Notes: This file creates modal cards for each project... Should not be more than 6 projects at a time.
*  Steps:  1. add new modal to state, Bind the toggle to this
*          2. Create toggle function
*          3. Fill out the card template at the bottom of page
*          4. Create Project component, import
* */




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
            <Container >
                <h1 id="projects" className="projects-title">Latest Projects</h1>
                <br />
                <Row>
                    <Col xs="12" sm="6" md="6" lg="4">
                        
                        <Card className="project-card" >
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Employee CRUD application</Card.Title>
                                <Card.Text>
                                   A small application to view employees in an organisation. Simple CRUD operations in an SQL database.
                                </Card.Text>
                                
                                    <Button  className=""  color="success" size="md" onClick={this.toggle1}>{this.props.buttonLabel}Check it out!</Button>
                                <Modal isOpen={this.state.modal1} toggle1={this.toggle1} className="single-project-modal">
                                    <ModalHeader toggle={this.toggle1}>CRUD employees</ModalHeader>
                                    <ProjectTable/>
                                    <ModalFooter>
                                        
                                        <Button color="secondary" onClick={this.toggle1}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                        <Card className="project-card" >
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Project 2</Card.Title>
                                <Card.Text>
                                    Project 1  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
            
                                <Button  className=""  color="success" size="md" onClick={this.toggle2}>{this.props.buttonLabel}Check it out!</Button>
                                <Modal isOpen={this.state.modal2} toggle1={this.toggle2} className="single-project-modal">
                                    <ModalHeader toggle={this.toggle2}>Project 2</ModalHeader>
                                    <ProjectTemplateTest/>
                                    <ModalFooter>
                    
                                        <Button color="secondary" onClick={this.toggle2}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Card.Body>
                        </Card>
                     
                    </Col>
                    <Col xs="12" sm="6" md="6" lg="4">
                        <Card className="project-card" >
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Project 3</Card.Title>
                                <Card.Text>
                                    Project 1  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
            
                                <Button  className=""  color="success" size="md" onClick={this.toggle3}>{this.props.buttonLabel}Check it out!</Button>
                                <Modal isOpen={this.state.modal3} toggle3={this.toggle3} className="single-project-modal">
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
        );
    }
}
export default Projects;

/*
// CARD TEMPLATE
*  <Card className="project-card" >
                            <Card.Img variant="top" src={placeholder} />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    Project 1  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                </Card.Text>
                                
                                    <Button  className=""  color="success" size="md" onClick={this.toggle1}>{this.props.buttonLabel}Check it out!</Button>
                                <Modal isOpen={this.state.modal1} toggle1={this.toggle1} className="single-project-modal">
                                    <ModalHeader toggle={this.toggle1}>Project 1</ModalHeader>
                                    <ProjectTemplate/>
                                    <ModalFooter>
                                        
                                        <Button color="secondary" onClick={this.toggle1}>Close</Button>
                                    </ModalFooter>
                                </Modal>
                            </Card.Body>
                        </Card>
* */