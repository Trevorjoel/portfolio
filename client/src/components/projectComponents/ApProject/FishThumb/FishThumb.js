import React from 'react';
import trout from "../Assets/troutPic.png";
import silverPerch from "../Assets/silver_perchPic.png";
import barramundi from "../Assets/barraPic.png";
import classes from "../FishProfile/FishProfile.module.scss";

const FishThumb = (props) =>{
    let fishImage;
    if(props.fishParams.id === 1) fishImage = trout
    if (props.fishParams.id === 2)
        fishImage = silverPerch;
    if (props.fishParams.id === 3)
        fishImage = barramundi;
return(
    <div>
    <img
        style={{width:"150px", margin:"30px auto 0px auto"}}
        data-aos="fade-left"
        data-aos-delay="1000"
        data-aos-duration="800"
        alt={props.fishParams.fish_name}
        className={classes.FishImage}
        src={fishImage}/>
    </div>
)

}
export default FishThumb;