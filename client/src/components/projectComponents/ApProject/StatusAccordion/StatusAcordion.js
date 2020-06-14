/*import classes from '../advicePages/AdviceContainer.module.css';*/
import classes from './StatusAccordion.module.scss';
import React, {useState, useRef} from "react";
import Chevron from "../advicePages/Chevron";
import {Badge, Col, Row} from "reactstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-scroll";
import {NavLink as RRNavLink} from "react-router-dom";

// Caret symbols &#8897; &#8896; [classes.Color, classes.Size].join(' ')
const Accordion = (props) => {
    const [setActive, setActiveState] = useState("");
    const [setOpacity, setOpacityState] = useState("0");
    const [setDisplay, setDisplayState] = useState("translateY(0)");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState(classes.NoRotate);

    const content = useRef(null);

    function toggleContent(props) {
        setActiveState(setActive === "" ? classes.active : "");
        setOpacityState(setActive === classes.active ? "0" : "1")
        setHeightState(setActive === classes.active ? "0px" : `500px`)
        setDisplayState(setActive === classes.active ? "translateY(0)" : `translateY(0vh)`)
        setRotateState(
            setActive === classes.active ? classes.NoRotate : classes.Rotate
        )
    }
    return (
        <div>
            <button style={props.addRadius} className={[classes.Button, setActive].join(' ')}
                    onClick={toggleContent}>
                <Row >

                        <Col lg={4} sm={4} xs={4}>
                            <div>
                                <Badge
                                    className={props.divStyle}>
                                    {/* &nbsp;*/}{props.paramName} {props.statusTitle}
                                </Badge>
                            </div>
                        </Col>
                   {/* <Col lg={3} sm={4} xs={4}>
                        {props.statusTitle}
                    </Col>*/}
                    <Col lg={4} sm={4} xs={4}>
                     {props.updatedValue} {props.symbol}
                    </Col>


                        <Col lg={4} sm={4} xs={4} style={{textAlign:"right"}}>
                            <Chevron className={[classes.Icon, `${setRotate}`].join(' ') }  fill={'#777'} height="20px"/>
                        </Col>

                </Row>
            </button>

            <div ref={content} style={{maxHeight:`${setHeight}`}} className={classes.Content}>
                <div className={classes.InnerMessage}>
                    <p data-aos="fade"
                       data-aos-delay="0"
                       data-aos-duration="1000" className="">{props.adviceText}</p>

                     <Link
                        exact
                        activeClass=""
                        to="advice"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <p
                            data-aos="fade"
                            data-aos-delay="0"
                            data-aos-duration="1000"
                            activeClassName="" tag={RRNavLink} href="/" exact to="/sensors">Please see <a href="#"> our wiki.</a></p>
                    </Link>

                    <Button variant="info" size={"sm"}>Modify {
                        props.paramName === "" ? "nh3" : props.paramName} alerts</Button><br/>
                    <br/>
                </div>
            </div>

        </div>
    )

}

export default Accordion;