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

            <Container className="contain-intro">
                
                <Row>
                    <Col>
                        <div className="img-parent">
                            <Image className="img-thumbnail" src={portrait} roundedCircle fluid alt="Trevor" />
                            
                        </div>
                        < h1 className="introduction-head">Welcome</h1>
                    </Col>
                    
                </Row>
                    <Row className="intro-text-row">
                    <Col sm={12} md={12} lg={12}>
                        <p className="text-on-primary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse <br/>cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat<br/>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <SkillsModal />
                    </Col>

                </Row>
            </Container>
           
        );
    }
}
export default Introduction;