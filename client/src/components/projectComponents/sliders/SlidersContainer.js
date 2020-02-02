import React, {Component} from 'react';
import * as Assets from './assets';
import {goBackToElement} from "../../../functions/MainController";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import TempSliderVertical from "./TempSliderVertical";
import PhSliderVertical from "./PhSliderVertical";
import Nh3SliderVertical from "./Nh3SliderVertical";
import { Button, Col, Container, NavLink, Row} from 'reactstrap';
import ProjectsHeader from '../ProjectsHeader'
import {NavLink as RRNavLink} from "react-router-dom";
import github from "../../../images/hiclipart.com.png";
import StatusBars from "./StatusBars";
import LinerGraph from './LineGraph';

// todo: Fix the back to projects button

class SlidersContainer extends Component {

    state = {
        tempValue: Assets.defaultTemp.slice(),
        tempUpdate: Assets.defaultTemp.slice(),
        tempCaptureValue: Assets.defaultTemp.slice(),
        phCaptureValue: Assets.defaultPh.slice(),
        nh3CaptureValue: Assets.defaultNh3.slice(),
        phValue: Assets.defaultPh.slice(),
        phUpdate: Assets.defaultPh.slice(),
        nh3Value: Assets.defaultNh3.slice(),
        nh3Update: Assets.defaultNh3.slice(),
        tempShowNotification: {tempLowCritical:true, tempLowWarn:true, tempOptimal:true, tempHighWarn:true, tempHighCritical: true},
        phShowNotification: {phLowCritical:true, phLowWarn:true, phOptimal:true, phHighWarn:true, phHighCritical: true},
        nh3ShowNotification: {nh3Optimal:true, nh3HighWarn:true, nh3HighCritical: true},
        tempNotifyCritical: true,
        tempNotifyWarn: true,
        tempNotifyOptimal: true,
        togglePhAdvice: false,
        toggleTempAdvice: false,
        toggleNh3Advice: false,
    };
 
   
    toggleTempHandler() {
        this.setState({
            toggleTempAdvice: !this.state.toggleTempAdvice
        })
    }
    
    togglePhHandler() {
        this.setState({
            togglePhAdvice: !this.state.togglePhAdvice
        })
    }
    
    toggleNh3Handler() {
        this.setState({
            toggleNh3Advice: !this.state.toggleNh3Advice
        })
    }
    
    createNotification = (type, text, title) => {
      
        return () => {
            switch (type) {
                case 'info':
                    NotificationManager.info(<p>Message<br/>
                        <a href="https://www.w3schools.com">Visit W3Schools.com!</a> </p>,<h2>HELLO</h2>,0);
                    
                    break;
                case 'success':
                    NotificationManager.success(<p>{text}</p>, <p><bold>{title}</bold></p>, 5000);
                    break;
                case 'warning':
                    NotificationManager.warning(<p>{text}</p>, <p><bold>{title}</bold></p>, 6000);
                    break;
                case 'error':
                    NotificationManager.error(<p>{text}</p>, <p><bold>{title}</bold></p>, 6000);
                    break;
            }
        };
    };
  /*  notification = (type) => {
    
    }
    
   */

