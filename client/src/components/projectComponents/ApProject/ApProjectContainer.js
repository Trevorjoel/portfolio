import React, {Component} from 'react';
import * as Assets from './Assets/ApProjectAssets';
import classes from './ApProjectContainer.module.scss';
import {
    addReadingsToDB,
    addSettingsToDB,
    createNotificationController,
    getFish,
    getPreviousTime,
    getSettings,
    nh3Controller,
    phController,
    selectFishType,
    selectUserParameters,
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
import {Tab, Tabs} from "react-bootstrap";
import LoadingContainer from "./Loading/LoadingContainer";
import ComingSoon from "./Loading/ComingSoon";
import FishSwitch from "./FishThumb/FishSwitch";
import LiveMonitorDescription from "./Descriptions/LiveMonitorDescription";
import Logo from './Assets/logos/logo-03.png'
import SettingsContainer from "./Settings/SettingsContainer";
import DropdownFish from "./DateRanges/DropDownFish";
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
            nh3ShowNotification: {nh3Optimal: false, nh3HighWarn: true, nh3HighCritical: true},
            latestTime: '',
            numberOfReadings: 169, // default readings to show onload
            fishParams: null, // Shows parameters for current selected fish todo: Refactor refactor to two objects (Show current state + a stored settings state)
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

        };
        // Bind the imported functions
        this.tempController = tempController.bind(this);
        this.phController = phController.bind(this);
        this.nh3Controller = nh3Controller.bind(this);
        this.createNotificationController = createNotificationController.bind(this);
        this.addReadingsToDB = addReadingsToDB.bind(this);
        this.getPreviousTime = getPreviousTime.bind(this);
        this.getFish = getFish.bind(this);
        this.handleToggleSliders = this.handleToggleSliders.bind(this);
        this.resetTempSettings = this.resetTempSettings.bind(this);
        this.resetPhSettings = this.resetPhSettings.bind(this);
        this.resetNh3Settings = this.resetNh3Settings.bind(this);
       this.saveTempSettings = this.saveTempSettings.bind(this);
        this.savePhSettings = this.savePhSettings.bind(this);
        this.saveNh3Settings = this.saveNh3Settings.bind(this);
        this.addSettingsToDB = addSettingsToDB.bind(this);
        this.selectUserParameters = selectUserParameters.bind(this);
        this.resetUserSettings = this.resetUserSettings.bind(this);
        this.saveUserSettings = this.saveUserSettings.bind(this);
        this.handleSettingNameChange = this.handleSettingNameChange.bind(this); // Is this used?
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.getSettings = getSettings.bind(this);

        // References for the sticky history component
        this.topTriggerEl = React.createRef();
        this.containerEl = React.createRef();
        this.stickyEl = React.createRef();
        this.bottomTriggerEl = React.createRef();

    }

    // handles the navigation in the advice component
    handleObservations = () => {
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
    // Reset settings to default of selected fish setting by param
    resetTempSettings = () => {
        this.setState({
            tempSettingsUpdate: [this.state.systemParams.temp_low_critical,
                this.state.systemParams.temp_low_warn,
                this.state.systemParams.temp_high_warn,
                this.state.systemParams.temp_high_critical].slice(),
        })
    }

    resetPhSettings = () => {

        this.setState({
            phSettingsUpdate: [this.state.systemParams.ph_low_critical,
                this.state.systemParams.ph_low_warn,
                this.state.systemParams.ph_high_warn,
                this.state.systemParams.ph_high_critical].slice(),
        })
    }

    resetNh3Settings = () => {

        this.setState({
            nh3SettingsUpdate: [this.state.systemParams.nh3_warn,
                this.state.systemParams.nh3_critical].slice(),
        })
    }
// Reset settings to default of selected fish/usr all Just confirm
    resetUserSettings = () => {
        this.setState({
            userTempSettingsUpdate: [this.state.userParams.temp_low_critical,
                this.state.userParams.temp_low_warn,
                this.state.userParams.temp_high_warn,
                this.state.userParams.temp_high_critical].slice(),
            userPhSettingsUpdate: [this.state.userParams.ph_low_critical,
                this.state.userParams.ph_low_warn,
                this.state.userParams.ph_high_warn,
                this.state.userParams.ph_high_critical].slice(),
            userNh3SettingsUpdate: [this.state.userParams.nh3_warn,
                this.state.userParams.nh3_critical].slice(),
        })
    }

    saveTempSettings = () => {
        if (JSON.stringify(this.state.tempSettingsUpdate) !== JSON.stringify(this.state.tempSettingsValue))
        {
            this.addSettingsToDB('addtempsettings', this.state.fishSettingName+'_custom', this.state.tempSettingsUpdate[0], this.state.tempSettingsUpdate[1],
                this.state.tempSettingsUpdate[2], this.state.tempSettingsUpdate[3], this.state.phSettingsValue[0],
                this.state.phSettingsValue[1], this.state.phSettingsValue[2], this.state.phSettingsValue[3],
                this.state.nh3SettingsValue[0], this.state.nh3SettingsValue[1], this.state.tempValue[0],
                this.state.phValue[0], this.state.nh3Value[0]);

            this.setState({
                tempSettingsValue: this.state.tempSettingsUpdate.slice(),
            })
            console.log('save temperature settings');
            this.mapSettings(getSettings);
        }
    }

    savePhSettings = () => {
        if (JSON.stringify(this.state.phSettingsUpdate) !== JSON.stringify(this.state.phSettingsValue)) {
            this.addSettingsToDB('addphpsettings', this.state.systemParams.fish_name + '_custom', this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
                this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsUpdate[0],
                this.state.phSettingsUpdate[1], this.state.phSettingsUpdate[2], this.state.phSettingsUpdate[3],
                this.state.nh3SettingsValue[0], this.state.nh3SettingsValue[1], this.state.tempValue[0],
                this.state.phValue[0], this.state.nh3Value[0]);

            this.setState({
                phSettingsValue: this.state.phSettingsUpdate.slice(),
            })
            this.mapSettings(getSettings);
        }
    }

    saveNh3Settings = () => {
        if (JSON.stringify(this.state.nh3SettingsUpdate) !== JSON.stringify(this.state.nh3SettingsValue)) {
            this.addSettingsToDB('addnh3psettings', this.state.systemParams.fish_name + '_custom', this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
                this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsValue[0],
                this.state.phSettingsValue[1], this.state.phSettingsValue[2], this.state.phSettingsValue[3],
                this.state.nh3SettingsUpdate[0], this.state.nh3SettingsUpdate[1], this.state.tempValue[0],
                this.state.phValue[0], this.state.nh3Value[0]);

            this.setState({
                nh3SettingsValue: this.state.nh3SettingsUpdate.slice(),
            })
            this.mapSettings(getSettings);
        }
    }

    saveUserSettings = () => {
        if (this.state.settingName !== '' && this.state.settingName !== 'default_settings') {
            this.addSettingsToDB('addsettings', this.state.settingName, this.state.userTempSettingsUpdate[0], this.state.userTempSettingsUpdate[1],
                this.state.userTempSettingsUpdate[2], this.state.userTempSettingsUpdate[3], this.state.userPhSettingsUpdate[0],
                this.state.userPhSettingsUpdate[1], this.state.userPhSettingsUpdate[2], this.state.userPhSettingsUpdate[3],
                this.state.userNh3SettingsUpdate[0], this.state.userNh3SettingsUpdate[1], this.state.userTempValue[0],
                this.state.userPhValue[0], this.state.userNh3Value[0]);

            this.setState({
                userTempSettingsValue: this.state.userTempSettingsUpdate.slice(),
                userPhSettingsValue: this.state.userPhSettingsUpdate.slice(),
                userNh3SettingsValue: this.state.userNh3SettingsUpdate.slice(),
            })

            this.form && this.form.reset();
        }
    }

    mapFishSetState = (requestFunction, fishId) => {
        requestFunction(fishId)
            .then(query => {
                    const returnedFishParams = query;
                    this.setState({
                            fishSettingName: returnedFishParams.fish_name,
                            systemParams: returnedFishParams
                        ,
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
                        tempValue: [this.setTarget(returnedFishParams.temp_low_warn, returnedFishParams.temp_high_warn)].slice(),
                        tempUpdate: [this.setTarget(returnedFishParams.temp_low_warn, returnedFishParams.temp_high_warn)].slice(),
                        phValue: [this.setTarget(returnedFishParams.ph_low_warn, returnedFishParams.ph_high_warn)].slice(),
                        phUpdate: [this.setTarget(returnedFishParams.ph_low_warn, returnedFishParams.ph_high_warn)].slice(),
                        nh3Value: [returnedFishParams.nh3_target].slice(),
                        nh3Update: [returnedFishParams.nh3_target].slice(),
                        tempDomain: [returnedFishParams.temp_low_critical,
                            returnedFishParams.temp_high_critical].slice(),
                    })
                }
            )
    }

    mapDefaultUserSetState = (requestFunction, userId, settingName) => {
        requestFunction(userId, settingName)
            .then(query => {
                const returnedUserParams = query;
                this.setState({

                        fishSettingName: returnedUserParams.setting_name,
                        systemParams: returnedUserParams
                    ,
                    userParams: returnedUserParams,

                    // Set state here
                    userTempSettingsValue: [returnedUserParams.temp_low_critical,
                        returnedUserParams.temp_low_warn,
                        returnedUserParams.temp_high_warn,
                        returnedUserParams.temp_high_critical].slice(),
                    userTempSettingsUpdate: [returnedUserParams.temp_low_critical,
                        returnedUserParams.temp_low_warn,
                        returnedUserParams.temp_high_warn,
                        returnedUserParams.temp_high_critical].slice(),
                    userPhSettingsValue: [returnedUserParams.ph_low_critical,
                        returnedUserParams.ph_low_warn,
                        returnedUserParams.ph_high_warn,
                        returnedUserParams.ph_high_critical].slice(),
                    userPhSettingsUpdate: [returnedUserParams.ph_low_critical,
                        returnedUserParams.ph_low_warn,
                        returnedUserParams.ph_high_warn,
                        returnedUserParams.ph_high_critical].slice(),
                    userNh3SettingsValue: [returnedUserParams.nh3_warn,
                        returnedUserParams.nh3_critical].slice(),
                    userNh3SettingsUpdate: [returnedUserParams.nh3_warn,
                        returnedUserParams.nh3_critical].slice(),
                    tempValue: [this.setTarget(returnedUserParams.temp_low_warn, returnedUserParams.temp_high_warn)].slice(),
                    tempUpdate: [this.setTarget(returnedUserParams.temp_low_warn, returnedUserParams.temp_high_warn)].slice(),
                    phValue: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                    phUpdate: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                    nh3Value: [returnedUserParams.nh3_target].slice(),
                    nh3Update: [returnedUserParams.nh3_target].slice(),
                })
            })
    }

    mapUserSetState = (requestFunction, userId, settingName) => {
        requestFunction(userId, settingName)
            .then(query => {
                    const returnedUserParams = query;
                    this.setState({

                            fishSettingName: returnedUserParams.setting_name,
                            systemParams: returnedUserParams,

                        // Set state here
                        userTempSettingsValue: [returnedUserParams.temp_low_critical,
                            returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn,
                            returnedUserParams.temp_high_critical].slice(),
                        userTempSettingsUpdate: [returnedUserParams.temp_low_critical,
                            returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn,
                            returnedUserParams.temp_high_critical].slice(),
                        userPhSettingsValue: [returnedUserParams.ph_low_critical,
                            returnedUserParams.ph_low_warn,
                            returnedUserParams.ph_high_warn,
                            returnedUserParams.ph_high_critical].slice(),
                        userPhSettingsUpdate: [returnedUserParams.ph_low_critical,
                            returnedUserParams.ph_low_warn,
                            returnedUserParams.ph_high_warn,
                            returnedUserParams.ph_high_critical].slice(),
                        userNh3SettingsValue: [returnedUserParams.nh3_warn,
                            returnedUserParams.nh3_critical].slice(),
                        userNh3SettingsUpdate: [returnedUserParams.nh3_warn,
                            returnedUserParams.nh3_critical].slice(),
                        // tempUpdate is passed into the functions file to determine alerts, on change of fish/usr settings
                        tempUpdate: [this.setTarget(returnedUserParams.temp_low_warn, returnedUserParams.temp_high_warn)].slice(),
                        phValue: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                        phUpdate: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                    })
                }
            )
    }

    mapCustomFishSetState = (requestFunction, userId, settingName) => {
        requestFunction(userId, settingName)
            .then(query => {
                    const returnedUserParams = query;
                    this.setState({
                            fishSettingName: returnedUserParams.setting_name,
                            systemParams: returnedUserParams,

                        // Set state here

                        tempSettingsValue: [returnedUserParams.temp_low_critical, returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn, returnedUserParams.temp_high_critical].slice(),
                        tempSettingsUpdate: [returnedUserParams.temp_low_critical, returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn, returnedUserParams.temp_high_critical].slice(),
                        phSettingsValue: [returnedUserParams.ph_low_critical,
                            returnedUserParams.ph_low_warn,
                            returnedUserParams.ph_high_warn,
                            returnedUserParams.ph_high_critical].slice(),
                        phSettingsUpdate: [returnedUserParams.ph_low_critical,
                            returnedUserParams.ph_low_warn,
                            returnedUserParams.ph_high_warn,
                            returnedUserParams.ph_high_critical].slice(),
                        nh3SettingsValue: [returnedUserParams.nh3_warn,
                            returnedUserParams.nh3_critical].slice(),
                        nh3SettingsUpdate: [returnedUserParams.nh3_warn,
                            returnedUserParams.nh3_critical].slice(),
                        tempValue: [this.setTarget(returnedUserParams.temp_low_warn, returnedUserParams.temp_high_warn)].slice(),
                        tempUpdate: [this.setTarget(returnedUserParams.temp_low_warn, returnedUserParams.temp_high_warn)].slice(),

                        phValue: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                        phUpdate: [this.setTarget(returnedUserParams.ph_low_warn, returnedUserParams.ph_high_warn)].slice(),
                        nh3Value: [returnedUserParams.nh3_target].slice(),
                        nh3Update: [returnedUserParams.nh3_target].slice(),

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
            setButtonText: this.state.setButtonText === "Test Alerts" ? "Close Test" : "Test Alerts"
        })
    }

    // Universal on change handler
    changeHandler = (name, value) => {this.setState({[name]: value})}

// Universal toggle handler.. binary toggle single set state

    toggleHandler = (name) => {this.setState({[name]: !this.state[name]})}

    handleSettingNameChange( event ) {
        this.setState({settingName: event.target.value})
    }

    handleValidSubmit(event, values) {
        this.setState({settingName: values.fname});
        this.saveUserSettings();
        this.mapSettings(getSettings);
    }

    handleInvalidSubmit(event, errors, values) {
        this.setState({settingName: ''});
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
                },
            )

    }

    mapSettings = (requestFunction) => {
        requestFunction()
            .then(query => {
                    const allSettings = query.database1.slice();
                    this.setState({settings: allSettings.slice()})
                }
            )
    }
    // create a number between hi warn and low warn
    setTarget = (lowWarn, highWarn)=>{
        const a =  lowWarn + highWarn;
        const target = a/2;
        return target
    }

    componentDidMount() {

        this.getPreviousTime();
        this.mapDefaultUserSetState(selectUserParameters, this.state.userId, 'default_settings');
        this.mapFishSetState(selectFishType, this.state.fishId);
        this.mapFish(getFish);
        this.mapSettings(getSettings);
        window.addEventListener('scroll', this.handleScroll);

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

    onFishChange = fishId => {
        this.mapFishSetState(selectFishType, fishId)
    };

    onSettingsChange = settingName => {

        const checkCustom = this.state.fish.find(item => item.fish_name + '_custom' === settingName);
console.log(settingName)
        if (typeof checkCustom === 'undefined') {
            this.mapUserSetState(selectUserParameters, this.state.userId, settingName);
        } else {
            this.setState({tempDomain: [checkCustom.temp_low_critical, checkCustom.temp_high_critical].slice()});
            this.mapCustomFishSetState(selectUserParameters, this.state.userId, settingName);
        }
    };

    render() {

        const {fishParams} = this.state;
        const {userParams} = this.state;

        if (fishParams === null || userParams === null) {
            return <LoadingContainer/>;
        }
        this.handleObservations()

        return (
            <div>
                <Container className={classes.SensorsContainer}>

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
                            onClick={(value) => this.toggleHandler('activeDescription', value)}>
                        Development Details!
                    </Button>
                    <div className={classes.ProjectContainer}>

                        <h1 className={classes.Title}><strong>Aquaponics System Monitor</strong></h1>
                        <img style={{width: "200px", marginBottom: "40px"}} src={Logo}/>
                        <p className={classes.SectionText}>Simplify back yard aquaponics
                            and collect data to help achieve the best possible results. </p>
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

                                <div className={classes.BarsWrapper}
                                     title="Live readings from your system & information to help">
                                    <div className={classes.AccordionContainer}>
                                        <h2 className={classes.SecondaryTitle}><strong>Current Status</strong></h2>

                                        <p className={classes.SectionText}>The parameters shown are updated live or in
                                            very short
                                            frequencies to give an instant picture of the water quality and alert the
                                            user if there are problems.</p>

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
                                                values={this.state.phValue[0]}
                                                update={this.state.phUpdate[0]}
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

                                        <SlidersModal/></div>}
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
                                saveTempSettings={this.saveTempSettings}
resetTemp={this.resetTempSettings}
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

