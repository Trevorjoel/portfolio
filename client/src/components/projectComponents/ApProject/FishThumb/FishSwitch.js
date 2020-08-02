import React from 'react';
import trout from "../Assets/troutPic.png";
import silverPerch from "../Assets/silver_perchPic.png";
import barramundi from "../Assets/barraPic.png";
import classes from "../FishProfile/FishProfile.module.scss";
import custom from "../Assets/pinpng.com-great-white-shark-png-686944.png";
import LoadingContainer from "../Loading/LoadingContainer";

const FishSwitch = (props) =>{
    let img;
    switch (props.selectedName) {
        case 'trout' :
            img = trout
            break;
        case 'trout_custom' :
            img = trout
            break;
        case 'silver perch':
            img = silverPerch
            break;
        case 'silver perch_custom':
            img = silverPerch
            break;
        case 'barramundi':
            img = barramundi
            break;
        case 'barramundi_custom':
            img = barramundi
            break;

        default:
            img = custom
    }
return(
    <div>
        {props.selectedName  ?
    <img
        style={{width:props.size, margin:"30px auto 30px auto"}}
        data-aos="fade-left"
        data-aos-delay="600"
        data-aos-duration="1000"
        alt={props.selectedName}
        className={classes.FishImage}
        src={img}/>: <LoadingContainer/>}
    </div>
)

}
export default FishSwitch;