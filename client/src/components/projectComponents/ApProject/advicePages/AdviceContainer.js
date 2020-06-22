import React, {useState, useRef} from "react";
import Accordion from "./Accordion";
import AccordionSub from "./AccordionSub";
import TroutInfo from "./TroutInfo";
import classes from './AdviceContainer.module.css';
import TemperatureInfo from "./TemperatureInfo";
import {Col} from "reactstrap";
import AdviceWiki from "./AdviceWiki";

// Caret symbols &#8897; &#8896; [classes.Color, classes.Size].join(' ')
const AdviceContainer = (props) => {
    return (
        <div id="advice" className={classes.Container}>


            <AdviceWiki


            />

            {/*<p className={ classes}>References for running your system</p>
            <Accordion title="Ammonia"
                       sub1={<AccordionSub title="High" text="Loremu ipsum"/>}
                       sub2={<AccordionSub title="Low" text="Loremu ipsum"/>}
                       active={"0"}
                       translate={"translateY(0)"}
                        height={"0px"}
                       rotate={classes.NoRotate}

            />
            <Accordion  title="Fish"
                        active={"0"}
                        translate={"translateY(0)"}
                        height={"0px"}
                        rotate={classes.NoRotate}
                sub1={<AccordionSub title="Trout" text="Loremu ipsum" info={<TroutInfo/>}/>}
                sub2={<AccordionSub title="Silver Perch" text="Loremu ipsum"/>}
                sub3={<AccordionSub title="Carp" text="Loremu ipsum"/>}
                />
            <Accordion title="Temperature"
                       active={"0"}
                       translate={"translateY(0)"}
                       height={"0px"}
                       rotate={classes.NoRotate}
                       sub1={<AccordionSub title="High" text="Loremu ipsum"
                                           info={<TemperatureInfo/>}
                       />}
                       sub2={<AccordionSub title="Low" text="Loremu ipsum"/>}

            />*/}


        </div>
    )

}

export default AdviceContainer;