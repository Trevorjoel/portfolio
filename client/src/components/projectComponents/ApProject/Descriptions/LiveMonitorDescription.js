import React from 'react';
import Icon from "../Assets/hiclipart.com.png";

import classes from "../FishProfile/FishProfile.module.scss";

const LiveMonitorDescription = (props) =>{

    return(

            <img
                style={{width:"28px", margin:"0px 10px"}}
                data-aos="fade-top"
                data-aos-delay="500"
                data-aos-duration="500"
                alt={"Description"}

                src={Icon}/>

    )

}
export default LiveMonitorDescription;