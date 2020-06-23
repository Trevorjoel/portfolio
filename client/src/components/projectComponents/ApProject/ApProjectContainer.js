import React, {Component} from 'react';
import * as Assets from './Assets/ApProjectAssets';
import classes from './ApProjectContainer.module.scss';
import {
    addReadingsToDB,
    createNotificationController,
    getFish,
    getPreviousTime,
    nh3Controller,
    phController,
    selectFishType,
    selectReadings,
    tempController,
} from './ApFunctions/apFunctions';
import DateRange from "./DateRanges/DateRange";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import TempSliderVertical from "./sliders/TempSliderVertical";
import PhSliderVertical from "./sliders/PhSliderVertical";
import Nh3SliderVertical from "./sliders/Nh3SliderVertical";
import {Button, Col, Container, Row} from 'reactstrap';
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
import {Tab, Tabs, Form} from "react-bootstrap";
import SettingsTemp from "./Settings/SettingsTemp";
import SettingsPh from "./Settings/SettingsPh";
import SettingsNh3 from "./Settings/SettingsNh3";
import settings_classes from './Settings/SettingsContainer.module.scss';
import LoadingContainer from "./Loading/LoadingContainer";
import ComingSoon from "./Loading/ComingSoon";
import ReadingsTable from "./ReadingsTable";
import FishThumb from "./FishThumb/FishThumb";
import LiveMonitorDescription from "./Descriptions/LiveMonitorDescription";
import AdviceWiki from "./advicePages/AdviceWiki";

