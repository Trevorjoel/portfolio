import {Container, Row, Col} from 'reactstrap';
import React, { Component } from 'react';
import github from "../images/github_PNG2.png";
import logo from '../images/Sign96x96.png';
import linkedin from "../images/PinClipart.com_linkedin-clip-art_2077271.png";

class Footer extends Component{
    render(){
        return(
            <div className="footer-wrapper">
                <Container fluid className="">
                    <Row>
                        <Col md="4">
                            <h5 className="title">Thanks for visiting</h5>
                           <p>This was created with the node stack, React, express, connected to a MYSQL database. I'm up to the task of developing modern dynamic web applications.</p>
                        </Col>
                        <Col md="8">
                            <h5 className="">More info:</h5>
   
                                    <a target="_blank" rel="noopener noreferrer" title="Check out my code" className="footer-links" href="https://github.com/Trevorjoel"> <img alt="Github icon" className="App-logo footer-icons" src={github}/></a>
                               
                                
                                    <a target="_blank" rel="noopener noreferrer" title="Linkedin profile" className="footer-links" href="https://www.linkedin.com/in/trevor-garrity-07214b160/"> <img alt="linkedin icon" className="App-logo footer-icons" src={linkedin}/></a>
    
                            <a target="_blank" rel="noopener noreferrer" title="My blog site!" className="footer-links" href="https://www.fullstack-adventure.com"> <img alt="Trevor Joel icon" className="App-logo " src={logo}/></a>
                            
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.fullstack-adventure.com"> Trevor Garrity  </a>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Footer;
