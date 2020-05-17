import React, {useState, useRef} from "react";
import Accordion from "./Accordion";
import AccordionSub from "./AccordionSub";
import TroutInfo from "./TroutInfo";
import classes from './AdviceContainer.module.css';
import TemperatureInfo from "./TemperatureInfo";
import {Col} from "reactstrap";

// Caret symbols &#8897; &#8896; [classes.Color, classes.Size].join(' ')
const AdviceContainer = (props) => {
    return (
        <div className={classes.Container}>
            <h1 className="">System Advice pages</h1>
            <p className={ classes}>Get the advice you need when you need it.</p>
            <Accordion title="Ammonia"
                       sub1={<AccordionSub title="High" text="Loremu ipsum"/>}
                       sub2={<AccordionSub title="Low" text="Loremu ipsum"/>}

            />
            <Accordion title="Fish"
                sub1={<AccordionSub title="Trout" text="Loremu ipsum" info={<TroutInfo/>}/>}
                sub2={<AccordionSub title="Silver Perch" text="Loremu ipsum"/>}
                sub3={<AccordionSub title="Carp" text="Loremu ipsum"/>}
                />
            <Accordion title="Temperature"
                       sub1={<AccordionSub title="High" text="Loremu ipsum"
                                           info={<TemperatureInfo/>}
                       />}
                       sub2={<AccordionSub title="Low" text="Loremu ipsum"/>}

            />


        </div>
    )

}

export default AdviceContainer;