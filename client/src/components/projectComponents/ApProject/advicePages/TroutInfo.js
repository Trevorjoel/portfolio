import React from 'react';
import github from "../Assets/UIHere.8acef598.png";

function TroutInfo() {
    return <Headline />;
}
function Headline() {
    return (<div className="">


            <img style={{width:"200px"}} alt="Github icon" className="" src={github}/>
            <p className="reading-box text-left">Optimal temp: 12 - 16 Degrees<br/>
            Ideal Ph: 7.3 <br/>Ideal Ammonia: .0 <br/>
            Stocking Density: 10 to 20 kg of fish per 1 000 litre of water</p>
            <p>Trout are a cold-water species sensitive to high temperature, ammonia and pH.<br/>
                Before choosing trout, ensure you can maintain the correct water temperatures.<br/>
                As a general rule, 15 degrees is the target temperature with ranges from 0-22 being ok for the survival of the fish.  <br/>
                At temperatures above 22 degrees Celcius the fish may not utilize dissolved oxygen, becoming stressed, not feeding and eventually perish.<br/>
                Most research recommends 14-16 as the perfect range.</p>

            <p>Trout enjoy pH ranges between 6.5 and 8.0 however a balance must be struck between this more alkaline needs of trout, the nitrifying bacteria and the more acidic needs of the plants in the system.<br/>
              </p>

        </div>


    );
}
export default TroutInfo;