import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import CertificationsCarousel from "./CertificationsCarousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";

const cert = require('../images/5e0dc033cd39d.png');


const CertificationsModal = (props) => {
    const {
        className
    } = props;
    const [modal, setModal] = useState(false);
    
    const toggle = () => setModal(!modal);
    
    return (
        <div className="cert-image-wrapper">
            <Image className="certification-image" src={cert} fluid onClick={toggle}/>
            <Modal isOpen={modal} modalTransition={{timeout: 700}} backdropTransition={{timeout: 1300}}
                   toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Certifications</ModalHeader>
                <ModalBody>
                    <Container className="certification-carousel-wrapper">
                        <Row>
                            <div>
                                <CertificationsCarousel/>
                            </div>
                            {/*<Col xs={12} md={12}>
                                <Image className="certificates" src={pyCert}  fluid />
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="certificates" src={WPCert}  fluid />
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="certificates" src={WPPlugCert} fluid />
                            </Col>
                            <Col xs={12} md={12}>
                                <Image className="certificates" src={WebDesCert} fluid />
                            </Col>*/}
                        </Row>
                    </Container>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default CertificationsModal;