// Todo: Create id's to navigate the demo app, example: to the caring for trout pages
//todo: Conditionally render buttons in the settings area

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
            setButtonText: "TEST IT",
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
            nh3ShowNotification: {nh3Optimal: false, nh3HighWarn: true, nh3HighCritical: true},
            togglePhAdvice: false,
            toggleTempAdvice: false,
            toggleNh3Advice: false,
            latestTime: '',
            readings: [],
            numberOfReadings: 169,
            fishParams: null,
            fishId: 1,
            fish: [],
            startPeriod: '',
            endPeriod: '',
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
        this.resetTempSettings = this.resetTempSettings.bind(this);
        this.resetPhSettings = this.resetPhSettings.bind(this);
        this.resetNh3Settings = this.resetNh3Settings.bind(this);
        //this.handleScroll = this.handleScroll.bind(this);
        this.topTriggerEl = React.createRef();
        this.containerEl = React.createRef();
        this.stickyEl = React.createRef();
        this.bottomTriggerEl = React.createRef();

    }

    handleObservations = () => {

console.log("Handle Observations Runs")
        let options = {
            root: document.querySelector('#scrollArea'),
            rootMargin: '100px',

        }
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio > 0) {
                    document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
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

    resetTempSettings = () => {
        this.setState({

            tempSettingsUpdate: [this.state.fishParams.temp_low_critical,
                this.state.fishParams.temp_low_warn,
                this.state.fishParams.temp_high_warn,
                this.state.fishParams.temp_high_critical].slice(),
        })
    }

    resetPhSettings = () => {
        this.setState({

            phSettingsUpdate: [this.state.fishParams.ph_low_critical,
                this.state.fishParams.ph_low_warn,
                this.state.fishParams.ph_high_warn,
                this.state.fishParams.ph_high_critical].slice(),
        })
    }

    resetNh3Settings = () => {
        this.setState({

            nh3SettingsUpdate: [this.state.fishParams.nh3_warn,
                this.state.fishParams.nh3_critical].slice(),
        })
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

    mapReadingsSetState = (requestFunction, numberOfReadings) => {
        requestFunction(numberOfReadings)
            .then(query => {
                    const returnedReadings = query.database1.slice();
                    const updatedReadings = returnedReadings.map(
                        reading => {
                            return {
                                ...reading
                            }
                        }
                    );
                    this.setState({readings: updatedReadings})
                }
            )
    }

    mapFishSetState = (requestFunction, fishId) => {
        requestFunction(fishId)
            .then(query => {
                    const returnedFishParams = query;
                    this.setState({
                        fishParams: returnedFishParams,
                        // Set state here
                        tempSettingsValue: [returnedFishParams.temp_low_critical,
                            returnedFishParams.temp_low_warn,
                            returnedFishParams.temp_high_warn,
                            returnedFishParams.temp_high_critical].slice(),
                        tempSettingsUpdate: [returnedFishParams.temp_low_critical,
                            returnedFishParams.temp_low_warn,
                            returnedFishParams.temp_high_warn,
                            returnedFishParams.temp_high_critical].slice(),
                        phSettingsValue: [returnedFishParams.ph_low_critical,
                            returnedFishParams.ph_low_warn,
                            returnedFishParams.ph_high_warn,
                            returnedFishParams.ph_high_critical].slice(),
                        phSettingsUpdate: [returnedFishParams.ph_low_critical,
                            returnedFishParams.ph_low_warn,
                            returnedFishParams.ph_high_warn,
                            returnedFishParams.ph_high_critical].slice(),
                        nh3SettingsValue: [returnedFishParams.nh3_warn,
                            returnedFishParams.nh3_critical].slice(),
                        nh3SettingsUpdate: [returnedFishParams.nh3_warn,
                            returnedFishParams.nh3_critical].slice(),
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

    mapFish = (requestFunction) => {
        requestFunction()
            .then(query => {
                    const allFish = query.database1.slice();
                    this.setState({fish: allFish.slice()})
                }
            )
    }

    handleToggleSliders() {
        this.setState({
            activeSliders: !this.state.activeSliders,
            setButtonText: this.state.setButtonText === "TEST IT" ? "CLOSE TEST" : "TEST IT"
        })
    }

    handleToggleDescription() {
        this.setState({
            activeDescription: !this.state.activeDescription,

        })
    }

    mapReadingsRangeSetState = (requestFunction, from, to) => {
        requestFunction(from, to)
            .then(query => {
                    const returnedReadings = query.database1.slice();
                    const updatedReadings = returnedReadings.map(
                        reading => {
                            return {
                                ...reading
                            }
                        }
                    );
                    this.setState({
                        readings: updatedReadings,
                        startPeriod: moment(from).format('ddd, MMM Do, YYYY'),
                        endPeriod: moment(to).format('ddd, MMM Do,  YYYY'),
                    })
                }
            )
    }

    componentDidMount() {

        this.getPreviousTime();
        this.mapFishSetState(selectFishType, this.state.fishId);
        this.mapFish(getFish);
       window.addEventListener('scroll', this.handleScroll);


    }
 // todo: You should be using ref callbacks, never normal DOM traversal, to get access to nodes in componentDidMount.
  //  https://reactjs.org/docs/refs-and-the-dom.html
    handleScroll= (event) => {

if (this.topTriggerEl.current !== null ) { // Check that Aquaponics page has rendered. Was causing a bug when changing pages meaning the
    // Check that view is between the correct ranges (In the history components)

    if (window.pageYOffset > this.topTriggerEl.current.offsetTop && window.pageYOffset < this.bottomTriggerEl.current.offsetTop) {
        console.log('Adding element')
        document.getElementById("sticky-el").classList.add(classes.StickyElement)
        document.getElementById("sticky-cont").classList.add(classes.AddHeight)

    } else {
        document.getElementById("sticky-el").classList.remove(classes.StickyElement)
        document.getElementById("sticky-cont").classList.remove(classes.AddHeight)
        console.log('Removing element')
    }
}
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

    onTempSettingsChange = tempSettingsUpdate => {
        this.setState({tempSettingsUpdate})
    };

    onPhSettingsChange = phSettingsUpdate => {
        this.setState({phSettingsUpdate})
    };

    onNh3SettingsChange = nh3SettingsUpdate => {
        this.setState({nh3SettingsUpdate})
    };


    onFishChange = fishId => {
        this.mapFishSetState(selectFishType, fishId)
    };

    render() {

        const { fishParams } = this.state;

        if (fishParams === null) {
            return <LoadingContainer/>;
        }
        this.handleObservations()

        return (
            <div>


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
                                    allowFullScreen/>
                        </div>
                        <hr className="divider"/>
                    </div>
                    }
                    <Button size="sm" className={classes.ToggleButton} type="button"
                            onClick={this.handleToggleDescription}>
                        Development Details!
                    </Button>
                    <div className={classes.ProjectContainer}>


                        <h1 className={classes.Title}><strong>Aquaponics System Monitor</strong> (Prototype)</h1>

                        <Row>
                            <Col lg={12}>

                                <br/>
                                <h2 className={classes.SecondaryTitle}><strong>Live Monitor </strong><LiveMonitorDescription /></h2>

                                <div className={classes.StatusWrapper}>

                                    <FishProfile
                                        allFish={this.state.fish}
                                        fishParams={this.state.fishParams}
                                        onChange={this.onFishChange}
                                    />
                                </div>

                                <div className={classes.BarsWrapper}
                                     title="Live readings from your system & information to help">
                                    <div className={classes.AccordionContainer}>
                                        <h4><strong>Current Status</strong></h4>
                                    {this.tempController(this.state.tempUpdate[0])}
                                    {this.phController(this.state.phUpdate[0])}
                                    {this.nh3Controller(this.state.nh3Update[0])}
                                    </div>

                                    {this.state.activeSliders &&
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
                                                    onUpdate={this.onTempUpdate}
                                                    onChange={this.onTempChange}
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
                                                onUpdate={this.onPhUpdate}
                                                onChange={this.onPhChange}
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
                                                onUpdate={this.onNh3Update}
                                                onChange={this.onNh3Change}
                                            />
                                        </div>

                                    </Col>



                                    </Row>
                                        <Button color="info" onClick={()=>{
                                            this.addReadingsToDB();
                                        }} size="md" block>Enter readings into database.</Button>

                                        <SlidersModal/></div>}
                                    {<Button title="See the system working" className={classes.TestButton}
                                             onClick={() => {
                                                 this.handleToggleSliders();
                                             }} size="sm">{this.state.setButtonText}</Button>}
                                </div>

                            </Col>
                        </Row>
                        <hr className="divider"/>
                        <div >
                            <h2 className="reading-box ">View historical data</h2>
                          <br/>
                                <div ref={this.topTriggerEl} className="check" id="sticky-trigger"></div>
                            <div id="sticky-cont" ref={this.containerEl} className={classes.StickyContainer}>

                                <div id="sticky-el" ref={this.stickyEl}>
                                    <DateRange
                                        onDaySelect={this.mapReadingsRangeSetState}
                                        fishParams={this.state.fishParams}
                                        allFish={this.state.fish}
                                        onChange={this.onFishChange}
                                    />
                                </div>

                                <Tabs className={classes.TabContainer}  defaultActiveKey="temp" id="uncontrolled-tab-example">
                                    <Tab eventKey="temp" title="Temperature"
                                         style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                                        <Row >
                                            <Col lg={12}>
                                                <h1 className={classes.GraphHead}>Temperature</h1>

                                                <h6 className={classes.GraphSub}>{this.state.startPeriod} <br/> {this.state.endPeriod}</h6>
                                                <FishThumb fishParams={this.state.fishParams}/>
                                                <h3  className={classes.GraphTitle}>Hourly readings</h3>



                                                <LineGraph
                                                    fishParams={this.state.fishParams}
                                                    readings={this.state.readings}
                                                />
                                            </Col>
                                            <Col lg={12}><br/>
                                                <h3 className={classes.GraphTitle}>Readings by alert category</h3>

                                                <TempPie
                                                    fishParams={this.state.fishParams}
                                                    readings={this.state.readings}
                                                />
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col lg={12}>
                                                <h3 className={classes.GraphTitle}>Highest, lowest and average daily readings</h3>

                                                <HighLow
                                                    fishParams={this.state.fishParams}
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
                                <Row/>

                            </div>
                            <div ref={this.bottomTriggerEl} id="sticky-end"></div>
                                         </div>
                        <hr  className="divider"/>

                        <h2 className="reading-box">Settings</h2>
                        <br/>
                        <Tabs className={classes.TabContainer} Key="customise-current" id="custom-tab">

                            <Tab eventKey="customise-current" title="Current Fish"
                                 style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                                <br/>
                                <h5>{this.state.fishParams.fish_name}</h5>
                                <FishThumb fishParams={this.state.fishParams}/>

                                    <br/>
                                    <SettingsTemp
                                        //onUpdate={this.onTempSettingsUpdate}
                                        vertical={true}
                                        onChange={this.onTempSettingsChange}
                                        values={this.state.tempSettingsValue}
                                        updates={this.state.tempSettingsUpdate}
                                        reset={this.resetTempSettings}
                                        renderButtons={true}
                                    />
                                    <SettingsPh
                                        onChange={this.onPhSettingsChange}
                                        values={this.state.phSettingsValue}
                                        updates={this.state.phSettingsUpdate}
                                        reset={this.resetPhSettings}
                                        renderButtons={true}
                                    />
                                    <SettingsNh3
                                        onChange={this.onNh3SettingsChange}
                                        values={this.state.nh3SettingsValue}
                                        updates={this.state.nh3SettingsUpdate}
                                        reset={this.resetNh3Settings}
                                        renderButtons={true}
                                    />

                            </Tab>
                            <Tab eventKey="Create New" title="New Customisation"
                                 style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                                <br/>
                                <h5>Create new customisation</h5>


                                <br/>  <form  >
                                <label htmlFor="fname">Setting Name:</label><br/>
                                <input required type="text" id="fname" name="fname" /><br/>
                                <SettingsTemp
                                    //onUpdate={this.onTempSettingsUpdate}
                                    vertical={true}
                                    onChange={this.onTempSettingsChange}
                                    values={this.state.tempSettingsValue}
                                    updates={this.state.tempSettingsUpdate}
                                    reset={this.resetTempSettings}
                                    renderButtons={false}
                                />
                                <SettingsPh
                                    onChange={this.onPhSettingsChange}
                                    values={this.state.phSettingsValue}
                                    updates={this.state.phSettingsUpdate}
                                    reset={this.resetPhSettings}
                                    renderButtons={false}
                                />
                                <SettingsNh3
                                    onChange={this.onNh3SettingsChange}
                                    values={this.state.nh3SettingsValue}
                                    updates={this.state.nh3SettingsUpdate}
                                    reset={this.resetNh3Settings}
                                    renderButtons={false}
                                />


                                <Button className={classes.ButtonEnter} style={{margin: "10px 2%"}} onClick={()=>{
                                    console.log("Clicked That shit")
                                }} type="submit">Enter All</Button>
                                </form>
                                <Button  className={classes.ButtonReset} style={{margin: "10px 2%"}} onClick={()=>{
                                    console.log("Clicked That shit")
                                }} type="submit">Reset All</Button>



                            </Tab>

                        </Tabs>

                        <br/>

                        <hr className="divider"/>
                        <h2 className="reading-box">System Advice</h2>
                        <AdviceContainer />
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

