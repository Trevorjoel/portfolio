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
                            My name is Trevor and I'm a full-stack developer.<br/>
                            I have experience building applications in many different areas of web development using many different tools and technologies.<br/>
                            Settling into front and back end JavaScript. <br/>I am available for freelance site-building with WordPress and consultations for small businesses
                            and full-time developer positions.<br/>
                        </p>
                        <SkillsModal />
                    </Col>

                </Row>
            </Container>
           
        );
    }
}
export default Introduction;

