import React from 'react';
import github from "../../Assets/anna.jpg";
import {Container, Row, Image, Col } from "react-bootstrap";


function AnnaProfile() {
    return (<div className="">

            <Container>
                <Row>
                    <Image style={{width:"40%"}} src={github} roundedCircle />
                </Row>
            </Container>
            <p className="reading-box text-left">Roles: Design and branding.<br/>
            </p>
            <p>Advising on style and branding.</p>
            <p>Contact: <a href="https://www.facebook.com/tehhy.ray">Facebook</a>
            </p>



        </div>


    );
}
export default AnnaProfile;