import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react';


class Footer extends Component{
    render(){
        return(
            <div className="footer-wrapper">
                <Container fluid className="">
                    <Row>
                        <Col md="6">
                            <h5 className="title">Footer Content</h5>
                           
                        </Col>
                        <Col md="6">
                            <h5 className="">Links</h5>
                            <ul>
                                <li className="">
                                    <a href="#!">Link 1</a>
                                </li>
                                <li className="d">
                                    <a href="#!">Link 2</a>
                                </li>
                                <li className="">
                                    <a href="#!">Link 3</a>
                                </li>
                                <li className="">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyrigh">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.fullstack-adventure.com"> Trevor Garrity  </a>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Footer;
