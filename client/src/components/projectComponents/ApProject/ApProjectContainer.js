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
    addSettingsToDB,
    selectUserParameters,
    getSettings,

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
import {AvField, AvForm} from 'availity-reactstrap-validation';
import Logo from './Assets/logos/logo-03.png'
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
            setButtonText: "Test Alerts",
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
            userId: 1,
            userParams: null,
            userTempValue: [],
            userPhValue: [],
            userNh3Value: [],
            userTempUpdate: [],
            userPhUpdate: [],
            userNh3Update: [],
            userTempSettingsUpdate: [],
            userTempSettingsValue: [],
            userPhSettingsUpdate: [],
            userPhSettingsValue: [],
            userNh3SettingsUpdate: [],
            userNh3SettingsValue: [],
            settingName: '',
            settings: [],
            selectedFishOrSettingName:'',
            tempDomain: [],
            graphParams: null,
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
        this.saveTempSettings = this.saveTempSettings.bind(this);
        this.savePhSettings = this.savePhSettings.bind(this);
        this.saveNh3Settings = this.saveNh3Settings.bind(this);
        this.addSettingsToDB = addSettingsToDB.bind(this);
        this.selectUserParameters = selectUserParameters.bind(this);
        this.resetUserSettings = this.resetUserSettings.bind(this);
        this.saveUserSettings = this.saveUserSettings.bind(this);
        this.handleSettingNameChange = this.handleSettingNameChange.bind(this);
        this.handleValidSubmit = this.handleValidSubmit.bind(this);
        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
        this.getSettings = getSettings.bind(this);
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
            this.addSettingsToDB('addtempsettings', this.state.fishParams.fish_name+'_custom', this.state.tempSettingsUpdate[0], this.state.tempSettingsUpdate[1],
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
        if (JSON.stringify(this.state.phSettingsUpdate) !== JSON.stringify(this.state.phSettingsValue))
        {
            this.addSettingsToDB('addphpsettings', this.state.fishParams.fish_name+'_custom', this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
                this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsUpdate[0],
                this.state.phSettingsUpdate[1], this.state.phSettingsUpdate[2], this.state.phSettingsUpdate[3],
                this.state.nh3SettingsValue[0], this.state.nh3SettingsValue[1], this.state.tempValue[0],
                this.state.phValue[0], this.state.nh3Value[0]);

            this.setState({
                phSettingsValue: this.state.phSettingsUpdate.slice(),
            })
            console.log('save Ph settings');
            this.mapSettings(getSettings);
        }
    }

    saveNh3Settings = () => {
        if (JSON.stringify(this.state.nh3SettingsUpdate) !== JSON.stringify(this.state.nh3SettingsValue))
        {
            this.addSettingsToDB('addnh3psettings', this.state.fishParams.fish_name+'_custom', this.state.tempSettingsValue[0], this.state.tempSettingsValue[1],
                this.state.tempSettingsValue[2], this.state.tempSettingsValue[3], this.state.phSettingsValue[0],
                this.state.phSettingsValue[1], this.state.phSettingsValue[2], this.state.phSettingsValue[3],
                this.state.nh3SettingsUpdate[0], this.state.nh3SettingsUpdate[1], this.state.tempValue[0],
                this.state.phValue[0], this.state.nh3Value[0]);

            this.setState({
                nh3SettingsValue: this.state.nh3SettingsUpdate.slice(),
            })
            console.log('save Nh3 settings');
            this.mapSettings(getSettings);
        }
    }

    saveUserSettings = () => {
        if (this.state.settingName !== '' && this.state.settingName !== 'default_settings')
        {
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
                console.log('save custom settings ');
        }
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
                        graphParams: returnedFishParams,
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
                        selectedFishOrSettingName: returnedFishParams.fish_name,
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
                        userParams: returnedUserParams,
                        graphParams: returnedUserParams,
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
                        userTempValue: [returnedUserParams.temp_target].slice(),
                        userTempUpdate: [returnedUserParams.temp_target].slice(),
                        userPhValue: [returnedUserParams.ph_target].slice(),
                        userPhUpdate: [returnedUserParams.ph_target].slice(),
                        userNh3Value: [returnedUserParams.nh3_target].slice(),
                        userNh3Update: [returnedUserParams.nh3_target].slice(),
                        selectedFishOrSettingName: returnedUserParams.setting_name,
                    })
                }
            )
    }

    mapUserSetState = (requestFunction, userId, settingName) => {
        requestFunction(userId, settingName)
            .then(query => {
                    const returnedUserParams = query;
                    this.setState({
                        graphParams: returnedUserParams,
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
                        userTempValue: [returnedUserParams.temp_target].slice(),
                        userTempUpdate: [returnedUserParams.temp_target].slice(),
                        userPhValue: [returnedUserParams.ph_target].slice(),
                        userPhUpdate: [returnedUserParams.ph_target].slice(),
                        userNh3Value: [returnedUserParams.nh3_target].slice(),
                        userNh3Update: [returnedUserParams.nh3_target].slice(),
                        selectedFishOrSettingName: returnedUserParams.setting_name,
                    })
                }
            )
    }

    mapCustomFishSetState = (requestFunction, userId, settingName) => {
        requestFunction(userId, settingName)
            .then(query => {
                    const returnedUserParams = query;
                    this.setState({
                        graphParams: returnedUserParams,
                        // Set state here
                        tempSettingsValue: [returnedUserParams.temp_low_critical,
                            returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn,
                            returnedUserParams.temp_high_critical].slice(),
                        tempSettingsUpdate: [returnedUserParams.temp_low_critical,
                            returnedUserParams.temp_low_warn,
                            returnedUserParams.temp_high_warn,
                            returnedUserParams.temp_high_critical].slice(),
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
                        tempValue: [returnedUserParams.temp_target].slice(),
                        tempUpdate: [returnedUserParams.temp_target].slice(),
                        phValue: [returnedUserParams.ph_target].slice(),
                        phUpdate: [returnedUserParams.ph_target].slice(),
                        nh3Value: [returnedUserParams.nh3_target].slice(),
                        nh3Update: [returnedUserParams.nh3_target].slice(),
                        selectedFishOrSettingName: returnedUserParams.setting_name,
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

    handleToggleDescription() {
        this.setState({
            activeDescription: !this.state.activeDescription,

        })
    }

    handleSettingNameChange(event) {
        this.setState({
            settingName: event.target.value,
        })
    }

    handleValidSubmit(event, values) {
        this.setState({settingName: values.fname});
        this.saveUserSettings();
        console.log('valid');
        this.mapSettings(getSettings);
    }

    handleInvalidSubmit(event, errors, values) {
       this.setState({settingName: ''});
        console.log('invalid');
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

    mapSettings = (requestFunction) => {
        requestFunction()
            .then(query => {
                    const allSettings = query.database1.slice();
                    this.setState({settings: allSettings.slice()})
                }
            )
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
    handleScroll= (event) => {

if (this.topTriggerEl.current !== null ) { // Check that Aquaponics page has rendered. Was causing a bug when changing pages meaning the
    // Check that view is between the correct ranges (In the history components)
    // eslint-disable-next-line no-restricted-globals
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (window.pageYOffset > this.topTriggerEl.current.offsetTop && window.pageYOffset < this.bottomTriggerEl.current.offsetTop && width > 400) {
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

    onUserTempSettingsChange = userTempSettingsUpdate => {
        this.setState({userTempSettingsUpdate})
    };

    onUserPhSettingsChange = userPhSettingsUpdate => {
        this.setState({userPhSettingsUpdate})
    };

    onUserNh3SettingsChange = userNh3SettingsUpdate => {
        this.setState({userNh3SettingsUpdate})
    };


    onFishChange = fishId => {
        this.mapFishSetState(selectFishType, fishId)
    };

    onSettingsChange = settingName => {

       const checkcustom = this.state.fish.find(item => item.fish_name + '_custom' === settingName);

        if(typeof checkcustom === 'undefined')
        {
            this.mapUserSetState(selectUserParameters, this.state.userId, settingName);
            console.log('user setting');
        }
        else
        {
            this.setState({tempDomain: [checkcustom.temp_low_critical, checkcustom.temp_high_critical].slice()});
            this.mapCustomFishSetState(selectUserParameters, this.state.userId, settingName);
            console.log('custom setting');
        }
    };

    render() {

        const { fishParams } = this.state;
        const { graphParams } = this.state;
        const { userParams } = this.state;

        if (fishParams === null || graphParams === null || userParams === null) {
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
                            onClick={this.handleToggleDescription}>
                        Development Details!
                    </Button>
                    <div className={classes.ProjectContainer}>

                        <h1 className={classes.Title}><strong>Aquaponics System Monitor</strong></h1>
                        <img style={{width:"200px", marginBottom:"40px"}} src={Logo}/>
                        <p className={classes.SectionText}>Simplify back yard aquaponics
                            and collect data to help achieve the best possible results. </p>
<hr className="divider"/>


                        <Row>
                            <Col lg={12}>


                                <br/>
                                <h2 className={classes.SecondaryTitle}><strong>Live Monitor </strong><LiveMonitorDescription /></h2>
                                <p className={classes.SectionText}>Information about your system such as, fish stocked, recommended water quality parameters and water tank/grow bed capacity.</p>
                                <div className={classes.StatusWrapper}>

                                    <FishProfile
                                        allFish={this.state.fish}
                                        fishParams={this.state.fishParams}
                                        selectedName ={this.state.selectedFishOrSettingName}
                                        onFishChange={this.onFishChange}
                                        allSettings={this.state.settings}
                                        onSettingsChange={this.onSettingsChange}
                                    />
                                </div>

                                <div className={classes.BarsWrapper}
                                     title="Live readings from your system & information to help">
                                    <div className={classes.AccordionContainer}>
                                        <h2 className={classes.SecondaryTitle}><strong>Current Status</strong></h2>

                                        <p className={classes.SectionText}>The parameters shown are updated live or in very short
                                            frequencies to give an instant picture of the water quality and alert the user if there are problems.</p>

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
                                             }} size="sm"> {this.state.setButtonText} </Button>}
                                </div>

                            </Col>
                        </Row>
                        <hr className="divider"/>
                        <div >
                            <h2 className="reading-box ">View historical data</h2>
                            <p className={classes.SectionText}>At intervals of 1 hour the current water quality readings are entered into the database and represented in graphs for tracking and retrospective troubleshooting. </p>
                          <br/>
                                <div ref={this.topTriggerEl} className="check" id="sticky-trigger"></div>
                            <div id="sticky-cont" ref={this.containerEl} className={classes.StickyContainer}>

                                <div id="sticky-el" ref={this.stickyEl}>
                                    <DateRange
                                        onDaySelect={this.mapReadingsRangeSetState}
                                        selectedName ={this.state.selectedFishOrSettingName}
                                        allFish={this.state.fish}
                                        onFishChange={this.onFishChange}
                                        allSettings={this.state.settings}
                                        onSettingsChange={this.onSettingsChange}
                                    />
                                </div>
<div className={classes.StatusWrapper}>
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
                                                    fishParams={this.state.graphParams}
                                                    readings={this.state.readings}
                                                />
                                            </Col>
                                            <Col lg={12}><br/>
                                                <h3 className={classes.GraphTitle}>Readings by alert category</h3>

                                                <TempPie
                                                    fishParams={this.state.graphParams}
                                                    readings={this.state.readings}
                                                />
                                            </Col>
                                        </Row>
                                        <Row >
                                            <Col lg={12}>
                                                <h3 className={classes.GraphTitle}>Highest, lowest and average daily readings</h3>

                                                <HighLow
                                                    fishParams={this.state.graphParams}
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
                        <hr  className="divider"/>

                        <h2 className="reading-box">Settings</h2>
                        <p className={classes.SectionText}>If you are not satisfied with the preset alert triggers for the selected fish or want
                            entirely new customizations, add your own using the sliders in this section.</p>
                        <br/>
                        <div className={classes.StatusWrapper}>
                        <Tabs className={classes.TabContainer} Key="customise-current" id="custom-tab">

                            <Tab eventKey="customise-current" title="Current Fish"
                                 style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                                <br/>
                                <h5>{this.state.selectedFishOrSettingName}</h5>
                                <FishThumb fishParams={this.state.fishParams} />

                                    <br/>
                                    <SettingsTemp
                                        //onUpdate={this.onTempSettingsUpdate}
                                        vertical={true}
                                        onChange={this.onTempSettingsChange}
                                        mindomain={this.state.tempDomain[0]}
                                        maxdomain={this.state.tempDomain[1]}
                                        updates={this.state.tempSettingsUpdate}
                                        reset={this.resetTempSettings}
                                        save={this.saveTempSettings}
                                        renderButtons={true}
                                    />
                                    <SettingsPh
                                        onChange={this.onPhSettingsChange}
                                        updates={this.state.phSettingsUpdate}
                                        reset={this.resetPhSettings}
                                        save={this.savePhSettings}
                                        renderButtons={true}
                                    />
                                    <SettingsNh3
                                        onChange={this.onNh3SettingsChange}
                                        updates={this.state.nh3SettingsUpdate}
                                        reset={this.resetNh3Settings}
                                        save={this.saveNh3Settings}
                                        renderButtons={true}
                                    />

                            </Tab>
                            <Tab eventKey="Create New" title="New Customisation"
                                 style={{background: "white", color: "black", borderRadius: "0px 0px 20px 20px"}}>
                                <br/>
                                <h5>Create new customisation</h5>

                                <br/>
                                <AvForm
                                    onValidSubmit={this.handleValidSubmit}
                                    onInvalidSubmit={this.handleInvalidSubmit}
                                    ref={c => (this.form = c)}
                                >
                                <label htmlFor="fname">Setting Name:</label><br/>
                                <AvField type="text" id="fname" name="fname"
                                    onChange={this.handleSettingNameChange}
                                    value={this.state.settingName}
                                    validate={{
                                        required: {value: true, errorMessage: 'Please enter a setting name'},
                                        pattern: {
                                            value: '/^[a-zA-Z0-9_]+$/',
                                            errorMessage: 'Your setting must be composed only with letters or numbers or _'
                                        },
                                        minLength: {
                                            value: 5,
                                            errorMessage: 'Your setting name must be between 5 and 30 characters'
                                        },
                                        maxLength: {
                                            value: 30,
                                            errorMessage: 'Your setting name must be between 5 and 30 characters'
                                        }
                                    }}
                                /><br/>
                                <SettingsTemp
                                    //onUpdate={this.onTempSettingsUpdate}
                                    vertical={true}
                                    onChange={this.onUserTempSettingsChange}
                                    mindomain={this.state.userParams.temp_low_critical}
                                    maxdomain={this.state.userParams.temp_high_critical}
                                    updates={this.state.userTempSettingsUpdate}
                                    renderButtons={false}
                                />
                                <SettingsPh
                                    onChange={this.onUserPhSettingsChange}
                                    updates={this.state.userPhSettingsUpdate}
                                    renderButtons={false}
                                />
                                <SettingsNh3
                                    onChange={this.onUserNh3SettingsChange}
                                    updates={this.state.userNh3SettingsUpdate}
                                    renderButtons={false}
                                />


                                <Button className={classes.ButtonEnter} style={{margin: "10px 2%"}} type="submit">Enter All</Button>
                                </AvForm>
                                <Button  className={classes.ButtonReset} style={{margin: "10px 2%"}} onClick={()=>{
                                    this.resetUserSettings();
                                }} type="submit">Reset All</Button>



                            </Tab>

                        </Tabs>
                        </div>
                        <br/>

                        <hr className="divider"/>
                        <h2 className="reading-box">System Advice</h2>
                        <p className={classes.SectionText}>This area provides advice and troubleshooting on your system</p>
                        <div className={classes.StatusWrapper}>
                        <AdviceContainer />
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

