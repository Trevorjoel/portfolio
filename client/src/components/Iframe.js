import React from "react";


// Configurable Iframe component
function Iframe(props) {
    return (
        <div
            dangerouslySetInnerHTML={{__html: props.iframe ? props.iframe : ""}}
        />
    );
}


export default Iframe;