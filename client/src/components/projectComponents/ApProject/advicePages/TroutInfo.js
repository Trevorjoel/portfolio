import React from 'react';
import github from "../Assets/UIHere.8acef598.png";

function TroutInfo() {
    return <Headline />;
}
function Headline() {
    return (<div className="border-box">
            <h4 className="reading-box">Caring For Trout</h4>


            <img alt="Github icon" className="fish-image" src={github}/>

            <p className="reading-box text-left">Ideal temp: 12 Degrees<br/>Ideal Ph: 7.3 <br/>Ideal Ammonia: .0 <br/>Stocking Density: 10 to 20 kg of fish per 1 000 litre of water</p>
            <p className="reading-box text-left">Trout are a cold water species sensitive to high temperature, ammonia and fluctuations in pH.</p>
            <p className="reading-box text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>





        </div>


    );
}
export default TroutInfo;