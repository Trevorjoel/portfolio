import React, {Component} from 'react';


import ReactNotifications from 'react-notifications-component';

import Alert from '../sliders/Alert';
import TempSliderVertical from "./TempSliderVertical";
import PhSliderVertical from "./PhSliderVertical";
import Nh3SliderVertical from "./Nh3SliderVertical";
import {Badge, Button, Col, Container, Fade, ModalFooter, NavLink, Row} from 'reactstrap';
import ProjectsHeader from '../ProjectsHeader'
import {NavLink as RRNavLink} from "react-router-dom";
import github from "../../../images/hiclipart.com.png";
const Functions = require('../../../functions/MainController');
const defaultTemp = [11.5];
const defaultPh = [7.25];
const defaultNh3 = [0.05];


// todo: Fix the back to projects button

class SlidersContainer extends Component {

    state = {
        tempValue: defaultTemp.slice(),
        tempUpdate: defaultTemp.slice(),
        CaptureValueTemp:defaultTemp.slice(),
        phValue: defaultPh.slice(),
        phUpdate: defaultPh.slice(),
        nh3Value: defaultNh3.slice(),
        nh3Update: defaultNh3.slice(),
        tempPopupAlert: true,
        hidePh: true,
        hideTemp: true,
        hideNh3: true
    };
    
    toggleTempAlert() {
        this.setState({
            hideTemp: !this.state.hideTemp
        })
    }
    
    togglePhAlert() {
        this.setState({
            hidePh: !this.state.hidePh
        })
    }
    
    toggleNh3Alert() {
        this.setState({
            hideNh3: !this.state.hideNh3
        })
    }
    

