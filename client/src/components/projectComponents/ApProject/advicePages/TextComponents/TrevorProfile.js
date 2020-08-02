import React from 'react';
import github from "../../Assets/16673082.jpeg";
import {Container, Row, Image, Col } from "react-bootstrap";


function TrevorProfile() {
    return (<div className="">

            <Container>
                <Row>


                        <Image style={{width:"40%"}} src={github} roundedCircle />


                </Row>
            </Container>
           {/* <img style={{width:"200px"}} alt="Github icon" className="" src={github}/>*/}
            <p className="reading-box text-left">Roles: Project manager, front-end, back-end, databasing.<br/>
               </p>
            <p>Came up with the idea for the App learning React, node, express.</p>
            <p>Looking for a job as a junior developer.</p>
            <p>Contact: <a href="https://www.facebook.com/tgarrity">Facebook</a><br/>
                <a href="https://github.com/Trevorjoel">GitHub</a>
            </p>



        </div>


    );
}
export default TrevorProfile;