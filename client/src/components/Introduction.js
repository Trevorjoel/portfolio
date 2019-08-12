import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import portrait from '../images/P1090923_square.resized.JPG';
import SkillsModal from './SkillsModal';


class Introduction extends React.Component{
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render(){
        return(

            <Container className="contain-intro" >
                
                <Row>
                    <Col>
                        <div className="img-parent">
                            <Image className="img-thumbnail" src={portrait} roundedCircle fluid alt="Trevor" />
                            
                        </div>
                        < h1 id="introduction" className="introduction-head">Welcome</h1>
                    </Col>
                    
                </Row>
                    <Row className="intro-text-row">
                    <Col sm={12} md={12} lg={12}>
                        <p className="text-on-primary">
                            My name is Trevor I'm learning full stack JavaScript and some related frameworks.<br/><br />
                            This is my portfolio in progress. It's being built using React, express and nodeJS packages. <br />
                            <br/>I am available for freelance web development using WordPress and seeking a full-time developer position.<br/><br/>
                            Please contact me for more information.
                        </p>
                        <SkillsModal />
                    </Col>

                </Row>
            </Container>
           
        );
    }
}
export default Introduction;

