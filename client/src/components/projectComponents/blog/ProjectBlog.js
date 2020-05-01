import React from 'react';
import {Card} from 'react-bootstrap';
import placeholder from '../../../images/P1090923_edit_1.97cecfe4.JPG';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';
import Iframe from '../../Iframe'
import ProjectsHeader from "../ProjectsHeader";
import placeholder1 from "../../../images/Employee.3a14fba1.jpg";
/*
* Notes: This file creates modal cards for each project... Should not be more than 6 projects at a time.
*  Steps:  1. add new modal to state, Bind the toggle to this
*          2. Create toggle function
*          3. Fill out the card template at the bottom of page
*          4. Create Project component, import
* */


class ProjectBlog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            
        };
        
        this.toggle1 = this.toggle1.bind(this);
        
    }
    
    toggle1() {
        this.setState(prevState => ({
            modal1: !prevState.modal1,
        }));
    }
    
    render() {
        const projectName = 'My blog';
        const projectPurpose = ['Develop my own theme in WordPress using PHP, WP hooks and plugins.','Practice the inner workings of Content Management systems.'];
        const projectDescription = ['This is where I can blog about my tech projects and other things of interest to me.','This was made a long time ago, so the style, layout, ' +
        'UX is a bit old-looking.'];
        const projectLearning = ['Apache, MySQL, Apache server administration/configuration, SSL, hosting, DNS, backing up databases and other systems.'];
        const link1 = [''];
        const link2 = ['https://fullstack-adventure.com/', ' here.', 'See the site '];
        const link3 = [''];
        const link4 = [''];
        const whatNext = ['There is a lot I would like to do including starting over. For the time being however, maybe just some minor fixes.'];
    
        let headerStyle = {
            margin: '40px 0 200px 0',
            paddingLeft: '10%',
            paddingRight: '10%',
            color: 'white',
            width: '100%'
        };
        let demos = {
            soundcloud:
                '<iframe class="iframe-blog" scrolling="yes" frameborder="no" allow="autoplay" src=https://fullstack-adventure.com/category/tech/"></iframe>',
            
            plotly:
                '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
        };
        return (
            <div className="hoverWrapper">
                <Card className="card-body-override" >
                    <Card.Img className="project-card card-img" variant="top" src={placeholder}/>
                    <Card.Body onClick={this.toggle1} className="align" id="hoverShow1"
                    >
                        <h2 >My Blog</h2>
                        <h5>
                            My first site build with WordPress.<br/> Containing information about my projects.<br/><br/>
                        </h5>
                
                        <Button className="button-projects" size="md" to="top" >{this.props.buttonLabel}Have
                            a play!!</Button>
                        <Modal isOpen={this.state.modal1} toggle1={this.toggle1} className="single-project-modal">
                            <ModalHeader toggle={this.toggle1}> </ModalHeader>
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
                            <div id="container">
                                <Iframe iframe={demos["soundcloud"]} allow="autoplay"/>
                            </div>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle1}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectBlog;

