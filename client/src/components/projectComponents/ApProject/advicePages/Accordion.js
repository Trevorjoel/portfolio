import React, {useState, useRef} from "react";
import Chevron from "./Chevron";
import classes from './AdviceContainer.module.css';
import AccordionSub from "./AccordionSub";

// Caret symbols &#8897; &#8896; [classes.Color, classes.Size].join(' ')
const Accordion = (props) => {
    const [setActive, setActiveState] = useState(props.activate);
    const [setDisplay, setDisplayState] = useState(props.translate);
    const [setHeight, setHeightState] = useState(props.height);
    const [setRotate, setRotateState] = useState(props.rotate);

    const content = useRef(null);

    function toggleContent(props) {
        setActiveState(setActive === "" ? classes.active : "");
        setHeightState(setActive === classes.active ? "0px" : `500px`)
        setDisplayState(setActive === classes.active ? "translateY(0)" : `translateY(0vh)`)
        setRotateState(
            setActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div className={classes}>
            <button className={[classes.Button, setActive].join(' ')}
                    onClick={toggleContent}>
                <h2 className={classes.Flex} id="">{props.title}
                <Chevron className={[classes.Icon, `${setRotate}`].join(' ') } fill={'#777'} height="20px"/></h2>
            </button>
            <div ref={content} style={{maxHeight:`${setHeight}`}} className={classes.Content}>
                {props.sub}{props.sub1}{props.sub2}{props.sub3}{props.sub4}{props.sub5}
            </div>

        </div>
    )

}

export default Accordion;