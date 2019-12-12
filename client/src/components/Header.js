import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
const insideStyles = {
    padding: 0,
    position: "absolute",
    top: "36%",
    left: "50%",
    transform: "translate(-50%,-50%)"
};
class Header  extends Component {
  
    
    render() {
        return (
                <Parallax bgImage={require('../images/kyle-sung-oQuP_XBjOMY-unsplash1.jpg')} className="App-header"  strength={500}>
                    <div style={{ height: 400 }}>
                <h1 id="top"  style={insideStyles} className="site-title">
                    PORTFOLIO<br/>
                    Trevor Garrity
                  
                </h1>
                    
                    </div>
                    <p>Full-Stack Web Development and Tech Solutions</p>
                </Parallax>
          
        );
    }
}
export default Header;