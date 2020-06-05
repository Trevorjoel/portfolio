import React, { Component } from "react";
import { render } from "react-dom";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import { Handle, Track, Tick } from "./components";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from './SettingsContainer.module.css';
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
const defaultValues = [3, 10, 18, 23];

class SettingsTemp extends Component {

    render(props) {

        return <Row style={{textAlign: "center", background:"#d9d9d9 none repeat scroll 0% 0%", borderRadius: "50px", color:"black"}}>

            <Col lg={2} style={{textAlign: "center", background:"#2f3c2f14 none repeat scroll 0% 0%", borderRadius:"50px"}}>
                <h3 style={{textAlign: "center", marginTop: "10px"}}>Temperature</h3>
                <Button variant="secondary" style={{margin: "10px 2%"}} onClick={this.props.reset}>Reset</Button>
                <Button style={{margin: "10px 2%"}} >Enter</Button>
                <p><h6>Set: {this.props.update[0]} | {this.props.update[1]} | {this.props.update[2]} | {this.props.update[3]}</h6></p>
            </Col>
                <Col lg={10}>

        <div style={{ margin: "20px 8%" , height: 60, width: "85%" }}>
            <Slider
                mode={2}
                step={.5}
                domain={[this.props.values[0] - 5 ,this.props.values[3] + 5]}  // this.props.values[0] - 5 ,this.props.values[3] + 5] this causes a crash sometimes due to the API call
                rootStyle={sliderStyle}
                onUpdate={this.props.onUpdate}
                onChange={this.props.onChange}
                values={this.props.values}

            >
                {console.log(this.props.values)}
                <Rail>
                    {({ getRailProps }) => <div style={railStyle} {...getRailProps()} />}
                </Rail>
                <Handles>

                    {({ handles, getHandleProps }) => <div className="slider-handles">

                            {handles.map(handle => (

                                <Handle
                                    key={handle.id}
                                    handle={handle}
                                    getHandleProps={getHandleProps}
                                    domain={domain}
                                />

                            ))}
                        </div>}

                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }) => <div className="slider-tracks">
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
                        </div>}
                </Tracks>
                <Ticks count={10}>
                    {({ ticks }) => <div className="slider-ticks">
                            {ticks.map(tick => (
                                <Tick key={tick.id} tick={tick} count={ticks.length} />
                            ))}
                        </div>}
                </Ticks>
            </Slider>

        </div>

        </Col>
        </Row>;
    }
}

export default SettingsTemp;