    tempStatus = (temp) => {
 
        // Make sure the temperature has settled before allowing a reading
        // Prevents firing off notifications while the sliders are being used
      setInterval(()=>{
            if (this.state.tempUpdate !== this.state.tempCaptureValue) {
                this.setState({tempCaptureValue: this.state.tempUpdate});
            }
        },2000);
      
        switch (true) {
            case   temp <= 3  :
           if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowCritical === true) {
    console.log(this.state.tempShowNotification.tempHighCritical);
               (this.createNotification('error', Assets.tempLowCritical, Assets.tempLowTitle))();
           this.setState({tempShowNotification:{tempLowCritical: false, tempLowWarn: true, tempOptimal: true, tempHighWarn: true, tempHighCritical: true
               }})
           }
           return(<div><StatusBars
                divStyle={'red-alert'}
                toggleHandler={this.toggleTempHandler.bind(this)}
                updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                symbol={String.fromCharCode(8451)}
                statusTitle={Assets.tempLowTitle}
                adviceToggle={this.state.toggleTempAdvice}
                adviceText={Assets.tempLowCritical}
                link={'https://portfolio.fullstack-adventure.com'}
           /></div>);
           
            case temp > 3 && temp <= 10 : //
                
                if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempLowWarn === true) {
                    console.log('Runs the alert');
                    (this.createNotification('warning', Assets.tempLowWarn, Assets.tempLowTitle))();
                    this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: false, tempOptimal: true, tempHighWarn: true,  tempHighCritical: true
                        }})
                }
            
                return <StatusBars
                        divStyle={'yellow-alert'}
                        toggleHandler={this.toggleTempHandler.bind(this)}
                        updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                        symbol={String.fromCharCode(8451)}
                        statusTitle={Assets.tempLowTitle}
                        adviceToggle={this.state.toggleTempAdvice}
                        adviceText={Assets.tempLowWarn}
                        link={'https://portfolio.fullstack-adventure.com'}
                    />;
                
            case temp > 10 && temp <= 18 : //
    
                if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempOptimal === true) {
                    console.log('Runs the alert');
                    (this.createNotification('success', Assets.tempOk, Assets.tempOkTitle))();
                    this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: false, tempHighWarn: true,  tempHighCritical: true
                        }})
                }
                
                return <StatusBars
                    divStyle={'green-alert'}
                    toggleHandler={ this.toggleTempHandler.bind(this)}
                    updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                    symbol={String.fromCharCode(8451)}
                    statusTitle={Assets.tempOkTitle}
                    adviceToggle={this.state.toggleTempAdvice}
                    adviceText={Assets.tempOk}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
                
            case temp > 18 && temp <= 23 : //
                if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighWarn === true) {
                    console.log('Runs the alert');
                    (this.createNotification('warning', Assets.tempHighWarn, Assets.tempHighTitle))();
                    this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: true, tempHighWarn: false,  tempHighCritical: true
                        }})
                }
                return <StatusBars
                    divStyle={'yellow-alert'}
                    toggleHandler={ this.toggleTempHandler.bind(this)}
                    updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                    symbol={String.fromCharCode(8451)}
                    statusTitle={Assets.tempHighTitle}
                    adviceToggle={this.state.toggleTempAdvice}
                    adviceText={Assets.tempHighWarn}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            

            case temp > 23: //
                if(this.state.tempUpdate === this.state.tempCaptureValue && this.state.tempShowNotification.tempHighCritical === true) {
                    console.log('Runs the alert');
                    (this.createNotification('error', Assets.tempHighCritical, Assets.tempHighTitle))();
                    this.setState({tempShowNotification:{tempLowCritical: true, tempLowWarn: true, tempOptimal: true, tempHighWarn: true,  tempHighCritical: false
                        }})
                }
                return <StatusBars
                    divStyle={'red-alert'}
                    toggleHandler={this.toggleTempHandler.bind(this)}
                    updatedValue={this.state.tempUpdate[0].toPrecision(2)}
                    symbol={String.fromCharCode(8451)}
                    statusTitle={Assets.tempHighTitle}
                    adviceToggle={this.state.toggleTempAdvice}
                    adviceText={Assets.tempHighCritical}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            default:
                return <div className="">
                    <div className="unknown-reading">CANNOT READ DATA</div>
                </div>;
        }
    };
    
    phStatus = (ph) => {
        setInterval(()=>{
            if (this.state.phUpdate !== this.state.phCaptureValue) {
                this.setState({phCaptureValue: this.state.phUpdate});
            }
        },3000);
        switch (true) {
            case   ph <= 5.5  :
                if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowCritical === true) {
                 
                    (this.createNotification('error', Assets.phLowCritical, Assets.phLowTitle))();
                    this.setState({phShowNotification:{phLowCritical: false, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: true
                        }})
                }
                return <StatusBars
                    divStyle={'red-alert'}
                    toggleHandler={this.togglePhHandler.bind(this)}
                    updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                    symbol={'pH'}
                    statusTitle={Assets.phLowTitle}
                    adviceToggle={this.state.togglePhAdvice}
                    adviceText={Assets.phLowCritical}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            case ph > 5.5 && ph <= 6.5 : //
                if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phLowWarn === true) {
        
                    (this.createNotification('warning', Assets.phLowWarn, Assets.phLowTitle))();
                    this.setState({phShowNotification:{phLowCritical: true, phLowWarn: false, phOptimal: true, phHighWarn: true, phHighCritical: true
                        }})
                }
                return  <StatusBars
                    divStyle={'yellow-alert'}
                    toggleHandler={this.togglePhHandler.bind(this)}
                    updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                    symbol={'pH'}
                    statusTitle={Assets.phLowTitle}
                    adviceToggle={this.state.togglePhAdvice}
                    adviceText={Assets.phLowWarn}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            case ph > 6.5 && ph <= 8 : //
    
                if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phOptimal === true) {
        
                    (this.createNotification('success', Assets.phOk, Assets.phOkTitle))();
                    this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: false, phHighWarn: true, phHighCritical: true
                        }})
                }
                
                return   <StatusBars
                    divStyle={'green-alert'}
                    toggleHandler={this.togglePhHandler.bind(this)}
                    updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                    symbol={'pH'}
                    statusTitle={Assets.phOkTitle}
                    adviceToggle={this.state.togglePhAdvice}
                    adviceText={Assets.phOk}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            case ph > 8 && ph <= 9 : //
                if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighWarn === true) {
        
                    (this.createNotification('warning', Assets.phHighWarn, Assets.phHighTitle))();
                    this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: false, phHighCritical: true
                        }})
                }
                return  <StatusBars
                    divStyle={'yellow-alert'}
                    toggleHandler={this.togglePhHandler.bind(this)}
                    updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                    symbol={'pH'}
                    statusTitle={Assets.phHighTitle}
                    adviceToggle={this.state.togglePhAdvice}
                    adviceText={Assets.phHighWarn}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
              
            case ph > 9: //
                if(this.state.phUpdate === this.state.phCaptureValue && this.state.phShowNotification.phHighCritical === true) {
        
                    (this.createNotification('error', Assets.phHighCritical, Assets.phHighTitle))();
                    this.setState({phShowNotification:{phLowCritical: true, phLowWarn: true, phOptimal: true, phHighWarn: true, phHighCritical: false
                        }})
                }
                return  <StatusBars
                    divStyle={'red-alert'}
                    toggleHandler={this.togglePhHandler.bind(this)}
                    updatedValue={this.state.phUpdate[0.].toPrecision(2)}
                    symbol={'pH'}
                    statusTitle={Assets.phHighTitle}
                    adviceToggle={this.state.togglePhAdvice}
                    adviceText={Assets.phHighCritical}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            default:
                return <div className="">
                    <div className="unknown reading">CANNOT READ DATA</div>
                </div>;
        }

    };
    
    nh3Status = (nh3) => {
        switch (true) {
            case   nh3 <= 0.20  :
                setInterval(()=>{
                    if (this.state.nh3Update !== this.state.nh3CaptureValue) {
                        this.setState({nh3CaptureValue: this.state.nh3Update});
                    }
                },4000);
                if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3Optimal === true) {
                    console.log(this.state.tempShowNotification.tempHighCritical);
                    (this.createNotification('success', Assets.nh3Ok, Assets.nh3TitleOk()))();
                    this.setState({nh3ShowNotification:{ nh3Optimal: false, nh3HighWarn: true, nh3HighCritical: true
                        }})
                }
                return <StatusBars
                    divStyle={'green-alert'}
                    toggleHandler={ this.toggleNh3Handler.bind(this)}
                    updatedValue={this.state.nh3Update[0].toPrecision(2)}
                    symbol={'mg/L'}
                    statusTitle={Assets.nh3TitleOk()}
                    adviceToggle={this.state.toggleNh3Advice}
                    adviceText={Assets.nh3Ok}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
           
            case nh3 > 0.20 && nh3 <= 0.4 : //
    
                if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighWarn === true) {
                    console.log(this.state.tempShowNotification.tempHighCritical);
                    (this.createNotification('warning', Assets.nh3Warn, Assets.nh3TitleHigh()))();
                    this.setState({nh3ShowNotification:{ nh3Optimal: true, nh3HighWarn: false, nh3HighCritical: true
                        }})
                }
                
                return <StatusBars
                    divStyle={'yellow-alert'}
                    toggleHandler={ this.toggleNh3Handler.bind(this)}
                    updatedValue={this.state.nh3Update[0].toPrecision(2)}
                    symbol={'mg/L'}
                    statusTitle={Assets.nh3TitleHigh()}
                    adviceToggle={this.state.toggleNh3Advice}
                    adviceText={Assets.nh3Warn}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
            case nh3 > 0.4 : //
                if(this.state.nh3Update === this.state.nh3CaptureValue && this.state.nh3ShowNotification.nh3HighCritical === true) {
                    console.log(this.state.tempShowNotification.tempHighCritical);
                    (this.createNotification('error', Assets.nh3Critical, Assets.nh3TitleHigh()))();
                    this.setState({nh3ShowNotification:{ nh3Optimal: true, nh3HighWarn: true, nh3HighCritical: false
                        }})
                }
                return  <StatusBars
                    divStyle={'red-alert'}
                    toggleHandler={ this.toggleNh3Handler.bind(this)}
                    updatedValue={this.state.nh3Update[0].toPrecision(2)}
                    symbol={'mg/L'}
                    statusTitle={Assets.nh3TitleHigh()}
                    adviceToggle={this.state.toggleNh3Advice}
                    adviceText={Assets.nh3Critical}
                    link={'https://portfolio.fullstack-adventure.com'}
                />;
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
        
        return (
            <div>
        
                <Container className=" sensors-container">
    
                  
                    <ProjectsHeader
                        projectName={Assets.projectName}
                        projectPurpose={Assets.projectPurpose}
                        projectDescription={Assets.projectDescription}
                        projectLearning={Assets.projectLearning}
                        whatNext={Assets.whatNext}
                        link1={Assets.link1} link2={Assets.link2} link3={Assets.link3} link4={Assets.link4}
                        headerStyle={Assets.headerStyle}
                        titleStyle={Assets.titleStyle}
                    />
    
                    <Row>
                        
                        <Col lg={6}>                    <h4 className="reading-box">Adjust the sliders to modify the probe readings</h4>
                            <p className="reading-box">Simulates the changes to the water quality</p>
    
                            <Row>
                                <Col>
                                    <div className=" ">
                                        <div className="reading-box"><p>TEMP</p>
                                        
                                        </div>
                                        <TempSliderVertical
                                            values={this.state.tempValue}
                                            update={this.state.tempUpdate}
                                            defaultValues={Assets.defaultTemp}
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
                                        defaultValues={Assets.defaultPh}
                                        onUpdate={this.onPhUpdate}
                                        onChange={this.onPhChange}
                                    />
                                
                                </div>
                            </Col>
                                
                                <Col>
    
                                
                                <div className="">
                                    
                                    <div className="reading-box">
                                        
    
                                        <p>
                                            NH<sub>3</sub>
                                            &nbsp;</p>
                                    </div>
                                    <Nh3SliderVertical
                                        values={this.state.nh3Update}
                                        update={this.state.nh3Update}
                                        defaultValues={Assets.defaultNh3}
                                        onUpdate={this.onNh3Update}
                                        onChange={this.onNh3Change}
                                    />
                                
                                </div>
                            </Col>
                            </Row>
                        </Col>
                        
                        <Col lg={6}>
                            
                           
                                <h4 className="reading-box">Monitor the water quality of your system.</h4>
                            <p className="reading-box">Find advice on how to fix your systems troubles.</p>
                                <div className="status-wrapper">
                                    <h3>Your System Status</h3>
                                    {this.tempStatus(this.state.tempUpdate[0])}
                                    {this.phStatus(this.state.phUpdate[0])}
                                    {this.nh3Status(this.state.nh3Update[0])}
                                  
                                </div>
    
    
                           
                        </Col>
                      
                        <LinerGraph/>
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
                           goBackToElement('projects');
                         
                        }}>
                            Back</Button>
                    </NavLink>
                <NotificationContainer/>
            </div>
           );
    }
}


export default SlidersContainer;

