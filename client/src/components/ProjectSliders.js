import React from 'react';
import {Card} from 'react-bootstrap';
import apSetup from '../images/AQUAPIC.jpg'
import {Button} from 'reactstrap';
import {NavLink} from "react-router-dom";

/*
* Notes: This file creates modal cards for each project... Should not be more than 6 projects at a time.
*  Steps:  1. add new modal to state, Bind the toggle to this
*          2. Create toggle function
*          3. Fill out the card template at the bottom of page
*          4. Create Project component, import
* */

class ProjectSliders extends React.Component {
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
                    <Card.Img variant="top" src={apSetup}/>
                    <Card.Body>
                        <Card.Title>IOT probe simulator</Card.Title>
                        <Card.Text>
                            This program simulates the data that would be taken from water quality monitoring probes in
                            an aquaponics system. <br/><br/>
                        
                        </Card.Text>
                        
                        <NavLink to="/sensors" > <Button className="button-projects" size="md">Interactive !</Button>
                        </NavLink>
                       
                        
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectSliders;

