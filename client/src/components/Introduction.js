import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image'
import portrait from '../images/photo_trev.jpg';
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
                <Row >
                    
                    <Col sm={12} md={6} lg={6} className="intro-image-col">
                        <div className="img-parent">
                            <Image className="img-thumbnail" src={portrait} roundedCircle fluid alt="Trevor" />
                           
                           
                            
    
                           
                        </div>
                        < h1 id="introduction" className="introduction-head">Welcome</h1>
                        <SkillsModal />
                    </Col>
                    
                        <Col sm={12} md={6} lg={6}>
                            <div className="intro-text-wrapper">
                                <p className="text-on-primary intro-paragraph">
                                    My name is Trevor I'm a full-stack web developer with a focus on the JavaScript stack.<br/><br/>
                                    I am seeking freelance web development projects or full time positions in this field.<br/><br/>
                                    I also specialise in WordPress,
                                    content management systems and social media marketing. <br/><br/>
                                    Please enjoy.
                                    </p>
                            </div>
                            
                    </Col>
                </Row>
            </Container>
           
        );
    }
}
export default Introduction;

