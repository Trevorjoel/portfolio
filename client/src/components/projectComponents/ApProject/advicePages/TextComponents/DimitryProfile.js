import React from 'react';
import github from "../../Assets/dima.jpg";
import {Container, Row, Image, Col } from "react-bootstrap";


function DimitryProfile() {
    return (<div className="">

            <Container>
                <Row>


                    <Image style={{width:"40%"}} src={github} roundedCircle />


                </Row>
            </Container>
            {/* <img style={{width:"200px"}} alt="Github icon" className="" src={github}/>*/}
            <p className="reading-box text-left">Roles: Front-end, back-end, databasing.<br/>
            </p>
            <p>Helping out with API, databasing and some React tasks.</p>
<p>Contact: <a href="https://www.facebook.com/profile.php?id=100006596918086">Facebook</a></p>


        </div>


    );
}
export default DimitryProfile;