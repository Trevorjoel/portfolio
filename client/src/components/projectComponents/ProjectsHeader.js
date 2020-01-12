import React, {useState} from "react";
import {Col, Fade, Row} from "reactstrap";
/*
* Sets a header default header format for projects
* */

// todo: Fix the order of the link array or create and loop through objects
const ProjectsHeader = (props) => {
    
    const [fadeIn, setFadeIn] = useState(true);
    const toggle = () => setFadeIn(!fadeIn);
    
    return <Fade>
        <div style={props.headerStyle}>
            <h1 style={props.titleStyle}><br/>{props.projectName}</h1>
            <Row>
                
                <Col sm={12} lg={6}>
                    
                    <p><strong>Project purpose:</strong><br/>
                        {props.projectPurpose.map((element) => {
                                return <p> {element}</p>;
                            }
                        )}{props.link1[2]} <a target="_blank" rel="noopener noreferrer" href={props.link1[0]}>{props.link1[1]}</a></p>
                    
                    
                    <p><strong>Project Description:</strong><br/>
                        {props.projectDescription.map((element) => {
                                return <p> {element}</p>;
                            }
                        )}{props.link2[2]} <a target="_blank" rel="noopener noreferrer" href={props.link2[0]}>{props.link2[1]}</a></p>
                </Col><Col sm={12} lg={6}>
                <p><strong>What did I learn?</strong><br/>
                    {props.projectLearning.map((element) => {
                            return <p> {element}{props.link3[2]} <a target="_blank" rel="noopener noreferrer" href={props.link3[0]}>{props.link3[1]}</a></p>
                        }
                    )}</p>
                <p><strong>What is next:</strong><br/>
                    {props.whatNext.map((element) => {
                            return <p> {element} {props.link4[2]} <a target="_blank" rel="noopener noreferrer" href={props.link4[0]}>{props.link4[1]}</a></p>
                        }
                    )}</p>
            </Col>
            </Row>
        </div>
        <hr/>
    </Fade>
    
};
export default ProjectsHeader;
/*
* * INCLUDES THE FOLLOWING PROPS:
*       const projectName = '';
        const projectPurpose = ['];
        const projectDescription = ['];
        const projectLearning = [''];
        const link1 = [''];
        const link2 = ['', ''];
        const link3 = [''];
        const link4 = [''];
        const whatNext = [''];
        
         let headerStyle = {
            margin: '40px 0 200px 0',
            paddingLeft: '10%',
            paddingRight: '10%',
            color: 'white',
            width: '100%'
        };
        
        <ProjectsHeader
                    projectName={projectName}
                     projectPurpose={projectPurpose}
                     projectDescription={projectDescription}
                     projectLearning={projectLearning}
                      whatNext={whatNext}
                       link1={link1}
                      link2={link2}
                       link3={link3}
                       link4={link4}
                       headerStyle={headerStyle}
                     
                />
* */