import React, {Component} from "react";
import {Handles, Rail, Slider, Ticks, Tracks} from "react-compound-slider";
import {Handle, Tick, Track} from "./components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './SettingsContainer.module.scss';
import Buttons from "./Buttons";
// todo: Note there's a lot that needs fixing with regards  to passing state from the ApProjectContainer.js
const sliderStyle = {
    position: "relative",
    width: "100%",
    marginTop: 30
};

const railStyle = {
    position: "absolute",
    width: "100%",
    height: 8,
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor: "red"
};


const domain = [0, 100];
const color = ["yellow", "green", "yellow"];

class SettingsTemp extends Component {

    render(props) {

        return <div>
            <h4 className={classes.ReadingTitle}>Temperature</h4>
            <Row className={classes.Wrap}>



            <Col lg={12}>

                <Row className={classes.IndicatorRow} lg={12}>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <strong className={classes.ValueIndicatorCritical}>
                            {this.props.updates[0]}</strong>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <strong className={classes.ValueIndicatorAdvice}>
                            {this.props.updates[1]}</strong>
                    </Col>

                    <Col lg={3} md={3} sm={3} xs={3}>
                        <strong className={classes.ValueIndicatorAdvice}>
                            {this.props.updates[2]}</strong>
                    </Col>
                    <Col lg={3} md={3} sm={3} xs={3}>
                        <strong className={classes.ValueIndicatorCritical}>
                            {this.props.updates[3]}</strong>

                    </Col>
                </Row>
            </Col>
            <Col lg={12}>

                <div style={{margin: "30px 3%", height: 50, width: "93%"}}>
                    <Slider

                        mode={2}
                        step={.5}
                        domain={[this.props.values[0] - 5, this.props.values[3] + 5]}  // this.props.values[0] - 5 ,this.props.values[3] + 5] this causes a crash sometimes due to the API call
                        rootStyle={sliderStyle}
                        //onUpdate={this.props.onUpdate}
                        onChange={this.props.onChange}
                        values={this.props.updates}

                    >
                        <Rail>
                            {({getRailProps}) => <div style={railStyle} {...getRailProps()} />}
                        </Rail>
                        <Handles>

                            {({handles, getHandleProps}) => <div className="slider-handles">

                                {handles.map(handle => (

                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                        domain={domain}
                                        tiplabel='Temp'
                                    />

                                ))}
                            </div>}

                        </Handles>
                        <Tracks left={false} right={false}>
                            {({tracks, getTrackProps}) => <div className="slider-tracks">
                                {

                                    tracks.map(({id, source, target}, index) => (

                                        <Track
                                            key={id}
                                            source={source}
                                            target={target}
                                            getTrackProps={getTrackProps}
                                            index={index}
                                            trackcolor={color}

                                        />
                                    ))}
                            </div>}
                        </Tracks>
                        <Ticks count={10}>
                            {({ticks}) => <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick} count={ticks.length}/>
                                ))}
                            </div>}
                        </Ticks>
                    </Slider>

                </div>
                <Col lg={12} style={{textAlign:"right"}}>
                    {this.props.renderButtons ? <Buttons reset={this.props.reset}/>: null }


                </Col>
                <hr/>

            </Col>
        </Row>
        </div>
            ;
    }
}

export default SettingsTemp;
