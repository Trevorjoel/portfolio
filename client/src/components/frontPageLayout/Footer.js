import {Col, Container, Row} from 'reactstrap';
import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                <Container fluid className="">
                    <Row>
                        <Col lg={12} md={12}>
                            <h5 className="footer-paragraph">Thanks for visiting</h5>
                            <p className="footer-paragraph">This website is powered by Node, React, express, and
                                MYSQL.</p></Col>
                    
                    </Row>
                </Container>
                <div className="footer-copyright">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a target="_blank" rel="noopener noreferrer"
                                                                        href="https://www.fullstack-adventure.com"> Trevor
                        Garrity </a>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Footer;
