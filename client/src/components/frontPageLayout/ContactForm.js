import {Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader, Alert} from 'reactstrap';
import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import github from "../../images/hiclipart.com.718cad62.png";
import linkedin from "../../images/technologies/pngfuel.com.png";
import logo from "../../images/Sign96x96_white.png";
import SiteBuilding from '../info/SiteBuilding'
import SEOMarketing from '../info/SEOMarketing';
import Consultations from '../info/Consultations';
import JnrPositions from '../info/JnrPositions';
import JoinMyProject from '../info/JoinMyProject';
import Image from "react-bootstrap/Image";

// todo: Check conventions for naming each Class/Component etc...

class ContactForm extends Component {
    constructor(props) {
        super(props);
        
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            email: false,
            message: '',
            result: ''
        };
    }
    
    render() {
        const modalError = this.state.error ? 'not' : '';
        return (
            <Container className="form-container">
                <Row>
                    <Col id="info"  xs="12" sm="12" md="12" lg="6"
                         
                         data-aos-delay="100"
                         data-aos-duration="1000"
                         data-aos="fade-down-right"
                         data-aos-anchor="#info"
                    >
                        <h1 className="more-info-title">INFO</h1>
                        <Col md="8" className="more-info-container">
                            
                           
                           
                                <Alert color="dark">
                                    <Consultations/>
                                    <SiteBuilding/>
                                    <SEOMarketing/>
                                   
                                    <JnrPositions/>
                                    <JoinMyProject/>
                                    
    
                                    
                                </Alert>
                        </Col>
                    </Col>
                    
                    <Col  id="contacts" xs="12" sm="12" md="12" lg="6"
                         data-aos-delay="100"
                         data-aos-duration="1000"
                         data-aos="fade-down-left"
                         data-aos-anchor="#contacts">
                        <h1 className="contact-title">CONTACT ME</h1>
                        <div className="form-wrapper">
                            
                            <div className="form-text-left">
                                <AvForm onValidSubmit={this.handleValidSubmit}
                                        onInvalidSubmit={this.handleInvalidSubmit}>
                                    <FormGroup>
                                        <AvField name="name" label="Name " type="text" required placeholder="Your name"
                                                 id="name"/>
                                        <AvField name="email" label="Email address: " type="email" required
                                                 placeholder="Your email" id="email"/>
                                        
                                        <AvField type="textarea" name="message" label="Message: " required
                                                 placeholder="Your message" id="message"/>
                                        <Button className="button-projects" size="lg">Submit</Button>
                                    </FormGroup>
                                   
                                </AvForm>
                              
                            </div>
                         
                            <p className="about-paragraph text-on-primary">
                                <strong>Email: </strong> trevsstuff@hotmail.com<br/>
                                <strong>Number: </strong> +7 925 800 6120<br/>
                                <strong>Skype: </strong>   <a href="skype:trevsstuff">trevsstuff</a></p>
                            <Modal isOpen={this.state.email !== false} toggle={this.closeModal}>
                                <ModalHeader toggle={this.closeModal}>Form is {modalError} valid!</ModalHeader>
                                <ModalBody>
                                    <p>{this.state.result}</p><br/>
                                    Your Name: <strong> {this.state.name}</strong><br/>
                                    Your email: <strong> {this.state.email}</strong><br/>
                                    Your message: <br/><p>{this.state.message}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.closeModal}>Ok, got it!</Button>
                                </ModalFooter>
                                
                            </Modal>
                           
                        </div>
                      

                    </Col>
                    
                </Row>
    
                <div
                    id="trigger-icons"
                    className="icons-wrapper"
                    data-aos-anchor="#trigger-icons"
                    data-aos="flip-left"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
        
                    <a target="_blank" rel="noopener noreferrer" title="Check out my code" className="footer-links"
                       href="https://github.com/Trevorjoel">
                        <img alt="Github icon" className="App-logo footer-icons" src={github}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Linkedin profile" className="footer-links"
                       href="https://www.linkedin.com/in/trevor-garrity-07214b160/">
                        <img alt="linkedin icon" className="App-logo footer-icons" src={linkedin}/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="My blog site!" className="footer-links"
                       href="https://www.fullstack-adventure.com">
                        <img alt="Trevor Joel icon" className="App-logo footer-icons" src={logo}/>
                    </a>
    
                </div>
            </Container>
        )
    }
    
    handleValidSubmit(event, values) {
        
        this.setState({
            name: values.name,
            email: values.email,
            message: values.message,
            result: 'Your submission went through. I will contact you soon.'
        });
        console.log(values.email + values.message);
        const response = fetch('/api/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            // Maybe write an error for the fetch
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                message: values.message
            }),
        })
            .catch(
                err => console.log(err)
            );
        
    }
    
    handleInvalidSubmit(event, errors, values) {
        
        this.setState({
            name: values.name,
            email: values.email,
            error: true,
            message: values.message,
            result: 'Something went wrong with your submission.'
        });
    }
    
    closeModal() {
        this.setState({email: false, error: false});
    }
}

export default ContactForm;