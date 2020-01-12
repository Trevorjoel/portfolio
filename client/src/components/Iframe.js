import React from "react";


//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
    return (
        <div
            dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}}
        />
    );
}


export default Iframe;