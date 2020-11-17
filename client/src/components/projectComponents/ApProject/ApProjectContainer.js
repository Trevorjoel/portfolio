import React, {Component} from 'react';
import * as Assets from './Assets/ApProjectAssets';
import * as Requests from './ApFunctions/Requests';
import * as HandleState from './ApFunctions/HandleState';
import classes from './ApProjectContainer.module.scss';
import * as handleState from './ApFunctions/HandleState';
import {
    createNotificationController,
    nh3Controller,
    phController,
    tempController,
} from './ApFunctions/apFunctions';

import DateRange from "./DateRanges/DateRange";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import TempSliderVertical from "./sliders/TempSliderVertical";
import PhSliderVertical from "./sliders/PhSliderVertical";
import Nh3SliderVertical from "./sliders/Nh3SliderVertical";
import {Button, Col, Container, Modal, Row} from 'reactstrap';
import ProjectsHeader from '../ProjectsHeader'
import github from "../../../images/hiclipart.com.718cad62.png";
import LineGraph from './Graphs/LineGraph';
import TempPie from "./Graphs/PieCharts";
import HighLow from "./Graphs/DailyHigLow";
import FishProfile from "./FishProfile/fishProfile";
import BackBtn from "../ProjectBackBtn";
import AdviceContainer from './advicePages/AdviceContainer';
import SlidersModal from "./sliders/SlidersModal";
import moment from 'moment';
import {Tab, Tabs} from "react-bootstrap";
import LoadingContainer from "./Loading/LoadingContainer";
import ComingSoon from "./Loading/ComingSoon";
import FishSwitch from "./FishThumb/FishSwitch";
import LiveMonitorDescription from "./Descriptions/LiveMonitorDescription";
import Logo from './Assets/logos/logo-03.png'
import SettingsContainer from "./Settings/SettingsContainer";
import DropdownFish from "./DateRanges/DropDownFish";
import Iframe from "../../Iframe";
// Todo: Create id's to navigate the demo app, example: to the caring for trout pages
//todo: Conditionally render buttons in the settings area

class ApProjectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // Testing sliders controlled components
            tempValue: [],
            phValue: [],
            nh3Value: [],
            tempUpdate: [],
            phUpdate: [],
            nh3Update: [],
            // Settings sliders controlled components
            tempSettingsUpdate: [],
            tempSettingsValue: [],
            phSettingsUpdate: [],
            phSettingsValue: [],
            nh3SettingsUpdate: [],
            nh3SettingsValue: [],
            // Used in the alert feature setTimeOut
            tempCaptureValue: Assets.defaultTemp.slice(),
            phCaptureValue: Assets.defaultPh.slice(),
            nh3CaptureValue: Assets.defaultNh3.slice(),
            activeSliders: false, // show & hide sliders
            activeDescription: false, // Show & hide description
            setButtonText: "Test Alerts",
            // Ensures that correct notifications are showing
            tempShowNotification: {
                tempLowCritical: true,
                tempLowWarn: true,
                tempOptimal: false,
                tempHighWarn: true,
                tempHighCritical: true
            },
            phShowNotification: {
                phLowCritical: true,
                phLowWarn: true,
                phOptimal: false,
                phHighWarn: true,
                phHighCritical: true
            },
            nh3ShowNotification: {
                nh3Optimal: false,
                nh3HighWarn: true,
                nh3HighCritical: true},
            latestTime: '',
            numberOfReadings: 169, // default readings to show onload
            fishId: 1, // Default fish to show on load
            fish: [], //  All fish in database
            startPeriod: '', // store time period
            endPeriod: '',
            userId: 1, // default user onload
            settingName: '',
            settings: [],
            tempDomain: [], // todo: find a better way to pass domains into the graphs

            // NEW STATE

            fishSettingName: 'Loading...', // Pass in  fish.fish_name or settings.setting_name
            fishImage: 'Loading...', // Pass in URL or function to render image
            navTo: '#', // Pass in string with element ID
            systemParams: null,
            storedParams: [],
            readings: [], // keep the readings in here?
            setCustom: false

        };
        // Bind the imported functions
        this.tempController = tempController.bind(this);
        this.phController = phController.bind(this);
        this.nh3Controller = nh3Controller.bind(this);
        this.createNotificationController = createNotificationController.bind(this);
        this.addReadingsToDB = Requests.addReadingsToDB.bind(this);
        this.getPreviousTime = Requests.getPreviousTime.bind(this);
        this.getFish = Requests.getFish.bind(this);
        this.saveTempSettings = HandleState.saveTempSettings.bind(this);
        this.savePhSettings = HandleState.savePhSettings.bind(this);
        this.saveNh3Settings = HandleState.saveNh3Settings.bind(this);
        this.addSettingsToDB = Requests.addSettingsToDB.bind(this);
        this.selectUserParameters = Requests.selectUserParameters.bind(this);
        this.resetTempSettings = HandleState.resetTempSettings.bind(this);
        this.resetPhSettings = HandleState.resetPhSettings.bind(this);
        this.resetNh3Settings = HandleState.resetNh3Settings.bind(this);
        this.resetUserSettings = HandleState.resetUserSettings.bind(this);
        this.saveUserSettings = HandleState.saveUserSettings.bind(this);
        this.handleSettingNameChange = HandleState.handleSettingNameChange.bind(this); // Is this used?
        this.handleValidSubmit = HandleState.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = HandleState.handleInvalidSubmit.bind(this);
        this.getSettings = Requests.getSettings.bind(this);
        this.settingNameWriteToDB = HandleState.settingNameWriteToDB.bind(this);
        this.updateAllStateForView = HandleState.updateAllStateForView.bind(this);
        this.mapFishSetState = HandleState.mapFishSetState.bind(this);
        this.mapFish = HandleState.mapFish.bind(this);
        this.mapUserSetState = HandleState.mapUserSetState.bind(this);
        this.handleToggleSliders = HandleState.handleToggleSliders.bind(this);
        this.changeHandler = HandleState.changeHandler.bind(this);
        this.toggleHandler = HandleState.toggleHandler.bind(this);
        this.mapReadingsRangeSetState = HandleState.mapReadingsRangeSetState.bind(this);
        this.mapSettings = HandleState.mapSettings.bind(this);
        // References for the sticky history component
        this.topTriggerEl = React.createRef();
        this.containerEl = React.createRef();
        this.stickyEl = React.createRef();
        this.bottomTriggerEl = React.createRef();

    }
    // todo: You should be using ref callbacks, never normal DOM traversal, to get access to nodes in componentDidMount.
    //  https://reactjs.org/docs/refs-and-the-dom.html
    handleScroll = (event) => {

        if (this.topTriggerEl.current !== null) { // Check that Aquaponics page has rendered. Was causing a bug when changing pages meaning the
            // Check that view is between the correct ranges (In the history components)
            // eslint-disable-next-line no-restricted-globals
            let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
            if (window.pageYOffset > this.topTriggerEl.current.offsetTop && window.pageYOffset < this.bottomTriggerEl.current.offsetTop && width > 400) {
                document.getElementById("sticky-el").classList.add(classes.StickyElement)
                document.getElementById("sticky-cont").classList.add(classes.AddHeight)

            } else {
                document.getElementById("sticky-el").classList.remove(classes.StickyElement)
                document.getElementById("sticky-cont").classList.remove(classes.AddHeight)

            }
        }
    }

    // handles the navigation in the advice component
    handleObservations = () => {
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '100px',
        } // original root margin value 100px
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(
                        `nav li a[href="#${id}"]`).parentElement.classList.add('active');
                } else {
                    document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
                }
            });
        }, options);

        // Track all sections that have an `id` applied
        document.querySelectorAll('section[id]').forEach((section) => {
            observer.observe(section);
        });


    }

    // create a number between hi warn and low warn
    setTarget = (lowWarn, highWarn)=>{
        const a =  lowWarn + highWarn;
        const target = a/2;
        return target
    }

    componentDidMount() {

        this.getPreviousTime();
        this.mapFishSetState(Requests.selectFishType, this.state.fishId);
        this.mapFish(Requests.getFish);
        this.mapSettings(Requests.getSettings);
        window.addEventListener('scroll', this.handleScroll);
    }


    onFishChange = fishId => {
        this.mapFishSetState(Requests.selectFishType, fishId);
    };

    onSettingsChange = settingName => {

        const checkCustom = this.state.fish.find(item => item.fish_name + '_custom' === settingName);
        if (typeof checkCustom === 'undefined') {
            this.mapUserSetState(this.selectUserParameters, this.state.userId, settingName);
        } else {
            this.setState({tempDomain: [checkCustom.temp_low_critical, checkCustom.temp_high_critical,


                ].slice()});
            this.mapUserSetState(this.selectUserParameters, this.state.userId, settingName);
        }

    };

    render() {

        let demos = {
            soundcloud:
                '<iframe class="iframe-blog" scrolling="yes" frameborder="no" allow="autoplay" src=https://fullstack-adventure.com/contact/"></iframe>',

        };
        // This is to show test sliders for the demonstration. it wont be in the final app
        let testSliders = null;
        if(this.state.activeSliders){
            testSliders =(
                <div className={classes.SlidersWrap}>
                    <Row>
                        <h4 className={classes.h5}>Substitute probe readings</h4>

                    </Row><Row>
                    <Col lg={4} md={4} sm={4} xs={4}>
                        <div className={classes.SlidersContainer}>
                            <div className=""><p>TEMP</p>

                            </div>
                            <TempSliderVertical
                                values={this.state.tempValue}
                                update={this.state.tempUpdate}
                                onUpdate={(value) => this.changeHandler('tempUpdate', value)}
                                onChange={(value) => this.changeHandler('tempChange', value)}
                            />
                        </div>
                    </Col><Col lg={4} md={4} sm={4} xs={4}>
                    <div className={classes.SlidersContainer}>
                        <div className="">
                            <p>pH</p>
                        </div>
                        <PhSliderVertical
                            values={this.state.phValue}
                            update={this.state.phUpdate}
                            defaultValues={Assets.defaultPh}
                            onUpdate={(value) => this.changeHandler('phUpdate', value)}
                            onChange={(value) => this.changeHandler('phChange', value)}
                        />
                    </div>
                </Col><Col lg={4} md={4} sm={4} xs={4}>
                    <div className={classes.SlidersContainer}>
                        <div className="">
                            <p>
                                NH<sub>3</sub>
                                &nbsp;</p>
                        </div>
                        <Nh3SliderVertical
                            values={this.state.nh3Value}
                            update={this.state.nh3Update}
                            defaultValues={Assets.defaultNh3}
                            onUpdate={(value) => this.changeHandler('nh3Update', value)}
                            onChange={(value) => this.changeHandler('nh3Change', value)}

                        />
                    </div>
                </Col>
                </Row>
                    <Button color="info" onClick={() => {
                        this.addReadingsToDB();
                    }} size="md" block>Enter readings into database.</Button>

                    <SlidersModal/>
                </div>
            );

        }

        // This is to show description of the project. it wont be in the final project
        let projectDescription = null;
        if(this.state.activeDescription) {
            projectDescription =
                (
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
                                    allowFullScreen/>
                        </div>
                        <hr className="divider"/>
                    </div>
                );
        };
        // Shows a loading animation if data does not load from API
        const {systemParams} = this.state;
        if (systemParams === null) {
            return <LoadingContainer/>;
        }
        this.handleObservations()

        return (
            <div>
                <Container className={classes.SensorsContainer}>

                    {projectDescription}
                    <Button size="sm" className={classes.ToggleButton} type="button"
                            onClick={(value) => this.toggleHandler('activeDescription', value)}>
                        Development Details!
                    </Button>
                    <div className={classes.ProjectContainer}>

                        <h1 className={classes.Title}><strong>Aquaponics System Monitor</strong></h1>
                        <img style={{width: "200px", marginBottom: "40px"}} src={Logo}/>
                        <p className={classes.SectionText}>Monitor water quality, record history and advise aquaponics system users</p>
                        <hr className="divider"/>


                        <Row>
                            <Col lg={12}>
                                <br/>
                                <h2 className={classes.SecondaryTitle}><strong>Live
                                    Monitor </strong><LiveMonitorDescription/></h2>
                                <p className={classes.SectionText}>Information about your system such as, fish stocked,
                                    recommended water quality parameters and water tank/grow bed capacity.</p>
                                <div className={classes.StatusWrapper}>

                                    <FishProfile
                                        allFish={this.state.fish}
                                        viewParams={this.state.systemParams}
                                        selectedName={this.state.fishSettingName}
                                        onFishChange={this.onFishChange}
                                        allSettings={this.state.settings}
                                        onSettingsChange={this.onSettingsChange}
                                    />
                                </div>
                                <h2 className={classes.SecondaryTitle}><strong>Current Status</strong></h2>

                                <p className={classes.SectionText}>The parameters shown are updated live or in
                                    very short
                                    frequencies to give an instant picture of the water quality and alert the
                                    user if there are problems.</p>
                                <div className={classes.AccordionContainer}>
                                    <div className={classes.BarsWrapper}
                                         title="Live readings from your system & information to help">
                                        {this.tempController(this.state.tempUpdate[0])}
                                        {this.phController(this.state.phUpdate[0])}
                                        {this.nh3Controller(this.state.nh3Update[0])}
                                    </div>

                                    {testSliders}
                                    {<Button title="See the system working" className={classes.TestButton}
                                             onClick={() => {
                                                 this.handleToggleSliders();
                                             }} size="sm"> {this.state.setButtonText} </Button>}
                                </div>

                            </Col>
                        </Row>
                        <hr className="divider"/>
                        <div>
                            <h2 className="reading-box ">View historical data</h2>
                            <p className={classes.SectionText}>At intervals of 1 hour the current water quality readings
                                are entered into the database and represented in graphs for tracking and retrospective
                                troubleshooting. </p>
                            <br/>
                            <div ref={this.topTriggerEl} className="check" id="sticky-trigger"></div>
                            <div id="sticky-cont" ref={this.containerEl} className={classes.StickyContainer}>

                                <div id="sticky-el" ref={this.stickyEl}>
                                    <DateRange
                                        onDaySelect={this.mapReadingsRangeSetState}
                                        selectedName={this.state.fishSettingName}
                                        allFish={this.state.fish}
                                        onFishChange={this.onFishChange}
                                        allSettings={this.state.settings}
                                        onSettingsChange={this.onSettingsChange}
                                    />
                                </div>
                                <div className={classes.StatusWrapper}>
                                    <Tabs className={classes.TabContainer} defaultActiveKey="temp"
                                          id="uncontrolled-tab-example">
                                        <Tab eventKey="temp" title="Temperature"
                                             style={{
                                                 background: "white",
                                                 color: "black",
                                                 borderRadius: "0px 0px 20px 20px"
                                             }}>
                                            <Row>
                                                <Col lg={12}>
                                                    <h1 className={classes.GraphHead}>Temperature</h1>

                                                    <h6 className={classes.GraphSub}>{this.state.startPeriod}
                                                        <br/> {this.state.endPeriod}</h6>

                                                    <FishSwitch
                                                        selectedName={this.state.fishSettingName}
                                                        size={150}
                                                    />

                                                    <DropdownFish allFish={this.state.fish}
                                                                  selectedName={this.state.fishSettingName}
                                                                  onFishChange={this.onFishChange}
                                                                  allSettings={this.state.settings}
                                                                  onSettingsChange={this.onSettingsChange}
                                                    />

                                                    <h3 className={classes.GraphTitle}>Hourly readings</h3>


                                                    <LineGraph
                                                        viewParams={this.state.systemParams}
                                                        readings={this.state.readings}
                                                    />
                                                </Col>
                                                <Col lg={12}><br/>
                                                    <h3 className={classes.GraphTitle}>Readings by alert category</h3>

                                                    <TempPie
                                                        viewParams={this.state.systemParams}
                                                        readings={this.state.readings}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={12}>
                                                    <h3 className={classes.GraphTitle}>Highest, lowest and average daily
                                                        readings</h3>

                                                    <HighLow
                                                        viewParams={this.state.systemParams}
                                                        readings={this.state.readings}
                                                    />
                                                </Col>
                                            </Row>
                                        </Tab>
                                        <Tab eventKey="ph" title="pH">
                                            <ComingSoon/>
                                        </Tab>
                                        <Tab eventKey="nh3" title="Nh3">
                                            <ComingSoon/>
                                        </Tab>
                                    </Tabs>
                                </div>
                                <Row/>

                            </div>
                            <div ref={this.bottomTriggerEl} id="sticky-end"></div>
                        </div>
                        <hr className="divider"/>

                        <h2 className="reading-box">Settings</h2>
                        <p className={classes.SectionText}>If you are not satisfied with the preset alert triggers for
                            the selected fish or want
                            entirely new customizations, add your own using the sliders in this section.</p>
                        <br/>
                        <div className={classes.StatusWrapper}>
                            <SettingsContainer
                                fishSettingName={this.state.fishSettingName}
                                systemParams={this.state.systemParams}
                                minDomain={this.state.tempDomain[0]}
                                maxDomain={this.state.tempDomain[1]}
                                tempUpdate={this.state.tempSettingsUpdate}
                                nh3Update={this.state.nh3SettingsUpdate}
                                phUpdate={this.state.phSettingsUpdate}
                                handleChange={this.changeHandler}
                                resetTempSettings={this.resetTempSettings}
                                resetPhSettings={this.resetPhSettings}
                                resetNh3Settings={this.resetNh3Settings}
                                saveTempSettings={this.saveTempSettings}
                                savePhSettings={this.savePhSettings}
                                saveNh3Settings={this.saveNh3Settings}
                                resetUserSettings={this.resetUserSettings}
                                handleValidSubmit={this.handleValidSubmit}
                                handleInvalidSubmit={this.handleInvalidSubmit}
                                handleSettingNameChange={this.handleSettingNameChange}
                                setCustom={this.state.setCustom}
                            />

                        </div>
                        <br/>

                        <hr className="divider"/>
                        <h2 className="reading-box">System Advice</h2>
                        <p className={classes.SectionText}>This area provides advice and troubleshooting on your
                            system</p>
                        <div className={classes.StatusWrapper}>
                            <AdviceContainer/>
                        </div>
                        <h2 className="reading-box">Give feedback and sign up for more info.</h2>
                        <p className={classes.SectionText}>We'd love to hear back from you.</p>
                        <div id="container">
                            <Iframe iframe={demos["soundcloud"]} allow="autoplay"/>
                        </div>
                        <hr className="divider"/>
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
                    {/* Debug*/}
                    {/*<ReadingsTable readings={this.state.readings}/>*/}

                </Container>
                <BackBtn/>
                <NotificationContainer/>
                <p>“At one time in the world there were woods that no one owned”
                    <br/> ― Cormac McCarthy, Child of God </p>
            </div>

        );
    }
}
export default ApProjectContainer;

