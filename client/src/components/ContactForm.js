import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import React from "react";
import { Component } from 'react';
import { Col, Container, Row} from "react-bootstrap";


class ContactForm extends Component {
    render(){
        return(
            <Container>
            <Row id="contacts">
                <Col xs="12" sm="2" md="2" lg="2">
            
                    </Col>
                <Col xs="0" sm="8" md="8" lg="8">
                    <div className="form-wrapper">
                    <h1 className="projects-title">Contact me</h1>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
        
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
        
                        <Button>Submit</Button>
                    </Form>
                    </div>
                </Col>
                <Col xs="0" sm="2" md="2" lg="2">
                </Col>
            </Row>
            </Container>
        )
    }
}
export default ContactForm;