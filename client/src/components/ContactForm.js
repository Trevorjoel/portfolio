import {Button, Form, FormGroup, Label, Input,Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import React from "react";
import { Component } from 'react';
import { Col, Container, Row} from "react-bootstrap";
import { AvForm, AvField } from 'availity-reactstrap-validation';




class ContactForm extends Component {
    render(){
        const modalError = this.state.error ? 'not' : '';
        return(
            <Container>
                <Row id="contacts">
                    <Col xs="12" sm="2" md="2" lg="2">
                    
                    </Col>
                    <Col xs="0" sm="8" md="8" lg="8">
                        <div className="form-wrapper">
                            <h1 className="projects-title">Contact me</h1>
                            <div className="form-text-left">
                            <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
                                <FormGroup>
                                    <AvField name="name" label="Name " type="text" required placeholder="Your name"  id="name"/>
                                    <AvField name="email" label="Email address: " type="email" required placeholder="Your email"  id="email"/>
                                
                                <AvField name="message" label="Message: " type="text" required placeholder="Your message"  id="message"/>

                                </FormGroup>
                                <Button className="contact-button">Submit</Button>
                            </AvForm>
                            </div>
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
                    <Col xs="0" sm="2" md="2" lg="2">
                    </Col>
                </Row>
            </Container>
        )
    }
    constructor(props) {
        super(props);
        
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            email: false,
            message:'',
            result: ''
        };
    }
    
    handleValidSubmit(event, values) {
       
        this.setState({
            name: values.name,
            email: values.email,
            message: values.message,
            result: 'Your submission went through. I will contact you soon.'
        });
        console.log(values.email + values.message );
        
        const response = fetch('/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: values.name,
                email: values.email,
                message: values.message}),
        });
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