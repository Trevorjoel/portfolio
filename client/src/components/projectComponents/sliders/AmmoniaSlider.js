import   {Component} from 'react'
import React from 'react'


import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';


class Nh3Slider extends Component {
    
    render(){
        const sliderStyle = {  // Give the slider some width
            position: 'relative',
            width: '100%',
            height: 100,
            display: 'inline-block',
            
        };
        
        const railStyle = {
            position: 'absolute',
            width: '100%',
            height: 10,
            marginTop: 35,
            borderRadius: 5,
            backgroundColor: '#b69f40',
           
            
            
        };
        
        return(
            <div>
               
                <Slider
                    rootStyle={sliderStyle}
                    domain={[.00, 1]}
                    step={.001}
                    mode={2}
                    onUpdate={this.props.onUpdate}
                    onChange={this.props.onChange}
                    values={this.props.values}
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
                                    />
                                ))}
                                {console.log(handles[0].value)}
                            
                            </div>
                        )}
                    </Handles>
                    <Tracks right={false}>
                        {({ tracks, getTrackProps }) => (
                            <div className="slider-tracks">
                                {tracks.map(({ id, source, target }) => (
                                    <Track
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    
                                    />
                                ))}
                                {}
                            
                            </div>
                        
                        )
                        }
                    
                    </Tracks>
                    <Ticks count={12 /* generate approximately 15 ticks within the domain */}>
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
        
        );
        function Tick({ tick, count }) {
            return (
                <div>
                    <div
                        style={{
                            position: 'absolute',
                            marginTop: 52,
                            marginLeft: -0.5,
                            width: 1,
                            height: 8,
                            backgroundColor: 'silver',
                            left: `${tick.percent}%`,
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            marginTop: 60,
                            fontSize: 15,
                            textAlign: 'center',
                            marginLeft: `${-(100 / count) / 2}%`,
                            width: `${100 / count}%`,
                            left: `${tick.percent}%`,
                        }}
                    >
                        {tick.value}
                    </div>
                </div>
            )
        }
        
        function Handle({handle: { id, value, percent },getHandleProps }) {
            return (
                <div
                    style={{
                        left: `${percent}%`,
                        position: 'absolute',
                        marginLeft: -12,
                        marginTop: 23,
                        zIndex: 2,
                        width: 25,
                        height: 32,
                        border: 0,
                        textAlign: 'center',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        backgroundColor: '#b69f40',
                        color: '#333',
                    }}
                    {...getHandleProps(id)}
                >
                    <div style={{ fontFamily: 'Roboto', fontSize: 13.8, marginTop: -24, color:'white' }}>
                        {value.toPrecision(3)}
                    </div>
                </div>
            )
        }
        
        
        function Track({ source, target, getTrackProps }) {
            return (
                <div
                    style={{
                        position: 'absolute',
                        height: 10,
                        zIndex: 1,
                        marginTop: 35,
                        backgroundColor: '#b69f40',
                        borderRadius: 5,
                        cursor: 'pointer',
                        left: `${source.percent}%`,
                        width: `${target.percent - source.percent}%`,
                    }}
                    {...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */}
                />
            )
        }
        
        
    }
}
export default Nh3Slider;