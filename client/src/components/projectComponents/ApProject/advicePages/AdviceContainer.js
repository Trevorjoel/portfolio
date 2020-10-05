import React, {useState, useRef} from "react";
import classes from './AdviceContainer.module.scss';
import AdviceWiki from "./AdviceWiki";
import Logo from "../Assets/logos/logo-02.png";
import {Col} from "react-bootstrap";



const AdviceContainer = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setDisplay, setDisplayState] = useState('translateY(0)');
    const [setHeight, setHeightState] = useState('0px');
    const [setRotate, setRotateState] = useState(classes.NoRotate);

    const content = useRef(null);

    function toggleContent(props) {
        setActiveState(setActive === "" ? classes.active : "");
        setHeightState(setActive === classes.active ? "0px" : `680px`)
        setDisplayState(setActive === classes.active ? "translateY(0)" : `translateY(0vh)`)
        setRotateState(
            setActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div id="advice" className={classes.Container}>
            <div className={[classes.Button, setActive].join(' ')}
                    onClick={toggleContent}>

                <strong>    <h3 className={classes.Flex} style={{textAlign: "left", padding:"5px 5px 5px 5px"}} id="">
                    <Col lg={10} sm={10} xs={10} style={{textAlign:"left"}}>View Advice </Col>
                    <Col lg={2} sm={2} xs={2} style={{textAlign:"right"}}>
                        <img style={{width:"40px", padding:"0px"}} className={[classes.Icon, `${setRotate}`].join(' ') }  src={Logo}/>
                </Col></h3></strong>

            </div>

            <div ref={content} style={{maxHeight:`${setHeight}`}} className={classes.Content}>
                <AdviceWiki
                />
            </div>



        </div>
    )

}

export default AdviceContainer;