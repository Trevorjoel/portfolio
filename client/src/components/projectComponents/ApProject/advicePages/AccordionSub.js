import React, {useState, useRef} from "react";
import Chevron from "./Chevron";
import classes from './AdviceContainer.module.css';

// Caret symbols &#8897; &#8896; [classes.Color, classes.Size].join(' ')
const AccordionSub = (props) => {
    const [SubsetActive, SubsetActiveState] = useState("");
    const [SubsetHeight, SubsetHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState(classes.NoRotate);
    const subContent = useRef(null);

    function toggleContent() {
        SubsetActiveState(SubsetActive === "" ? classes.active : "");
        SubsetHeightState(SubsetActive === classes.active ? "0px" : `${subContent.current.scrollHeight}px`)
        setRotateState(
            SubsetActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div className={classes}>
            <button className={[classes.SubButton, SubsetActive].join(' ')} onClick={toggleContent}>
                <h4 className={classes.SubFlex} id="">{props.title}
                <Chevron className={[classes.Icon, `${setRotate}`].join(' ') } fill={'#777'} height="15px"/></h4>
            </button>
            <div ref={subContent} style={{height:`${SubsetHeight}`}} className={classes.SubContent}>
                <p className={classes.SubContent} id="">{props.text}</p>
                {props.info}


            </div>

        </div>
    )

}

export default AccordionSub;