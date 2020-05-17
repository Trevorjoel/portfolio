import React from 'react';
import github from "../Assets/UIHere.8acef598.png";

function TroutInfo() {
    return <Headline />;
}
function Headline() {
    return (<div className="">
            <h4 className="reading-box">Caring For Trout</h4>


            <img alt="Github icon" className="fish-image" src={github}/>

            <p className="reading-box text-left">Ideal temp: 12 Degrees<br/>Ideal Ph: 7.3 <br/>Ideal Ammonia: .0 <br/>Stocking Density: 10 to 20 kg of fish per 1 000 litre of water</p>
            <p className="reading-box text-left">Trout are a cold water species sensitive to high temperature, ammonia and fluctuations in pH.</p>





        </div>


    );
}
export default TroutInfo;