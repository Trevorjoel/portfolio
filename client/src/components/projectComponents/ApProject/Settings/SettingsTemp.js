import React, { Component } from "react";
import { render } from "react-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // example render components - source below

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
    backgroundColor: () =>{
        const backgrounds = ["red","yellow","green", 'yellow'];
        backgrounds.map( (color, index)=>{
            return backgrounds[color]
        })
    }
};



const domain = [0, 35];
const defaultValues = [0, 0, 0, 0];

class SettingsTemp extends Component {
    render(props) {
        return (
            <div>

            <div style={{ margin: "30px 10%" , height: 60, width: "80%" }}>
                <Slider
                    mode={2}
                    step={.5}
                    domain={domain}
                    rootStyle={sliderStyle}
                    onUpdate={this.onUpdate}
                    onChange={this.onChange}
                    values={[this.props.lowCrit, this.props.lowWarn,this.props.highWarn,this.props.highCrit ]}
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

                            /*todo: program in a feature to show colours on the rail for the alerts*/
                            <div className="slider-tracks">
                                {

                                    tracks.map(({ id, source, target, index }) => (

                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                        style={{backgroundColor: backgrounds[0]}}

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
                    <Button style={{margin: "0px 0%"}} >Enter</Button>


            </div>
        );
    }
}

export default SettingsTemp;
