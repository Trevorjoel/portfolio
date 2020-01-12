import React from 'react';
import {Card,} from 'react-bootstrap';
import placeholder1 from '../images/Employee.jpg';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import ProjectTable from './projectComponents/ProjectTable';

class ProjectEmployees extends React.Component {
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
                <Card className="project-card ">
                    <Card.Img variant="top" src={placeholder1}/>
                    <Card.Body>
                        <Card.Title>Create Read Delete and Sort.</Card.Title>
                        <Card.Text>
                            A small application to view employees in an organisation. Simple CRUD operations in an SQL
                            database.<br/><br/>
                        </Card.Text>
                        
                        <Button className="button-projects" size="md" to="top" onClick={this.toggle1}>{this.props.buttonLabel}Have
                            a play!!</Button>
                        <Modal isOpen={this.state.modal1} toggle1={this.toggle1} className="single-project-modal">
                            <ModalHeader toggle={this.toggle1}> </ModalHeader>
                            <ProjectTable/>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle1}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectEmployees;

