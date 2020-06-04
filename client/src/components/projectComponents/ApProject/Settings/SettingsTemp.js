import React, { Component } from "react";
import { render } from "react-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // example render components - source below
// todo: Note there's a lot that needs fixing with regards  to passing state from the ApProjectContainer.js
const sliderStyle = {
    position: "relative",
    width: "100%",
    marginTop: 60
};

const railStyle = {
    position: "absolute",
    width: "100%",
    height: 8,
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor:"red"
};


const domain = [0 , 100];
const defaultValues = [0, 0, 0, 0];

class SettingsTemp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: defaultValues.slice(),
            update: defaultValues.slice(),
        }
        this.reset = this.reset.bind(this);
    }


    onUpdate = update => {
        this.setState({ update })
    }

    onChange = values => {
        this.setState({ values })
    }

    reset = () => {
      console.log('Resetting values from DB')

    }
    render(props) {

        return (
            <Row>
                <Col lg={12}>
                    <h4>Temperature</h4><h6>VAL: {this.state.values[0]} VAL: {this.state.values[1]} VAL: {this.state.values[2]} VAL: {this.state.values[3]}</h6>
            <div style={{ margin: "30px 10%" , height: 60, width: "80%" }}>
                <Slider
                    mode={2}
                    step={.5}
                    domain={[this.props.lowCrit - 5, this.props.highCrit + 5]}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={[this.props.lowCrit, this.props.lowWarn,this.props.highWarn,this.props.highCrit ]}
                    reset={this.reset}
                >
                    <Rail>
                        {({ getRailProps }) => (
                            <div style={railStyle} {...getRailProps()} />
                        )}
                    </Rail>
                    <Handles>
                        {({ handles, getHandleProps }) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                        domain={domain}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({ tracks, getTrackProps }) => (


                            <div className="slider-tracks">
                                {

                                    tracks.map(({ id, source, target }, index ) => (

                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                        index={index}

                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                    <Ticks count={10}>
                        {({ ticks }) => (
                            <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick} count={ticks.length} />
                                ))}
                            </div>
                        )}
                    </Ticks>
                </Slider>

            </div>


                    <Button style={{margin: "20px 0%"}} >Enter</Button>
                    <Button style={{margin: "0px 0%"}} onClick={this.reset}>Reset</Button>

            </Col>
            </Row>
        );
    }
}

export default SettingsTemp;
