import React, {Component, Fragment} from 'react'
import Slider from "react-compound-slider/Slider";
import {Handles, Rail, Ticks, Tracks} from 'react-compound-slider';
import PropTypes from 'prop-types'


const sliderStyle = {
    position: 'relative',
    height: '400px',
    marginLeft: '45%',
    touchAction: 'none',
};

class Nh3SliderVertical extends Component {
    
    render() {
        
        return (
            <div style={{height: 460, width: '100%'}}>
                
                <Slider
                    reversed
                    vertical
                    rootStyle={sliderStyle}
                    domain={[.00, 1]}
                    step={.001}
                    mode={13}
                    onUpdate={this.props.onUpdate}
                    onChange={this.props.onChange}
                    values={this.props.values}
                >
                    <Rail>
                        {({getRailProps}) => <SliderRail getRailProps={getRailProps}/>}
                    </Rail>
                    <Handles>
                        {({handles, getHandleProps}) => (
                            <div className="slider-handles">
                                {handles.map(handle => (
                                    <Handle
                                        key={handle.id}
                                        handle={handle}
                                        domain={[.00, 1.00]}
                                        getHandleProps={getHandleProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Handles>
                    <Tracks left={false} right={false}>
                        {({tracks, getTrackProps}) => (
                            <div className="slider-tracks">
                                {tracks.map(({id, source, target}) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ))}
                            </div>
                        )}
                    </Tracks>
                    <Ticks count={5}>
                        {({ticks}) => (
                            <div className="slider-ticks">
                                {ticks.map(tick => (
                                    <Tick key={tick.id} tick={tick}/>
                                ))}
                            </div>
                        )}
                    </Ticks>
                </Slider>
            </div>
        )
    }
}

export default Nh3SliderVertical


// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle = {
    position: 'absolute',
    height: '100%',
    width: 42,
    transform: 'translate(-50%, 0%)',
    borderRadius: 7,
    cursor: 'pointer',
    // border: '1px solid white',
};

const railInnerStyle = {
    position: 'absolute',
    height: '100%',
    width: 14,
    transform: 'translate(-50%, 0%)',
    borderRadius: 7,
    pointerEvents: 'none',
    backgroundColor: '#b69f40',
};

export function SliderRail({getRailProps}) {
    return (
        <Fragment>
            <div style={railOuterStyle} {...getRailProps()} />
            <div style={railInnerStyle}/>
        </Fragment>
    )
}

SliderRail.propTypes = {
    getRailProps: PropTypes.func.isRequired,
};

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
                           domain: [min, max],
                           handle: {id, value, percent},
                           getHandleProps,
                       }) {
    return (
        <Fragment>
            <div
                style={{
                    top: `${percent}%`,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    WebkitTapHighlightColor: 'rgba(0,0,0,0)',
                    zIndex: 5,
                    width: 42,
                    height: 28,
                    cursor: 'pointer',
                    // border: '1px solid white',
                    backgroundColor: 'none',
                }}
                {...getHandleProps(id)}
            />
            <div
                role="slider"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                style={{
                    top: `${percent}%`,
                    position: 'absolute',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
                    backgroundColor: '#ffc400',
                }}
            />
        </Fragment>
    )
}

Handle.propTypes = {
    domain: PropTypes.array.isRequired,
    handle: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getHandleProps: PropTypes.func.isRequired,
};


// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({source, target, getTrackProps}) {
    return (
        <div
            style={{
                position: 'absolute',
                zIndex: 1,
                backgroundColor: '#b28900',
                borderRadius: 7,
                cursor: 'pointer',
                width: 14,
                transform: 'translate(-50%, 0%)',
                top: `${source.percent}%`,
                height: `${target.percent - source.percent}%`,
            }}
            {...getTrackProps()}
        />
    )
}

Track.propTypes = {
    source: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    target: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    getTrackProps: PropTypes.func.isRequired,
};

// *******************************************************
// TICK COMPONENT
// *******************************************************
export function Tick({tick, format}) {
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    marginTop: -0.5,
                    marginLeft: 10,
                    height: 1,
                    width: 6,
                    backgroundColor: 'rgb(200,200,200)',
                    top: `${tick.percent}%`,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    marginTop: -5,
                    marginLeft: 20,
                    fontSize: 10,
                    top: `${tick.percent}%`,
                }}
            >
                {format(tick.value)}
            </div>
        </div>
    )
}

Tick.propTypes = {
    tick: PropTypes.shape({
        id: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        percent: PropTypes.number.isRequired,
    }).isRequired,
    format: PropTypes.func.isRequired,
};

Tick.defaultProps = {
    format: d => d,
};

