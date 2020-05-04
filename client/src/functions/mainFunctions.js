/*
* Functions that make up the main site functionality, as opposed to functions for specific projects/components
* */


import {Button} from "reactstrap";
import React from "react";


// Fix for the problem of back() function taking user to bottom of page. the BrowserRouter did not have an easy solution

export function goBackToElement  (element) {

    async function goBack() {
       return element
    }
    goBack().then((element)=>{
      let el =  document.getElementById(element);
       el.scrollIntoView();
    });
}

// Alerts the user that the project/page can be viewed better rotating the device
export function ScreenAlertComponent () {
    window.addEventListener("resize", () => {
        this.setState({
            rotateMessage: false
        })
    });
    
    if (window.innerWidth < 560 && this.state.rotateMessage === true) {
        return <div className="rotate-device-advice">
            <p className="rotate-device-paragraph">Try rotating your device for a better view.
                <br/>
                <Button className="rotate-device-x btn-group" onClick={() => {
                    this.setState({rotateMessage: false})
                }}> Close </Button></p>
        </div>
        
    }
}