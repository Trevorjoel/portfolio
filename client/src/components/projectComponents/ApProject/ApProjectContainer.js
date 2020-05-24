import React, {Component} from 'react';
import * as Assets from './Assets/ApProjectAssets';
import classes from './ApProjectContainer.module.css';
import ReadingsTable from "./ReadingsTable";
import {tempController,
    phController,
    nh3Controller,
    createNotificationController,
    addReadingsToDB,
    getPreviousTime,
    selectReadings,
    selectFishType,
    getFish,
} from './ApFunctions/apFunctions';
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
import BackBtn from "../ProjectBackBtn";
import AdviceContainer from './advicePages/AdviceContainer';
import StatusAccordion from './StatusAccordion/StatusAcordion';
import SlidersModal from "./sliders/SlidersModal";

// todo: New fish has been added to the database. Plan and code a feature to allow the user to select different fish.
//         pattern has been created.

// Todo: Create the feature for the user to be able to use the date range selector. Component DateRange

class ApProjectContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // import default
            tempValue: [],
            phValue: [], // follow this pattern
            nh3Value: [],

            tempUpdate: [],
            phUpdate: [],
            nh3Update: [],
            // Used in the alert feature setTimeOut
            tempCaptureValue: Assets.defaultTemp.slice(),
            phCaptureValue: Assets.defaultPh.slice(),
            nh3CaptureValue: Assets.defaultNh3.slice(),

            activeSliders: false, // show & hide sliders
            activeDescription:false, // Show & hide description
            setColSize: 12,
            tempShowNotification: {tempLowCritical:true, tempLowWarn:true, tempOptimal:false, tempHighWarn:true, tempHighCritical: true},
            phShowNotification: {phLowCritical:true, phLowWarn:true, phOptimal:false, phHighWarn:true, phHighCritical: true},
            nh3ShowNotification: {nh3Optimal:false, nh3HighWarn:true, nh3HighCritical: true},
            togglePhAdvice: false,
            toggleTempAdvice: false,
            toggleNh3Advice: false,
            latestTime: '',
            readings:[],
            numberOfReadings:169,
            fishParams:[],
            fishId:1,
            fish:[],
        };
        // Bind the imported functions
        this.tempController = tempController.bind(this);
        this.phController = phController.bind(this);
        this.nh3Controller = nh3Controller.bind(this);
        this.createNotificationController = createNotificationController.bind(this);
        this.addReadingsToDB = addReadingsToDB.bind(this);
        this.getPreviousTime = getPreviousTime.bind(this);
        this.selectAllReadings = selectReadings.bind(this);
        this.getFish = getFish.bind(this);
        this.handleToggleDescription = this.handleToggleDescription.bind(this);
        this.handleToggleSliders = this.handleToggleSliders.bind(this);
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

    mapFishSetState = (requestFunction, fishId) =>{
        requestFunction(fishId)
            .then( query => {
                    const returnedFishParams = query;
                    this.setState({
                        fishParams:returnedFishParams,
                        // Set state here
                        tempValue: [returnedFishParams.temp_target].slice(),
                        tempUpdate: [returnedFishParams.temp_target].slice(),
                        phValue: [returnedFishParams.ph_target].slice(),
                        phUpdate: [returnedFishParams.ph_target].slice(),
                        nh3Value: [returnedFishParams.nh3_target].slice(),
                        nh3Update: [returnedFishParams.nh3_target].slice(),
                    })
            }
        )
    }

    mapFish = (requestFunction) =>{
        requestFunction()
            .then( query => {
                    const allFish = query.database1.slice();
                    this.setState({fish:allFish.slice()})
                }
            )
    }
    handleToggleSliders(){
        this.setState({
            activeSliders: !this.state.activeSliders,
            setColSize: this.state.setColSize === 12 ? 6 : 12
        })
    }
    handleToggleDescription(){
     this.setState({
         activeDescription: !this.state.activeDescription,

     })
    }


    mapReadingsRangeSetState = (requestFunction, from, to) =>{
        requestFunction(from, to)
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
        //this.mapReadingsSetState(selectReadings, 169);
        // own function
        this.getPreviousTime();
      //  this.selectAllReadings()

        this.mapFishSetState(selectFishType, this.state.fishId);
        this.mapFish(getFish);
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

    onFishChange = fishId => {
        this.mapFishSetState(selectFishType,fishId)
    };

    render() {

        return (
            <div >
                <Container className=" sensors-container">

                    {this.state.activeDescription &&
                        <div>
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
                        </div>
                    }
                    <Button size="sm" className={classes.ToggleButton} type="button" onClick={this.handleToggleDescription}>
                        Development Details!
                    </Button>
                    <div className={classes.ProjectContainer}>

                        <h1 className="reading-box "><strong>Aquaponics System Monitor</strong> (Prototype)</h1>
                    <p className="reading-box ">Receive live alerts and monitor your system from your telephone.
                        <br/>Get the advice you need when you need it.</p>

                    <Row >
                        {this.state.activeSliders &&
                        <Col lg={this.state.setColSize}>
                            <div><SlidersModal/>
                            <h4 className="reading-box">Substitute probe readings</h4>
                            <p className="reading-box">Adjust the sliders to simulate changes in water quality
                                readings.</p>
                            <Row className="row-class">
                                <Col lg={4} className="">
                                    <div className={classes.SlidersContainer}>
                                        <div className="reading-box"><p>TEMP</p>

                                        </div>
                                        <TempSliderVertical
                                            values={this.state.tempValue}
                                            update={this.state.tempUpdate}
                                            // defaultValues={Assets.defaultTemp}
                                            onUpdate={this.onTempUpdate}
                                            onChange={this.onTempChange}
                                        />
                                    </div>
                                </Col><Col lg={4} >
                                <div className={classes.SlidersContainer}>
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
                                <Col lg={4} >
                                    <div className={classes.SlidersContainer}>
                                        <div className="reading-box">
                                            <p>
                                                NH<sub>3</sub>
                                                &nbsp;</p>
                                        </div>
                                        <Nh3SliderVertical
                                            values={this.state.nh3Value}
                                            update={this.state.nh3Update}
                                            defaultValues={Assets.defaultNh3}
                                            onUpdate={this.onNh3Update}
                                            onChange={this.onNh3Change}
                                        />
                                    </div>
                                </Col>

                            </Row>

                            </div></Col>
                        }
                        <Col lg={this.state.setColSize}>

                            <br/>
                            <h4 className="reading-box"><strong>Live Monitor</strong></h4>
                            <p className="reading-box">See the current status of your system</p>
                            <h3>YOUR SYSTEM</h3>
                            <div className={classes.StatusWrapper}>

                                <FishProfile
                                    allFish={this.state.fish}
                                    fishParams={this.state.fishParams}
                                    onChange={this.onFishChange}
                                />


                            </div>

                            <div className={classes.BarsWrapper}>
                                <h5>System Parameters</h5>
                            {this.tempController(this.state.tempUpdate[0])}
                            {this.phController(this.state.phUpdate[0])}
                            {this.nh3Controller(this.state.nh3Update[0])}
                            {/*  <Button color="info" onClick={()=>{
                                    this.addReadingsToDB();
                                }} size="lg" block>Enter readings into database.</Button>*/}

                            </div>
                            {  <Button className={classes.TestButton} onClick={()=>{
                                this.handleToggleSliders();
                            }} size="sm" ><p>Test the app</p></Button>}
                        </Col>

                    </Row>
                    <hr className="divider"/>
                    <div className="readings-container ">
                        <h2 className="reading-box ">View historical data</h2>
                        <p className="reading-box ">Track your previous readings to make better decisions for your systems future.</p><br/>
                    </div>
                    <Row className="row-margin ">

                        <Col lg={12}>
                            <DateRange
                                onDaySelect={this.mapReadingsRangeSetState}
                            />
                           {/* todo: pass in number of days or from date to date*/}
                            <h5 className="reading-box">Hourly temperature readings</h5>
                            <p>Over {"number of days"} period</p>
                           <LinerGraph readings={this.state.readings}/>
                        </Col>
                        <Col lg={12}><br/>
                            <h5 className="reading-box">Temperature readings by alert category</h5>
                            <p>Over {"number of days"} period</p>
                            <TempPie readings={this.state.readings}/></Col>
                    </Row><Row className="row-margin">
                    <Col lg={12}>
                        <h5 className="reading-box">Highest, lowest and average daily temperatures</h5>
                        <p>Over {"number of days"} period</p>
                        <HighLow readings={this.state.readings}/>
                    </Col>
                    <Col lg={12}>

                    </Col>
                </Row>
                    <Row/>
                    <hr className="divider"/>
                    <AdviceContainer />

                    <Row>

                        <Col lg={6}>

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
                    </div>
                </Container>


           <BackBtn/>

                <NotificationContainer/>
            </div>

        );
    }
}


export default ApProjectContainer;
