import React from 'react';
import github from "../Assets/IMGBIN_temperature-thermometer-cold-png_i1w0Q371.8b0e0a73.png";

function TroutInfo() {
    return <Headline />;
}
function Headline() {
    return (<div className="border-box">
            <h4 className="reading-box">Managing Temperature</h4>


            <img alt="Github icon" className="temp-icon" src={github}/>

            <p className="reading-box text-left">Target temperature: 12 Degrees<br/>Current temperature: 11 <br/></p>
            <p className="reading-box text-left"><bold>Step 1)</bold></p>
            <p className="reading-box text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="reading-box text-left"><bold>Step 2)</bold></p>
            <p className="reading-box text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>



        </div>


    );
}
export default TroutInfo;