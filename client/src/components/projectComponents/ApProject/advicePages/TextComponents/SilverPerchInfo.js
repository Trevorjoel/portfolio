import React from 'react';
import github from "../../Assets/silver_perchPic.png";

function SilverPerchInfoInfo() {
    return (<div className="">


            <img style={{width:"200px"}} alt="Github icon" className="" src={github}/>
            <p className="reading-box text-left">Optimal temp: 25 degrees <br/>
                Ideal Ph: 8
                <br/>Ideal Ammonia: .0 <br/>
                Stocking Density: 15 to 40 kg/m³</p>
            <p>Silver perch are a warm water species it is a very hardy species that tolerates crowding and has a wide physiological tolerance.<br/>
                Silver Perch are omnivores and can fed on greens from your system as a supplement to higher protein feed.<br/>
                As a general rule, 25 degrees is the target temperature with ranges from 12-35 being ok for the survival of
                the fish.<br/>
                At higher temperatures the fish may not utilize dissolved oxygen, becoming stressed, not feeding and eventually
                perish.<br/>
                Lower temperatures can cause the fish’s metabolism to slow down and cause it to stop feeding and die.<br/>
                Most research recommends 23-28 as the perfect range.<br/>
                Silver perch have a wide tolerance to pH, between 6 and 9 however a balance must be struck between this
                more alkaline needs of the fish, the nitrifying bacteria and the more acidic needs of the plants in the system.</p>


        </div>


    );
}
export default SilverPerchInfoInfo;