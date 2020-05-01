import React, {Component} from 'react';
import * as Assets from './Assets/ApProjectAssets';
import ReadingsTable from "./ReadingsTable";
import {tempController,
    phController,
    nh3Controller,
    createNotificationController,
    addReadingsToDB,
    getPreviousTime,
    selectAllReadings,

} from './ApProjectCtrl/apProjectControllers';
import DateRange from "./DateRanges/DateRange";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import TempSliderVertical from "./sliders/TempSliderVertical";
import PhSliderVertical from "./sliders/PhSliderVertical";
import Nh3SliderVertical from "./sliders/Nh3SliderVertical";
import { Button, Col, Container, Row} from 'reactstrap';
import ProjectsHeader from '../ProjectsHeader'
import github from "../../../images/hiclipart.com.718cad62.png";
import LinerGraph from './Graphs/LineGraph';
import TempPie from "./Graphs/PieCharts";
import HighLow from "./Graphs/DailyHigLow";
import FishProfile from "./fishProfile";
import TroutInfo from "./advicePages/TroutInfo"
import TemperatureInfo from "./advicePages/TemperatureInfo";
import BackBtn from "../ProjectBackBtn";

class ApProjectContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tempValue: Assets.defaultTemp.slice(),
            tempUpdate: Assets.defaultTemp.slice(),
            tempCaptureValue: Assets.defaultTemp.slice(),
            phCaptureValue: Assets.defaultPh.slice(),
            nh3CaptureValue: Assets.defaultNh3.slice(),
            phValue: Assets.defaultPh.slice(),
            phUpdate: Assets.defaultPh.slice(),
            nh3Value: Assets.defaultNh3.slice(),
            nh3Update: Assets.defaultNh3.slice(),
            tempShowNotification: {tempLowCritical:true, tempLowWarn:true, tempOptimal:false, tempHighWarn:true, tempHighCritical: true},
            phShowNotification: {phLowCritical:true, phLowWarn:true, phOptimal:false, phHighWarn:true, phHighCritical: true},
            nh3ShowNotification: {nh3Optimal:false, nh3HighWarn:true, nh3HighCritical: true},
            togglePhAdvice: false,
            toggleTempAdvice: false,
            toggleNh3Advice: false,
            latestTime: '',
            readings:[],
            numberOfReadings:169,
        };
        // Bind the imported functions
        this.tempController = tempController.bind(this);
        this.phController = phController.bind(this);
        this.nh3Controller = nh3Controller.bind(this);
        this.createNotificationController = createNotificationController.bind(this);
        this.addReadingsToDB = addReadingsToDB.bind(this);
        this.getPreviousTime = getPreviousTime.bind(this);
        this.selectAllReadings = selectAllReadings.bind(this);
        //this.selectWeek = selectWeek.bind(this)
    }
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
    mapReadingsSetState = (requestFunction, numberOfReadings) =>{
        requestFunction(numberOfReadings)
            .then( query => {
                    const returnedReadings = query.database1.slice();
                    const updatedReadings = returnedReadings.map(
                        reading =>{
                            return{
                                ...reading
                            }
                        }
                    );
                    this.setState({readings:updatedReadings})

                }
            )
    }
    // todo: pass a function into the DateRange component that changes the state for start/end dates
    componentDidMount() {

        // When user arrives on the page make sure to arrive at the top of the page
      //  window.scrollTo(0, 0);


        this.mapReadingsSetState(selectAllReadings, 169);
        // own function
        this.getPreviousTime();
      //  this.selectAllReadings()


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
            <div >
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
                        embedVideo={Assets.embedVideo}
                    />
                    <div className='iframe-container'>

                        <iframe width="1202" height="676" src="https://www.youtube.com/embed/YOv1BIEHRS0"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen> </iframe> </div>
                    <hr className="divider"/>
                    <h2 className="reading-box ">Live System Monitor</h2>
                    <p className="reading-box row-margin">Receive live alerts and monitor your system from your telephone.
                        <br/>Get the advice you need when you need it.</p>
                    <Row >
                        <Col lg={6}>
                            <h4 className="reading-box">Substitute probe readings</h4>
                            <p className="reading-box">Adjust the sliders to simulate changes in water quality readings.</p>
                            <Row >
                                <Col>
                                    <div className="sliders-container">
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
                                <div className="sliders-container ">
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
                                    <div className="sliders-container">
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
                            <br/>
                            <h4 className="reading-box">Monitor & troubleshoot your system in real-time</h4>
                            <p className="reading-box">Find targeted advice to keep your system safe.</p>
                            <div className="status-wrapper">
                                <FishProfile/>
                                {this.tempController(this.state.tempUpdate[0])}
                                {this.phController(this.state.phUpdate[0])}
                                {this.nh3Controller(this.state.nh3Update[0])}
                                <Button color="info" onClick={()=>{
                                    this.addReadingsToDB();
                                }} size="lg" block>Enter readings into database.</Button>
                            </div>

                        </Col>

                    </Row>
                    <hr className="divider"/>
                    <div className="readings-container ">
                        <h2 className="reading-box ">View historical data</h2>
                        <p className="reading-box row-margin">Track your previous readings to make better decisions for your systems future.</p><br/>
                    </div>
                    <Row className="row-margin ">

                        <Col lg={12}>
                            <DateRange click={this.mapReadingsSetState}/>
                           <LinerGraph readings={this.state.readings}/>
                        </Col>
                        <Col lg={12}><br/>
                            <p className="reading-box">Temperature readings by category.</p>
                            <TempPie readings={this.state.readings}/></Col>
                    </Row><Row className="row-margin">
                    <Col lg={12}>
                        <p className="reading-box">Daily highest and lowest temperatures: 7 day period</p>
                        <HighLow readings={this.state.readings}/>
                    </Col>
                    <Col lg={12}>

                    </Col>
                </Row>
                    <Row/>
                    <hr className="divider"/>
                    <h2 className="reading-box ">System Advice pages</h2>
                    <p className="reading-box row-margin">Get the advice you need when you need it.</p>
                    <Row>
                        <Col lg={6}>
                            <TroutInfo/>
                        </Col>
                        <Col lg={6}>
                            <TemperatureInfo/>
                        </Col>
                    </Row>
                    <ReadingsTable readings={this.state.readings}/>
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
           <BackBtn/>
                <NotificationContainer/>
            </div>
        );
    }
}


export default ApProjectContainer;
