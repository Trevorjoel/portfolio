import React, {Component} from "react";
import {Handles, Rail, Slider, Ticks, Tracks} from "react-compound-slider";
import {Handle, Tick, Track} from "./components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './SettingsContainer.module.scss';
import {format} from 'd3-format'
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


const domain = [5, 10.5];
const color = ["yellow", "green", "yellow"];
const tickFormat = format('.2f')

class SettingsPh extends Component {

    render(props) {

        return <Row className={classes.Wrap}>
            <Col lg={12} style={{textAlign: "center", borderRadius: "50px"}}>
                <h4 className={classes.ReadingTitle}>pH</h4>
            </Col>
            <Col lg={12}>
                <hr/>
                <Row className={classes.IndicatorRow} lg={12}>
                    <Col>
                        <strong className={classes.ValueIndicatorCritical}>
                            {this.props.updates[0].toFixed(2)}</strong>
                    </Col>
                    <Col>
                        <strong className={classes.ValueIndicatorAdvice}>
                            {this.props.updates[1].toFixed(2)}</strong>
                    </Col>
                    <Col>
                        <strong className={classes.ValueIndicatorAdvice}>
                            {this.props.updates[2].toFixed(2)}</strong>
                    </Col>
                    <Col>
                        <strong className={classes.ValueIndicatorCritical}>
                            {this.props.updates[3].toFixed(2)}</strong>
                    </Col>
                </Row>
            </Col>

            <Col lg={12}>


                <div style={{margin: "20px 1%", height: 50, width: "95%"}}>
                    <Slider

                        mode={2}
                        step={.01}
                        domain={[5, 10.5]}  // this.props.values[0] - 5 ,this.props.values[3] + 5] this causes a crash sometimes due to the API call
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
                                        tiplabel='Ph'
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
                                    <Tick key={tick.id} tick={tick} count={ticks.length} format={tickFormat}/>
                                ))}
                            </div>}
                        </Ticks>
                    </Slider>

                </div>
                <Col lg={12}>
                    <Button className={classes.ButtonReset} variant="secondary" style={{margin: "10px 2%"}}
                            onClick={this.props.reset}>Reset</Button>
                    <Button className={classes.ButtonEnter} style={{margin: "10px 2%"}}
                            variant="secondary">Enter</Button>
                </Col>
                <hr/>
            </Col>
        </Row>;
    }
}

export default SettingsPh;