    tempAlert = (temp) => {
      setInterval(()=>{
        
            if (this.state.tempUpdate !== this.state.CaptureValueTemp) {
                console.log(`Setting CaptureValueTemp : ${this.state.CaptureValueTemp}`);
                console.log(`From tempUpdate: ${this.state.tempUpdate}`);
                this.setState({CaptureValueTemp: this.state.tempUpdate,
                });
                console.log(` AFTER Setting CaptureValueTemp : ${this.state.CaptureValueTemp}`);
                console.log(`AFTER From tempUpdate: ${this.state.tempUpdate}`);
            }
        },2000);
        
        switch (true) {
            case   temp <= 3  :
           if(this.state.tempUpdate === this.state.CaptureValueTemp && this.state.tempPopupAlert === true){
               
               this.setState({tempPopupAlert:false});
                console.log('returning from switch');
                return(/*<Alert alertStyle={this.alertStyle}/>*/ console.log('It works')
                );}
               
                return<Fade>
                    <div className="red-alert" onClick={this.toggleTempAlert.bind(this)}>
                        <Row>
                            <Col lg={2}>
                                <h4><Badge
                                    className="badge-secondary-override">{this.state.tempUpdate[0].toPrecision(2)} &#8451; </Badge>
                                </h4>
                            </Col>
                            <Col lg={10}>
                                <h4> LOW TEMPERATURE{console.log(this.state.tempUpdate[0])}</h4>
                            </Col>
                        </Row>
                    </div>
              
               
                    {!this.state.hideTemp &&
                    <Fade>
                        <p className="alert">You have critically low water temperature. At extremely low water
                            temperatures your fish can freeze to death.
                            Your system is at risk. Take immediate action.
                            Please see <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                
                </Fade>;
           
                
                
            case temp > 3 && temp <= 10 : //
                return <div>
                    
                    <Fade>
                        <div className="yellow-alert" onClick={this.toggleTempAlert.bind(this)}>
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">{this.state.tempUpdate[0.].toPrecision(2)} &#8451; </Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4> LOW TEMPERATURE</h4>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    {!this.state.hideTemp &&
                    <Fade>
                        <p className="alert">You have low water temperature. At low water temperatures your fish stop
                            feeding and grow very slowly. Action should be taken to increase the water temperature.
                            Please see <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </div>;
            case temp > 10 && temp <= 18 : //
                return <Fade>
                    <div className="green-alert" onClick={this.toggleTempAlert.bind(this)}>
                        <Row>
                            <Col lg={2}>
                                <h4><Badge
                                    className="badge-secondary-override">{this.state.tempUpdate[0.].toPrecision(2)} &#8451; </Badge>
                                </h4>
                            </Col>
                            <Col lg={10}>
                                <h4>TEMPERATURE OK</h4>
                            </Col>
                        </Row>
                    </div>
                    {!this.state.hideTemp &&
                    <Fade>
                        <p className="alert">Water temperature is optimal for trout. Keep the temperature between 10
                            and 18 degrees
                            More info is in <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </Fade>;
            case temp > 18 && temp <= 23 : //
                return <div className="">
                    <Fade>
                        <div onClick={this.toggleTempAlert.bind(this)} className="yellow-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">{this.state.tempUpdate[0.].toPrecision(2)} &#8451; </Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4> HIGH TEMPERATURE</h4>
                                </Col>
                            </Row>
                        </div>
                        {!this.state.hideTemp &&
                        <Fade>
                            <p className="alert">You have high water temperature. At higher water temperatures fish stop
                                feeding
                                and are prone to low oxygen and higher ammonia concentrations in the water.
                                Action should be taken to reduce the water temperature.
                                Please see <a href="#"> our wiki.</a></p>
                        </Fade>
                        }
                    </Fade></div>;
            case temp > 23: //
                return <Fade>
                    <div className="">
                        <div onClick={this.toggleTempAlert.bind(this)} className="red-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">{this.state.tempUpdate[0.].toPrecision(2)} &#8451; </Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4> HIGH TEMPERATURE</h4>
                                </Col>
                            </Row>
                        </div>
                        {!this.state.hideTemp &&
                        <Fade>
                            <p className="alert">You have critically high water temperature. At these levels depleted
                                oxygen and
                                ammonia concentrations can be fatal to your fish. Your system is at risk. Take immediate
                                action.
                                Please see <a href="#"> our wiki.</a></p>
                        </Fade>
                        }
                    </div>
                </Fade>;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    phAlert = (ph) => {
        
        switch (true) {
            case   ph <= 5.5  :
                return <div>
                    
                    <Fade>
                        <div onClick={this.togglePhAlert.bind(this)} className="red-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">pH {this.state.phUpdate[0.].toPrecision(2)}</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>LOW pH</h4>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    {!this.state.hidePh &&
                    
                    <Fade><p className="alert">You have critically low pH. At extremely low pH your fish can suffer
                        fatal acid
                        burns.
                        Your system is at risk. Take immediate action.
                        Please see <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </div>;
            case ph > 5.5 && ph <= 6.5 : //
                return <Fade>
                    <div className="">
                        <div onClick={this.togglePhAlert.bind(this)} className="yellow-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">pH {this.state.phUpdate[0.].toPrecision(2)}</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>LOW pH</h4>
                                </Col>
                            </Row>
                        </div>
                        {!this.state.hidePh &&
                        <Fade>
                            <p className="alert">You have low pH levels. At low pH levels your fish may suffer from high
                                acidity.
                                Action should be taken to increase the pH levels.
                                Please see <a href="#"> our wiki.</a></p>
                        </Fade>
                        }
                    </div>
                </Fade>;
            case ph > 6.5 && ph <= 8 : //
                return <div className="">
                    <div className="green-alert" onClick={this.togglePhAlert.bind(this)}>
                        <Row>
                            <Col lg={2}>
                                <h4><Badge
                                    className="badge-secondary-override">pH {this.state.phUpdate[0.].toPrecision(2)}</Badge>
                                </h4>
                            </Col>
                            <Col lg={10}>
                                <h4>pH OK</h4>
                            </Col>
                        </Row>
                    </div>
                    
                    {!this.state.hidePh &&
                    
                    <p className="alert">Water pH levels are optimal for trout. Keep the pH level between 6.5 and 8.
                        More info is in <a href="#"> our wiki.</a></p>
                        
                    }
                </div>;
            case ph > 8 && ph <= 9 : //
                return <Fade>
                    <div className="">
                        <div onClick={this.togglePhAlert.bind(this)} className="yellow-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">pH {this.state.phUpdate[0.].toPrecision(2)}</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>HIGH pH</h4>
                                </Col>
                            </Row>
                        </div>
                        {!this.state.hidePh &&
                        <Fade>
                            <p className="alert">You have high pH levels. At higher pH levels your fish may suffer from
                                alkalinity and be more subject to higher concentrations of ammonia.
                                Action should be taken to reduce the pH levels.
                                Please see <a href="#"> our wiki.</a></p>
                        </Fade>
                        }
                    </div>
                </Fade>;
            case ph > 9: //
                return <div className="">
                    <Fade>
                        <div onClick={this.togglePhAlert.bind(this)} className="red-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">pH {this.state.phUpdate[0.].toPrecision(2)}</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>HIGH pH</h4>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    {!this.state.hidePh &&
                    <Fade>
                        <p className="alert">You have critically low pH. At extremely low pH your fish can suffer
                            fatal alkaline burns and be more prone to higher concentrations of ammonia.
                            Your system is at risk. Take immediate action.
                            Please see <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </div>;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    nh3Alert = (nh3) => {
        
        switch (true) {
            case   nh3 <= 0.20  :
                return <div className="">
                    <div className="green-alert" onClick={this.toggleNh3Alert.bind(this)}>
                        <Row>
                            <Col lg={2}>
                                <h4><Badge
                                    className="badge-secondary-override">{this.state.nh3Update[0.].toPrecision(2)} mg/L</Badge>
                                </h4>
                            </Col>
                            <Col lg={10}>
                                <h4>NH<sub>3</sub>
                                    &nbsp; OK</h4>
                            </Col>
                        </Row>
                    </div>
                    {!this.state.hideNh3 &&
                    <Fade>
                        <p className="alert"> Keep your Nh3 levels as close to zero as possible. Also maintain a
                            lower water temperature.
                            Please see <a href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </div>;
            case nh3 > 0.20 && nh3 <= 0.4 : //
                return <Fade>
                    <div className="">
                        <div onClick={this.toggleNh3Alert.bind(this)} className="yellow-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">{this.state.nh3Update[0.].toPrecision(2)} mg/L</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>HIGH NH<sub>3</sub>
                                        &nbsp;</h4>
                                </Col>
                            </Row>
                        </div>
                        {!this.state.hideNh3 &&
                        <Fade>
                            <p className="alert"> At high levels fish may become prone to ammonia poisoning. Action
                                should be taken to reduce the ammonia content of your water.
                                Please see <a href="#"> our wiki.</a></p>
                        </Fade>
                        }
                    </div>
                </Fade>;
            case nh3 > 0.4 : //
                return <div className="">
                    <Fade>
                        <div onClick={this.toggleNh3Alert.bind(this)} className="red-alert">
                            <Row>
                                <Col lg={2}>
                                    <h4><Badge
                                        className="badge-secondary-override">{this.state.nh3Update[0.].toPrecision(2)} mg/L</Badge>
                                    </h4>
                                </Col>
                                <Col lg={10}>
                                    <h4>HIGH NH<sub>3</sub>
                                        &nbsp;</h4>
                                </Col>
                            </Row>
                        </div>
                    </Fade>
                    {!this.state.hideNh3 &&
                    <Fade>
                        <p className="alert">
                            &nbsp; At critically high levels of NH<sub>3</sub>
                            &nbsp; Your fish are at high risk of ammonia poisoning.
                            Immediate action should be taken to reduce the ammonia content of your water. More info is
                            in <a
                            href="#"> our wiki.</a></p>
                    </Fade>
                    }
                </div>;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    // todo: Break this up into it's own function to use on other projects
    componentDidMount() {
        //window.scrollTo(0, 0);
        
    }
    
    onNh3Update = nh3Update => {
        this.setState({nh3Update})
    };
    onNh3Change = nh3Values => {
        this.setState({nh3Values})
    };
    
    onPhUpdate = phUpdate => {
        this.setState({phUpdate})
    };
    
    onPhChange = phValues => {
        this.setState({phValues})
    };
    
    onTempUpdate = tempUpdate => {
        this.setState({tempUpdate})
    };
    
    onTempChange = tempValues => {
        this.setState({tempValues})
    };
    
    render() {
        let titleStyle = {
            margin: "0% 0px 100px",
            textAlign: 'center'
        };
        
        let headerStyle = {
            margin: '40px 0 200px 0',
            paddingLeft: '10%',
            paddingRight: '10%',
            color: 'white',
            width: '100%'
        };

        const projectName = 'Aquaponics Probe Simulator';
        const projectPurpose = ["Build a user interface to control the values that would be taken from probes testing water quality in an aquaponics system, namely temperature, " +
        "pH and ammonia.",
            "This program must simulate data to enable developers to control the values that must be input into the application for testing the programming logic. End users will need to receive " +
            " warnings and advice based on parameter ranges from the probes."];
        
        const projectDescription = ["This is a part of a larger Internet Of Things project."];
        const projectLearning = ['Using & customising component packages, scoping styles to components, conditionally rendering content. ', 'Better planning and further breaking up into smaller modules is needed' +
        ' in future work.'];
        const link1 = [''];
        const link2 = ['https://fullstack-adventure.com/', 'here.', 'You can read about it '];
        const link3 = [''];
        const link4 = [''];
        const whatNext = ["The project needs to insert readings into a relational database, for data visualisation, alerts and to continue programming the logic."];
        return (
            <div>
                <ReactNotifications />
                <Container className=" sensors-container">
                    <Alert/>
                  
                    <ProjectsHeader
                        projectName={projectName}
                        projectPurpose={projectPurpose}
                        projectDescription={projectDescription}
                        projectLearning={projectLearning}
                        whatNext={whatNext}
                        link1={link1} link2={link2} link3={link3} link4={link4}
                        headerStyle={headerStyle}
                        titleStyle={titleStyle}
                    />
                    <p className="reading-box">Adjust the sliders to change the values.</p>
                    
                    <Row>
                        
                        <Col lg={6}>
                            <Row>
                                <Col>
                                    <div className=" ">
                                        <div className="reading-box"><p>TEMP</p>
                                        
                                        </div>
                                        <TempSliderVertical
                                            values={this.state.tempValue}
                                            update={this.state.tempUpdate}
                                            defaultValues={defaultTemp}
                                            onUpdate={this.onTempUpdate}
                                            onChange={this.onTempChange}
                                        />
                                    </div>
                                </Col><Col>
                                
                                
                                <div className="">
                                    <div className="reading-box">
                                        <p>pH</p>
                                    </div>
                                    <PhSliderVertical
                                        values={this.state.phValue}
                                        update={this.state.phUpdate}
                                        defaultValues={defaultPh}
                                        onUpdate={this.onPhUpdate}
                                        onChange={this.onPhChange}
                                    />
                                
                                </div>
                            </Col><Col>
                                
                                
                                <div className="">
                                    <div className="reading-box">
                                        <p>
                                            NH<sub>3</sub>
                                            &nbsp;</p>
                                    </div>
                                    <Nh3SliderVertical
                                        values={this.state.nh3Update}
                                        update={this.state.nh3Update}
                                        defaultValues={defaultNh3}
                                        onUpdate={this.onNh3Update}
                                        onChange={this.onNh3Change}
                                    />
                                
                                </div>
                            </Col>
                            </Row>
                        </Col>
                        
                        <Col lg={6}>
                            
                            <Fade>
                                <div className="status-wrapper">
                                    <h3>Status</h3>
                                    {this.tempAlert(this.state.tempUpdate[0])}
                                    {this.phAlert(this.state.phUpdate[0])}
                                    {this.nh3Alert(this.state.nh3Update[0])}
                                  
                                </div>
                            
                            </Fade>
                         
                        </Col>
                      
                    </Row>
                    <div className="project-icons">
                        <a target="_blank"
                           rel="noopener noreferrer"
                           title="See the code"
                           className="footer-links"
                           href="https://github.com/Trevorjoel/portfolio/tree/master/client/src/components/projectComponents/sliders">
                            <img alt="Github icon"
                                 className="App-logo footer-icons"
                                 src={github}/>
                        </a>
                        <p>Code for this project.</p>
                    </div>
                  
                </Container>
                
       
                    <NavLink activeClassName="" tag={RRNavLink} href="/" exact to="/" >
                        <Button className="projects-back-btn" onClick={()=>{
                            // This function scrolls to the element defined
                           
                                async function goBack() {
                                    return null
                                }
                                goBack().then(()=>{
                                    let el =  document.getElementById('projects');
                                    el.scrollIntoView();
                                });
                            
                        }}>
                            Back</Button>
                    </NavLink>
            
            </div>);
    }
}


export default SlidersContainer;

