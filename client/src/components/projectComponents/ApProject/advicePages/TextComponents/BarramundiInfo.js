import React from 'react';
import github from "../../Assets/barra.png";

function BarramundiInfo() {
    return (<div className="">


            <img style={{width:"200px"}} alt="Github icon" className="" src={github}/>
            <p className="reading-box text-left">Optimal temp: 28 degrees <br/>
                Ideal Ph: 6.8
                <br/>Ideal Ammonia: .0 <br/>
                Stocking Density: 15 to 40 kg/m³</p>
            <p>Barramundi is a warm water species it is a relatively hardy species that tolerate s a wide physiological tolerance.<br/>
                As a general rule, 28 degrees is the target temperature with ranges from 18-32 being ok for the survival of the fish.<br/>
                At higher temperatures the fish may not utilize dissolved oxygen, becoming stressed, not feeding and eventually perish. <br/>
                Lower temperatures can cause the fish’s metabolism to slow down and cause it to stop feeding and die.
                Most research recommends 26-30 as the perfect range.<br/>
                Barramundi enjoys pH ranges between 6.5 and 7.2 however a balance must be struck between this more alkaline needs of the fish,
                the nitrifying bacteria and the more acidic needs of the plants in the system.</p>


        </div>


    );
}
export default BarramundiInfo;