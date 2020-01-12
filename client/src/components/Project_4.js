import React from 'react';
import {Card} from 'react-bootstrap';
import placeholder from '../images/index.svg';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import ProjectTemplateTest from '../../../SpareParts/ProjectTemplateTest';

/*
* Notes: This file creates modal cards for each project... Should not be more than 6 projects at a time.
*  Steps:  1. add new modal to state, Bind the toggle to this
*          2. Create toggle function
*          3. Fill out the card template at the bottom of page
*          4. Create Project component, import
* */

class Project_4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            
        };
        
        this.toggle1 = this.toggle1.bind(this);
        
    }
    
    toggle1() {
        this.setState(prevState => ({
            modal1: !prevState.modal1,
            
        }));
    }
    
    
    render() {
        return (
            <div>
                <Card className="project-card">
                    <Card.Img variant="top" src={placeholder}/>
                    <Card.Body>
                        <Card.Title>Project 4</Card.Title>
                        <Card.Text>
                            Project 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor
                            incididunt ut labore et dolore.<br/>
                        
                        </Card.Text>
                        
                        <Button className="button-projects" size="md" onClick={this.toggle3}>{this.props.buttonLabel}Check
                            it out!</Button>
                        <Modal isOpen={this.state.modal3} toggle3={this.toggle3} className="single-project-modal">
                            <ModalHeader toggle={this.toggle3}>Project 3</ModalHeader>
                            <ProjectTemplateTest/>
                            <ModalFooter>
                                
                                <Button color="secondary" onClick={this.toggle3}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Project_4;

